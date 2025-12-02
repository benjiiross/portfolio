import type { LucideIcon } from "lucide-react";

export interface Project {
	title: string;
	description: string;
	tech: string[];
	date: string;
	icon: LucideIcon;
	highlights: string[];
	github?: string;
	demo?: string;
}

export interface Experience {
	role: string;
	company: string;
	period: string;
	location: string;
	highlights: string[];
}

export interface Skill {
	name: string;
	level: number;
	category: "language" | "ai" | "cloud" | "data" | "web";
}

export interface SocialLink {
	name: string;
	url: string;
	icon: LucideIcon;
}

export interface NavItem {
	label: string;
	href: string;
}

export interface PersonalInfo {
	name: string;
	title: string;
	email: string;
	phone: string;
	location: string;
	linkedinUsername: string;
	tagline: string;
}

export interface LanguageItem {
	language: string;
	flag: string;
	level: string;
}
