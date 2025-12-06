import type { ComponentProps } from "react";

interface PurpleTextProps extends ComponentProps<"span"> {}

export const PurpleText = ({
	children,
	className = "",
	...rest
}: PurpleTextProps) => {
	return (
		<span className={`text-purple-500 ${className}`} {...rest}>
			{children}
		</span>
	);
};
