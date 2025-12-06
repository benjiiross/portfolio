import type { ComponentProps } from "react";

interface CertificationBadgeProps extends ComponentProps<"span"> {}

export const CertificationBadge = ({
	children: text,
}: CertificationBadgeProps) => {
	return (
		<span className="px-3 py-1 text-sm text-purple-300 border border-purple-700 rounded-full bg-purple-900/50">
			{text}
		</span>
	);
};
