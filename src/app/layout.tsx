"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import { ThemeProvider } from "../components/theme-provider";
import { siteConfig } from "../config/site";
import dynamic from "next/dynamic";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import {
	ClerkProvider,
} from '@clerk/nextjs'


// export const metadata: Metadata = {
// 	title: {
// 		default: siteConfig.name,
// 		template: `%s | ${siteConfig.name}`,
// 	},
// 	description: siteConfig.description,
// 	keywords: [
// 		"Next.js",
// 		"React",
// 		"Tailwind CSS",
// 		"Server Components",
// 		"Radix UI",
// 		"SaaS",
// 		"Boilerplate",
// 		"Template",
// 		"Saas boilerplate",
// 		"Saas starter kit",
// 	],
// 	authors: [
// 		{
// 			name: "salmandotweb",
// 			url: "https://www.salmandotweb.me",
// 		},
// 	],
// 	creator: "salmandotweb",
// 	themeColor: [
// 		{ media: "(prefers-color-scheme: light)", color: "white" },
// 		{ media: "(prefers-color-scheme: dark)", color: "black" },
// 	],
// 	openGraph: {
// 		type: "website",
// 		locale: "en_US",
// 		url: siteConfig.url,
// 		title: siteConfig.name,
// 		description: siteConfig.description,
// 		siteName: siteConfig.name,
// 	},
// 	twitter: {
// 		card: "summary_large_image",
// 		title: siteConfig.name,
// 		description: siteConfig.description,
// 		images: [`${siteConfig.url}/og.jpg`],
// 		creator: "@salmandotweb",
// 	},
// 	icons: {
// 		icon: "/brand/favicon.svg",
// 		shortcut: "/favicon-16x16.png",
// 		apple: "/apple-touch-icon.png",
// 	},
// 	manifest: `${siteConfig.url}/site.webmanifest`,
// };

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const CrispWithNoSSR = dynamic(() => import("../config/crisp"));
	return (
		<ClerkProvider>
			<html lang="en" className={inter.className}>
				{/* <CrispWithNoSSR /> */}
				{/* <PHProvider> */}
				<body>
					{/* <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} /> */}
					{/* <Session> */}
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						{children}
					</ThemeProvider>
					{/* </Session> */}
				</body>
				{/* </PHProvider> */}
			</html>
		</ClerkProvider>
	);
}
