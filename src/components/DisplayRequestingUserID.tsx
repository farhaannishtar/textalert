import { CookieOptions, createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  const { userId } = auth();
  console.log("userId:", userId);
  if (!userId) {
    return NextResponse.json({ message: "User not found" });
  }

  // Get the OAuth access token for the user
  try {
    const provider = "oauth_google";

    const clerkResponse = await clerkClient().users.getUserOauthAccessToken(
      userId,
      provider
    );

    // Assuming the response has a 'data' property that contains the array
    const accessToken = clerkResponse.data[0].token;
    return NextResponse.json({ accessToken });
  } catch (error) {
    console.error("Error in GET function:", error);
    throw new Error("An error occurred");
  }
}

async function createClerkSupabaseClient() {
  const cookieStore = cookies();
  const { getToken } = auth();

  const token = await getToken({ template: "supabase" });
  const authToken = token ? { Authorization: `Bearer ${token}` } : null;

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      global: { headers: { "Cache-Control": "no-store", ...authToken } },
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value)
          );
        },
      },
    }
  );
}

export default async function DisplayRequestingUserID() {
  const supabaseClerkClient = await createClerkSupabaseClient();

  try {
    // Call the GET function to get the response
    const accessToken = await GET();
    console.log("accessToken:", accessToken);
    // insert a row
    //
    // const { data, error } = await supabaseClerkClient
    //   .from("google_oauth_tokens")
    //   .insert([{ access_token: "69", refresh_token: "99" }])
    //   .select();

    let { data: google_oauth_tokens, error } = await supabaseClerkClient
      .from("google_oauth_tokens")
      .select("user_id");

    if (error) {
      return <p>Error: {JSON.stringify(error, null, 2)}</p>;
    }

    return (
      <div>
        <h2>Google OAuth table</h2>
        {!google_oauth_tokens ? (
          <p>No data</p>
        ) : (
          <div>
            {/* {data.map((row: any) => (
              <li key={row.id}>{row.access_token}</li>
            ))}
            <li>The user ID should be shown ^</li> */}
            {google_oauth_tokens[0] && (
              <div>{google_oauth_tokens[0].user_id}</div>
            )}
          </div>
        )}
      </div>
    );
  } catch (error) {
    console.error("Error in DisplayRequestingUserID:", error);
    return <p>Error: {JSON.stringify(error, null, 2)}</p>;
  }
}