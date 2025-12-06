import { Github, Linkedin, Mail } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/constants";
import type { SocialLink } from "@/lib/types";
import { GITHUB_BASE_URL, LINKEDIN_BASE_URL } from "@/lib/utils";

export const socialLinks: SocialLink[] = [
	{
		name: "GitHub",
		url: GITHUB_BASE_URL,
		icon: Github,
	},
	{
		name: "LinkedIn",
		url: LINKEDIN_BASE_URL,
		icon: Linkedin,
	},
	{
		name: "Email",
		url: `mailto:${PERSONAL_INFO.email}`,
		icon: Mail,
	},
];
