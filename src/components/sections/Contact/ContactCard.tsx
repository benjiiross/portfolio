import type { LucideIcon } from "lucide-react";
import type { ComponentProps } from "react";

interface ContactCardProps extends ComponentProps<"a"> {
	icon: LucideIcon;
	title: string;
	value: string;
}

export const ContactCard = ({
	icon: Icon,
	title,
	value,
	className,
	...rest
}: ContactCardProps) => {
	const defaultClasses =
		"flex items-center gap-3 p-4 transition-colors bg-gray-900 border border-gray-700 rounded-lg hover:bg-gray-700 hover:border-purple-600";

	return (
		<a className={`${defaultClasses} ${className || ""}`} {...rest}>
			<Icon className="text-purple-500" size={24} />
			<div>
				<div className="text-sm text-gray-500">{title}</div>
				<div className="text-sm text-gray-300">{value}</div>
			</div>
		</a>
	);
};
