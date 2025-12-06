import type { ComponentProps } from "react";

interface HeroTitleProps extends ComponentProps<"h1"> {}

export const HeroTitle = ({ children }: HeroTitleProps) => {
	return (
		<h1 className="mb-8 text-5xl font-bold text-transparent md:text-7xl bg-linear-to-r from-purple-400 via-purple-500 to-pink-500 bg-clip-text">
			{children}
		</h1>
	);
};
