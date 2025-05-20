import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const msSansSerif = localFont({
	src: [
		{
			path: "../font/ms_sans_serif.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "../font/ms_sans_serif_bold.woff2",
			weight: "700",
			style: "normal",
		},
	],
	variable: "--font-ms-sans-serif",
	display: "swap",
});

export const metadata: Metadata = {
	title: "98.ui",
	description: "win98 ui components",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={msSansSerif.variable}>
			<body>{children}</body>
		</html>
	);
}
