import { Award, Briefcase, Code2, Smartphone } from "lucide-react";
import type { Project } from "@/lib/types";
import { GITHUB_WAVERR_REPO } from "@/lib/utils";

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
		date: "2024 - Present",
		icon: Smartphone,
		highlights: [
			"100% Shared UI & Logic",
			"Neo-Brutalist Design System",
			"Advanced Animations",
		],
		github: "https://github.com/benjiiross/dionys_showcase",
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
		github: GITHUB_WAVERR_REPO,
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
	},
	{
		title: "VoteVest 🥈",
		description:
			"**Decentralized crowdfunding platform** featuring an alternative dividend system based on **blockchain governance**.",
		tech: ["Blockchain", "Smart Contracts", "Fintech", "Web3"],
		date: "2023 - 2024",
		icon: Award,
		highlights: [
			"🥈 2nd Place Winner - EFREI Tech Day",
			"Blockchain-based Governance",
			"Alternative Dividend Logic",
		],
		github: "https://github.com/benjiiross/VoteVestShowcase",
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
];
