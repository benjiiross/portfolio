import { skills } from "@/data/skills";
import { H3 } from "./H3";
export const SkillsCertifications = () => {
	return (
		<div>
			<H3>Skills & Certifications</H3>
			<div className="space-y-4">
				{skills.map((skill) => (
					<div key={skill.name}>
						<div className="flex justify-between mb-2">
							<span className="text-gray-300">{skill.name}</span>
							<span className="text-purple-400">{skill.level}%</span>
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
				<span className="px-3 py-1 text-sm text-purple-300 border border-purple-700 rounded-full bg-purple-900/50">
					AWS Certified
				</span>
				<span className="px-3 py-1 text-sm text-purple-300 border border-purple-700 rounded-full bg-purple-900/50">
					Azure AZ-900
				</span>
				<span className="px-3 py-1 text-sm text-purple-300 border border-purple-700 rounded-full bg-purple-900/50">
					Azure AI-900
				</span>
			</div>
		</div>
	);
};
