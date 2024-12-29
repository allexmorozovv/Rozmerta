import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { FooterComp } from "@/src/widgets/Footer";
import Header from "@/src/widgets/Header";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
// const geistMono = localFont({
// 	src: "./fonts/GeistMonoVF.woff",
// 	variable: "--font-geist-mono",
// 	weight: "100 900",
// });

const vollkorn = localFont({
	src: "./fonts/subset-Vollkorn-Regular.woff",
	variable: "--font-vollkorn",
	weight: "700",
});

const greatVibes = localFont({
	src: "./fonts/GreatVibes-Regular.woff",
	variable: "--font-great-vibes-regular",
	weight: "400",
});

export const metadata: Metadata = {
	title: "Rozmerta",
	description: "Restaurant of European cuisine",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				// className={`${geistSans.variable} ${geistMono.variable} antialiased`}
				className={` ${greatVibes.variable} ${vollkorn.variable} bg-bg-color antialiased`}
			>
				<div className="container bg-bg-color px-10">
					<Header />
					{children}
					<FooterComp />
				</div>
			</body>
		</html>
	);
}
