import type { LanguageItem, NavItem, PersonalInfo } from "@/lib/types";

export const PERSONAL_INFO: PersonalInfo = {
	name: "Benjamin Rossignol",
	title: "Data Engineer",
	email: "benjamin.rossignol.11@gmail.com",
	phone: "+33 7 82 71 99 92",
	location: "Paris, France",
	linkedinUsername: "benjaminrossignol11",
	githubUsername: "benjiiross",
	tagline:
		"Award-winning Data & AI Engineer. Bridging the gap between Machine Learning research and production-ready cross-platform applications.",
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
		level: "C1 (TOEIC 970/990)",
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
