import { auth } from "@clerk/nextjs/server";
import { CookieOptions, createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

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
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value))
      
        },
      },
    }
  );
}

export default async function DisplayRequestingUserID() {
  const supabaseClerkClient = await createClerkSupabaseClient();
  console.log("supabaseClerkClient", supabaseClerkClient);
  const { data, error } = await supabaseClerkClient.from("google_oauth_tokens").select('*');

  console.log("data", data);
  console.log("error", error);
  const {
    data: { user },
  } = await supabaseClerkClient.auth.getUser()
  console.log("user", user);

  if (error) {
    return <p>Error: {JSON.stringify(error, null, 2)}</p>;
  }

  return (
    <div>
      <h2>Google OAuth table</h2>
      {!data ? (
        <p>No data</p>
      ) : (
        <ul>
          {data.map((row: any) => (
            <li key={row.id}>{row.access_token}</li>
          ))}
          <li>The user ID should be shown ^</li>
        </ul>
      )}
    </div>
  );
}