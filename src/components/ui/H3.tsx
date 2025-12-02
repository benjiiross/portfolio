import type { ComponentProps } from "react";

interface H3Props extends ComponentProps<"h3"> {}

export const H3 = ({ children, className, ...rest }: H3Props) => {
	return (
		<h3
			className={`mb-4 text-2xl font-semibold text-purple-400 ${className || ""}`}
			{...rest}
		>
			{children}
		</h3>
	);
};
