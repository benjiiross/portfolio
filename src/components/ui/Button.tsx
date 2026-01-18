import type { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
	variant?: "primary" | "outline";
	href?: string;
}

export const Button = ({
	children,
	variant = "primary",
	href,
	onClick,
	className = "",
	...rest
}: ButtonProps) => {
	const baseStyles =
		"px-8 py-3 rounded-lg font-medium transition-all duration-200 inline-flex items-center justify-center";

	const variants = {
		primary:
			"bg-purple-600 hover:bg-purple-700 text-white transform hover:scale-105",
		outline:
			"border-2 border-purple-600 text-purple-500 hover:bg-purple-600 hover:text-white",
	};

	const classes = `${baseStyles} ${variants[variant]} ${className}`;

	if (href) {
		return (
			<a href={href} className={classes}>
				{children}
			</a>
		);
	}

	return (
		<button onClick={onClick} className={classes} type="button" {...rest}>
			{children}
		</button>
	);
};
