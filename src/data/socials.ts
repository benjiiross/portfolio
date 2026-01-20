import { Github, Linkedin, type LucideIcon, Mail } from "lucide-react";
import { me } from "./me";
import { githubBaseUrl, linkedInBaseUrl } from "./urls";

export interface Social {
	name: string;
	url: string;
	icon: LucideIcon;
}
export const socials: Social[] = [
	{
		name: "GitHub",
		url: githubBaseUrl,
		icon: Github,
	},
	{
		name: "LinkedIn",
		url: linkedInBaseUrl,
		icon: Linkedin,
	},
	{
		name: "Email",
		url: `mailto:${me.email}`,
		icon: Mail,
	},
];
