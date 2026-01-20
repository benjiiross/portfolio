import type { ComponentProps } from "react";
import type { Social } from "@/data/socials";

interface SocialLinkItemProps extends ComponentProps<"a"> {
	link: Social;
}

export const SocialLinkItem = ({ link, ...rest }: SocialLinkItemProps) => {
	const Icon = link.icon;

	const defaultClasses =
		"text-gray-400 transition-colors hover:text-purple-500";

	return (
		<a
			key={link.name}
			href={link.url}
			target="_blank"
			rel="noopener noreferrer"
			className={defaultClasses}
			aria-label={link.name}
			{...rest}
		>
			<Icon size={28} />
		</a>
	);
};
