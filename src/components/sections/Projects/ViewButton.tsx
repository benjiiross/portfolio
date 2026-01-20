import { Github, Linkedin } from "lucide-react";
import type { ComponentProps } from "react";

interface AProps extends ComponentProps<"a"> {
	variant?: "github" | "linkedin";
}

export const ViewButton = ({ variant = "github", href, ...rest }: AProps) => {
	const config = {
		github: {
			icon: Github,
			label: "GitHub",
			styles:
				"bg-gray-800 border-gray-700 hover:bg-gray-700 hover:border-purple-600",
			iconColor: "text-white",
		},
		linkedin: {
			icon: Linkedin,
			label: "LinkedIn",
			styles:
				"bg-blue-900/20 border-blue-800/50 hover:bg-blue-900/40 hover:border-blue-500",
			iconColor: "text-blue-400",
		},
	};

	const { icon: Icon, label, styles, iconColor } = config[variant];

	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className={`inline-flex items-center justify-center flex-1 gap-2 px-4 py-2 text-sm font-medium text-white transition-all border rounded-lg group ${styles}`}
			{...rest}
		>
			<Icon
				className={`w-4 h-4 transition-transform group-hover:scale-110 ${iconColor}`}
			/>
			<span className="whitespace-nowrap">{label}</span>
		</a>
	);
};
