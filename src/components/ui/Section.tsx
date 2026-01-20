import type { ComponentProps } from "react";

export interface SectionWrapperProps {
	id: string;
}

interface SectionProps extends ComponentProps<"section"> {}

export const Section = ({ children, id, ...rest }: SectionProps) => {
	return (
		<section id={id} {...rest}>
			{children}
		</section>
	);
};
