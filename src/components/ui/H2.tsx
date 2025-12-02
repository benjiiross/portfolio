import type { ComponentProps } from "react";

interface H2Props extends ComponentProps<"h2"> {}

export const H2 = ({ children, className, ...rest }: H2Props) => {
	return (
		<h2
			className={`mb-12 text-4xl font-bold text-center ${className || ""}`}
			{...rest}
		>
			{children}
		</h2>
	);
};
