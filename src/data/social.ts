import { Github, Linkedin, Mail } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/constants";
import type { SocialLink } from "@/lib/types";

export const socialLinks: SocialLink[] = [
	{
		name: "GitHub",
		url: `https://github.com/${PERSONAL_INFO.githubUsername}`,
		icon: Github,
	},
	{
		name: "LinkedIn",
		url: `https://www.linkedin.com/in/${PERSONAL_INFO.linkedinUsername}`,
		icon: Linkedin,
	},
	{
		name: "Email",
		url: `mailto:${PERSONAL_INFO.email}`,
		icon: Mail,
	},
];
