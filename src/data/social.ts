import { Github, Linkedin, Mail } from "lucide-react";
import type { SocialLink } from "@/lib/types";

export const socialLinks: SocialLink[] = [
	{
		name: "GitHub",
		url: "https://github.com/votre_profil",
		icon: Github,
	},
	{
		name: "LinkedIn",
		url: "https://linkedin.com/in/votre_profil",
		icon: Linkedin,
	},
	{
		name: "Email",
		url: `mailto:${"benjamin.martin@example.com"}`,
		icon: Mail,
	},
];
