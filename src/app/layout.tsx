import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./normalize.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Benjamin Rossignol | Data Engineer",
	description:
		"Portfolio of Benjamin Rossignol - Master's student in Data & AI at EFREI Paris. Specialized in Machine Learning, Cloud Computing, and Software Engineering.",
	keywords: [
		"Data Engineer",
		"AI",
		"Machine Learning",
		"Cloud Computing",
		"AWS",
		"Azure",
		"Python",
	],
	authors: [{ name: "Benjamin Rossignol" }],
	openGraph: {
		title: "Benjamin Rossignol | Data & AI Engineer",
		description:
			"Portfolio showcasing projects in Data Engineering, Machine Learning, and Cloud Computing",
		type: "website",
	},
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html lang="en" className="scroll-smooth">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
