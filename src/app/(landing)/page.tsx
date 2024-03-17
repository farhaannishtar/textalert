import Faq from "@/src/components/landing/Faq";
import Features from "@/src/components/landing/Features";
import Header from "@/src/components/landing/Header";
import LogoCloud from "@/src/components/landing/LogoCloud";
import Overviews from "@/src/components/landing/Overviews";
import Pricing from "@/src/components/landing/Pricing";
import Testimonials from "@/src/components/landing/Testimonials";
import Footer from "@/src/components/layout/Footer";
// import { getCurrentUser } from "@/src/lib/session";
import { getUserSubscription } from "@/src/lib/subscription";
import Link from "next/link";

const Home = async () => {
	// const user = await getCurrentUser();
	// const userSubscription = user ? await getUserSubscription(user?.id!) : null;

	return (
		<>
			{/* <Header user={user} /> */}
			<div className="lg:max-w-7xl md:max-w-5xl w-[95%] mx-auto flex flex-col items-center gap-2 md:gap-2">
				<h1 className="text-4xl font-bold text-black text-left py-5">Enter details to recieve text notifications for upcoming events in your google calendar</h1>
				<div className="p-4 flex flex-col gap-4">
					<input type="email" placeholder="Enter your email" className="p-2 border rounded text-white" />
					<input type="number" placeholder="Enter a number" className="p-2 border rounded text-white" />
				</div>
				{/* <LogoCloud />
				<Overviews />
				<Features /> */}
				{/* <Pricing user={user} userSubscription={userSubscription} /> */}
				{/* <Testimonials />
				<Faq />
				<Footer /> */}
			</div>
		</>
	);
};

export default Home;
