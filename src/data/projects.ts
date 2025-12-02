import { Award, Briefcase, Code2 } from "lucide-react";
import type { Project } from "@/lib/types";

export const projects: Project[] = [
	{
		title: "Waverr",
		description:
			"No-code platform to create financial strategies, back-test them and run periodically on brokers. Won 3rd place pitching in front of Microsoft, Thales, and Capgemini.",
		tech: ["React", "Python", "Graph Theory", "Financial APIs"],
		date: "Apr 2024 - Jul 2024",
		icon: Award,
		highlights: [
			"🥉 3rd Place Winner",
			"Graph-to-Code Engine",
			"Back-testing System",
		],
		github: "https://github.com/benjiiross",
	},
	{
		title: "SNCF Data Hackathon",
		description:
			"Analysis of French transportation data focusing on disabled-friendly stations and air quality inside Paris train stations. Created platform to visualize work done by colleagues.",
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
		title: "IDS Dashboard - Nokia Bell Labs",
		description:
			"Created interactive dashboard to explain classification and clustering of malicious packets for Intrusion Detection Systems using Machine Learning.",
		tech: ["Python", "ML", "Sklearn", "Data Visualization"],
		date: "Nov 2023 - Apr 2024",
		icon: Briefcase,
		highlights: ["Research Project", "ML Classification", "Security Analytics"],
	},
];
