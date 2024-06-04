import {
  SignedIn,
  SignedOut,
  UserButton,
  RedirectToSignIn
} from '@clerk/nextjs'

const Home = async () => {

  return (
    <>
      {/* <Header user={user} /> */}
      <div className="lg:max-w-7xl md:max-w-5xl w-[95%] mx-auto flex flex-col items-center gap-2 md:gap-2">
        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
        <SignedIn>
          <div className="w-full mt-2">
            <UserButton />
          </div>
          <h1 className="text-4xl max-w-4xl font-bold text-black text-center py-5">Subscribe to recieve SMS notifications for upcoming events in your google calendar from us</h1>
          <div className="p-4 flex flex-col gap-4">
            <input type="email" placeholder="Enter your email" className="p-2 border rounded text-white" />
            <div className="flex items-center">
              <input type="checkbox" id="smsConsent" className="mr-2" />
              <label htmlFor="smsConsent" className="text-black">I agree to receive SMS based on my data</label>
            </div>
            <button className="bg-blue-500 text-white p-2 rounded w-full">Subscribe</button>
            <p className="text-xs text-black max-w-xs text-center mt-2">By subscribing via text, you agree to receive marketing text messages at the phone number provided. Reply STOP to cancel. Msg rates may apply.</p>
          </div>
        </SignedIn>
        {/* <LogoCloud />
				<Overviews />
				<Features /> */}
        {/* <Pricing user={user} userSubscription={userSubscription} /> */}
        {/* <Testimonials />
				<Faq />
				<Footer /> */}
      </div >
    </>
  );
};

export default Home;
