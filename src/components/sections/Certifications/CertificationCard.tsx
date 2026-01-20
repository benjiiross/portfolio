import { ExternalLink } from "lucide-react";
import type { Certification } from "@/data/certifications";

interface CertificationCardProps {
	certification: Certification;
}

export const CertificationCard = ({
	certification,
}: CertificationCardProps) => {
	const Icon = certification.icon;

	return (
		<a
			href={certification.link}
			target="_blank"
			rel="noopener noreferrer"
			className="relative flex items-center gap-4 p-4 transition-all duration-300 border group bg-gray-800/40 border-gray-700/50 rounded-2xl hover:border-purple-500/50 hover:bg-gray-800/60 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10"
		>
			<div className="relative p-3 overflow-hidden text-purple-400 transition-colors bg-purple-900/20 rounded-xl group-hover:text-purple-300">
				<Icon
					size={24}
					className="relative z-10 transition-transform duration-300 group-hover:scale-110"
				/>
				<div className="absolute inset-0 transition-opacity opacity-0 bg-purple-500/10 group-hover:opacity-100" />
			</div>

			<div className="flex-1 min-w-0">
				<h4 className="text-sm font-bold leading-snug text-gray-100 transition-colors group-hover:text-purple-300 line-clamp-2">
					{certification.name}
				</h4>
				<p className="mt-1 text-xs leading-snug text-gray-300 line-clamp-2">
					{certification.issuer} •{" "}
					<span className="text-gray-400">{certification.date}</span>
				</p>
			</div>

			<div className="pr-2 text-gray-600 transition-colors group-hover:text-purple-400">
				<ExternalLink size={16} />
			</div>

			<div className="absolute bottom-0 h-px transition-all duration-500 left-6 right-6 bg-linear-to-r from-transparent via-purple-500/0 to-transparent group-hover:via-purple-500/50" />
		</a>
	);
};
