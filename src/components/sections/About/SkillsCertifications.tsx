import { H3 } from "@/components/ui/H3";
import { PurpleText } from "@/components/ui/PurpleText";
import { skills } from "@/data/skills";
import { CertificationBadge } from "./CertificationBadge";

export const SkillsCertifications = () => {
	return (
		<div>
			<H3>Skills & Certifications</H3>
			<div className="space-y-4">
				{skills.map((skill) => (
					<div key={skill.name}>
						<div className="flex justify-between mb-2">
							<span className="text-gray-300">{skill.name}</span>
							<PurpleText>{skill.level}%</PurpleText>
						</div>
						<div className="w-full h-2 bg-gray-800 rounded-full">
							<div
								className="h-2 transition-all duration-1000 rounded-full bg-linear-to-r from-purple-600 to-pink-500"
								style={{ width: `${skill.level}%` }}
							/>
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
