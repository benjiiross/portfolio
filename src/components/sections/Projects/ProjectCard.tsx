import { Github } from "lucide-react";
import { H3 } from "@/components/ui/H3";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
	project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
	const Icon = project.icon;

	return (
		<div className="p-6 transition-all duration-300 bg-gray-900 border border-gray-800 rounded-xl hover:border-purple-600 hover:transform hover:scale-105 group">
			<div className="flex items-start justify-between mb-4">
				<Icon
					className="text-purple-500 group-hover:text-purple-400"
					size={32}
				/>
				<span className="text-sm text-gray-500">{project.date}</span>
			</div>

			<H3>{project.title}</H3>
			<p className="mb-4 text-sm leading-relaxed text-gray-400">
				{project.description}
			</p>

			<div className="mb-4 space-y-1">
				{project.highlights.map((highlight) => (
					<div key={highlight} className="text-xs text-gray-500">
						{highlight}
					</div>
				))}
			</div>

			<div className="flex flex-wrap gap-2">
				{project.tech.map((tech) => (
					<span
						key={tech}
						className="px-2 py-1 text-xs text-purple-300 border border-purple-800 rounded bg-purple-900/30"
					>
						{tech}
					</span>
				))}
			</div>
			{project.github && (
				<a
					href={project.github}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center gap-2 px-4 py-2 mt-4 text-sm font-medium text-white transition-colors bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-700 hover:border-purple-600"
				>
					<Github className="w-5 h-5" />
					View on GitHub
				</a>
			)}
		</div>
	);
};
