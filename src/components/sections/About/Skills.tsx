import { H3 } from "@/components/ui/H3";
import { skills } from "@/data/skills";

export const Skills = () => {
	return (
		<div>
			<H3>Skills</H3>
			<div className="space-y-4">
				{skills.map((group) => (
					<div
						key={group.category}
						className="p-5 border border-gray-800 rounded-xl bg-gray-900/50"
					>
						<h4 className="mb-3 text-sm font-semibold tracking-wider text-purple-400 uppercase">
							{group.category}
						</h4>
						<div className="flex flex-wrap gap-2">
							{group.skills.map((skill) => (
								<span
									key={skill}
									className="px-3 py-1 text-sm text-gray-300 transition-colors border border-gray-700 rounded-full bg-gray-800/50 hover:border-purple-500/50"
								>
									{skill}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
