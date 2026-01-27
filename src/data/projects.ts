import {
	Award,
	Briefcase,
	Code2,
	type LucideIcon,
	Shirt,
	Smartphone,
} from "lucide-react";
import { githubBaseUrl, githubWaverrRepo } from "@/data/urls";

export interface Project {
	title: string;
	description: string;
	tech: string[];
	date: string;
	icon: LucideIcon;
	highlights: string[];
	github?: string;
	linkedin?: string;
	demo?: string;
}

export const projects: Project[] = [
	{
		title: "Dionys",
		description:
			"Modern cross-platform board game companion featuring a Neo-Brutalist UI. Built with **Kotlin Multiplatform** to deliver a unified experience on **Android and iOS**.",
		tech: [
			"Kotlin Multiplatform",
			"Compose Multiplatform",
			"Clean Architecture",
			"Compottie",
		],
		date: "sep 2025 - Present",
		icon: Smartphone,
		highlights: [
			"100% Shared UI & Logic",
			"Neo-Brutalist Design System",
			"Advanced Animations",
		],
		github: `${githubBaseUrl}/dionys_showcase`,
	},
	{
		title: "SNCF Data Hackathon 🥉",
		description:
			"Analysis of French **transportation data** focusing on **disabled-friendly stations** and **air quality** inside Paris train stations.",
		tech: ["Python", "Data Viz", "Pandas", "PlotlyJS"],
		date: "Jun 2024",
		icon: Code2,
		highlights: [
			"Selected to Pitch",
			"Accessibility Analysis",
			"Air Quality Monitoring",
		],
		github: `${githubBaseUrl}/sncf-cloud-challenge`,
		linkedin:
			"https://www.linkedin.com/posts/mghassany_cest-le-rendez-vous-annuel-pour-les-%C3%A9tudiants-ugcPost-7208940838821711874-IakN?",
	},
	{
		title: "Waverr 🥉",
		description:
			"No-code platform to create financial strategies, back-test them and run periodically on brokers. Won 3rd place pitching in front of **Microsoft**, **Thales**, and **Capgemini**.",
		tech: ["React", "Python", "Graph Theory", "Financial APIs"],
		date: "Apr 2024 - Jul 2024",
		icon: Award,
		highlights: [
			"🥉 3rd Place Winner",
			"Graph-to-Code Engine",
			"Back-testing System",
		],
		github: githubWaverrRepo,
		linkedin:
			"https://www.linkedin.com/posts/benjaminrossignol11_datascience-artificialintelligence-finance-activity-7217278801930563584-cXzp",
	},
	{
		title: "TryMe (Tech Lead)",
		description:
			"AI-powered virtual try-on ecosystem. Built as a **Monorepo** featuring a Chrome extension and a web dashboard to visualize 3D mannequins from e-commerce product pages.",
		tech: [
			"Turborepo",
			"Next.js 15",
			"WXT (Web Extension)",
			"FastAPI",
			"Poetry",
			"TailwindCSS",
		],
		date: "Jan 2024 - Jun 2024",
		icon: Shirt,
		highlights: [
			"Monorepo Architecture (Turbo)",
			"ML Pipeline (FastAPI & Rembg)",
			"3D Model Visualization",
			"Cross-browser Extension",
		],
		github: `${githubBaseUrl}/TryMeShowcase`,
	},
	{
		title: "IDS Dashboard - Nokia Bell Labs",
		description:
			"Real-time web interface to visualize a patent-pending **Intrusion Detection System**. Developed an interactive platform to monitor **ML-based network security** and explain complex attack classification logic.",
		tech: ["Python", "Plotly Dash", "Scikit-Learn", "GitLab CI/CD"],
		date: "Nov 2023 - Apr 2024",
		icon: Briefcase,
		highlights: [
			"Patent Visualization (NRT-MAC)",
			"4,000+ Lines Codebase Refactor",
			"Interactive ML Simulations",
		],
	},
	{
		title: "VoteVest 🥈",
		description:
			"**Decentralized crowdfunding platform** featuring an alternative dividend system based on **blockchain governance**.",
		tech: ["Blockchain", "Smart Contracts", "Fintech", "Web3"],
		date: "Feb 2023 - Jun 2023",
		icon: Award,
		highlights: [
			"🥈 2nd Place Winner - EFREI Tech Day",
			"Blockchain-based Governance",
			"Alternative Dividend Logic",
		],
		github: `${githubBaseUrl}/VoteVest`,
	},
];
