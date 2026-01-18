import { H3 } from "@/components/ui/H3";
import { skillGroups } from "@/data/skills";
import { CertificationBadge } from "./CertificationBadge";

export const SkillsCertifications = () => {
	return (
		<div>
			<H3>Skills & Certifications</H3>
			<div className="space-y-4">
				{skillGroups.map((group) => (
					<div
						key={group.category}
						className="p-5 border rounded-xl border-gray-800 bg-gray-900/50"
					>
						<h4 className="mb-3 text-sm font-semibold tracking-wider text-purple-400 uppercase">
							{group.category}
						</h4>
						<div className="flex flex-wrap gap-2">
							{group.skills.map((skill) => (
								<span
									key={skill}
									className="px-3 py-1 text-sm text-gray-300 border rounded-full border-gray-700 bg-gray-800/50 hover:border-purple-500/50 transition-colors"
								>
									{skill}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
			<div className="flex flex-wrap gap-2 mt-6">
				<CertificationBadge>AWS Certified</CertificationBadge>
				<CertificationBadge>Azure AZ-900</CertificationBadge>
				<CertificationBadge>Azure AI-900</CertificationBadge>
			</div>
		</div>
	);
};
