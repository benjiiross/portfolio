import {
	BookOpen,
	Cloud,
	Cpu,
	Languages,
	type LucideIcon,
	ShieldCheck,
	Terminal,
} from "lucide-react";

export interface Certification {
	name: string;
	issuer: string;
	date: string;
	icon: LucideIcon;
	link: string;
}

export const certifications: Certification[] = [
	{
		name: "CS50x: Introduction to Computer Science",
		issuer: "Harvard University",
		date: "Dec 2025",
		icon: Terminal,
		link: "https://certificates.cs50.io/b8963ed2-ad83-4ba6-8690-b1073abd4cae.pdf",
	},
	{
		name: "AWS Cloud Quest: Cloud Practitioner",
		issuer: "Amazon Web Services Training and Certification",
		date: "Jan 2025",
		icon: Cloud,
		link: "https://www.credly.com/badges/92e87f74-5008-4a0c-ae11-cab2778d7aea",
	},
	{
		name: "Microsoft Certified: Azure AI Fundamentals",
		issuer: "Microsoft",
		date: "Dec 2024",
		icon: Cpu,
		link: "https://www.credly.com/badges/bfd840d5-503f-43bc-8b6d-f6033908ea05",
	},
	{
		name: "TOEIC Gold Medal (970/990)",
		issuer: "ETS Global",
		date: "Jul 2024",
		icon: Languages,
		link: "https://www.etsglobal.org/fr/en/digital-score-report/08964C2E781BA07BE0FBCD944539FB63BA0C95FDE61D6EF384ACFF10D01ED8B2c2ZMbWdsam5MbnVCNDhnY1VLeis4L0RIT2lPakUzS2IzY1BSb3gvRm9BOFRKQXFS",
	},
	{
		name: "Microsoft Certified: Azure Fundamentals",
		issuer: "Microsoft",
		date: "May 2024",
		icon: ShieldCheck,
		link: "https://www.credly.com/badges/a937838c-273a-45d2-a527-31f9cfafbcce/public_url",
	},
	{
		name: "Voltaire French Proficiency Certification (757/1000)",
		issuer: "Certificat Voltaire",
		date: "Jun 2023",
		icon: BookOpen,
		link: "https://mon.certificat-voltaire.fr/verification-certificat?code=EAPE76H",
	},
];
