import { formatBoldText } from "@/components/sections/Projects/FormatBoldText";
import { H3 } from "@/components/ui/H3";
import type { Project } from "@/data/projects";
import { ViewButton } from "./ViewButton";

interface ProjectCardProps {
	project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
	const Icon = project.icon;

	return (
		<div className="flex flex-col h-full p-6 transition-all duration-300 bg-gray-900 border border-gray-800 rounded-xl hover:border-purple-600 hover:transform hover:scale-105 group">
			<div className="flex items-start justify-between w-full mb-4">
				<Icon
					className="text-purple-500 group-hover:text-purple-400"
					size={32}
				/>
				<span className="text-sm text-gray-400">{project.date}</span>
			</div>

			<div className="flex flex-col items-center text-center grow">
				<H3>{project.title}</H3>
				<p className="mb-4 text-sm leading-relaxed text-gray-400">
					{formatBoldText(project.description)}
				</p>

				<div className="mb-4 space-y-1">
					{project.highlights.map((highlight) => (
						<div key={highlight} className="text-xs font-bold text-gray-100">
							{highlight}
						</div>
					))}
				</div>

				<div className="flex flex-wrap justify-center gap-2 mb-6">
					{project.tech.map((tech) => (
						<span
							key={tech}
							className="px-2 py-1 text-xs text-purple-300 border border-purple-800 rounded bg-purple-900/30"
						>
							{tech}
						</span>
					))}
				</div>
			</div>

			<div className="flex flex-wrap items-center justify-center w-full gap-3 pt-4 mt-auto border-t border-gray-800/50">
				{project.github && <ViewButton href={project.github} />}

				{project.linkedin && (
					<ViewButton href={project.linkedin} variant="linkedin" />
				)}
			</div>
		</div>
	);
};
