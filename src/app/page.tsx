import {
  SignedIn,
  SignedOut,
  UserButton,
  RedirectToSignIn,
} from "@clerk/nextjs";
import DisplayRequestingUserID from "../components/DisplayRequestingUserID";

const Home = async () => {

  return (
    <>
      <div className="lg:max-w-7xl md:max-w-5xl w-[95%] mx-auto flex flex-col items-center gap-2 md:gap-2">
        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
        <SignedIn>
          <div className="w-full mt-2">
            <UserButton />
          </div>
          <h1 className="text-4xl max-w-4xl font-bold text-black text-center py-5">
            Subscribe to recieve SMS notifications for upcoming events in your
            google calendar from us by
          </h1>
          <h3>
            Click the Profile Icon {">"} Manage Account {">"} Profile {">"}{" "}
            Connect Account
          </h3>
          <DisplayRequestingUserID />
        </SignedIn>
      </div>
    </>
  );
};

export default Home;
