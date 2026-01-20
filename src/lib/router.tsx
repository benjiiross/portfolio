import type { ComponentType } from "react";
import { About } from "@/components/sections/About/About";
import { Certifications } from "@/components/sections/Certifications/Certifications";
import { Contact } from "@/components/sections/Contact/Contact";
import { Experience } from "@/components/sections/Experience/Experience";
import { Hero } from "@/components/sections/Hero/Hero";
import { Projects } from "@/components/sections/Projects/Projects";
import type { SectionWrapperProps } from "@/components/ui/Section";

export interface Section {
	label: string;
	id: string;
	component: ComponentType<SectionWrapperProps>;
}

export const router: Section[] = [
	{
		label: "Home",
		id: "home",
		component: Hero,
	},
	{
		label: "About",
		id: "about",
		component: About,
	},
	{
		label: "Certifications",
		id: "certifications",
		component: Certifications,
	},
	{
		label: "Experience",
		id: "experience",
		component: Experience,
	},
	{
		label: "Projects",
		id: "projects",
		component: Projects,
	},
	{
		label: "Contact",
		id: "contact",
		component: Contact,
	},
];
