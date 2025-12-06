import type { LanguageItem, NavItem, PersonalInfo } from "@/lib/types";

export const PERSONAL_INFO: PersonalInfo = {
	name: "Benjamin Rossignol",
	title: "Data & AI Engineer",
	email: "benjamin.rossignol.11@gmail.com",
	phone: "+33 7 82 71 99 92",
	location: "Paris, France",
	linkedinUsername: "benjaminrossignol11",
	githubUsername: "benjiiross",
	tagline:
		"Master's student at EFREI Paris specializing in Data & AI. Building innovative solutions at the intersection of machine learning, cloud computing, and software engineering.",
};

export const LANGUAGES: LanguageItem[] = [
	{
		language: "French",
		flag: "🇫🇷",
		level: "Native",
	},
	{
		language: "English",
		flag: "🇬🇧",
		level: "C2 (TOEIC 970)",
	},
	{
		language: "Chinese",
		flag: "🇨🇳",
		level: "A1 (HSK 1)",
	},
];

export const NAV_ITEMS: NavItem[] = [
	{
		label: "Home",
		href: "#home",
	},
	{
		label: "About",
		href: "#about",
	},
	{
		label: "Projects",
		href: "#projects",
	},
	{
		label: "Contact",
		href: "#contact",
	},
];
