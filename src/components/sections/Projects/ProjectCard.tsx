import { Github } from "lucide-react";
import { H3 } from "@/components/ui/H3";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
	project: Project;
}

const formatText = (text: string) => {
	const parts = text.split(/(\*\*.*?\*\*)/g);
	return parts.map((part, i) =>
		part.startsWith("**") && part.endsWith("**") ? (
			<strong key={i} className="font-bold text-gray-300">
				{part.slice(2, -2)}
			</strong>
		) : (
			part
		),
	);
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
	const Icon = project.icon;

	return (
		<div className="flex flex-col h-full p-6 transition-all duration-300 bg-gray-900 border border-gray-800 rounded-xl hover:border-purple-600 hover:transform hover:scale-105 group">
			<div className="flex items-start justify-between w-full mb-4">
				<Icon
					className="text-purple-500 group-hover:text-purple-400"
					size={32}
				/>
				<span className="text-sm text-gray-500">{project.date}</span>
			</div>

			<div className="flex flex-col items-center grow text-center">
				<H3>{project.title}</H3>
				<p className="mb-4 text-sm leading-relaxed text-gray-400">
					{formatText(project.description)}
				</p>

				<div className="mb-4 space-y-1">
					{project.highlights.map((highlight) => (
						<div key={highlight} className="text-xs text-gray-500">
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

			{project.github && (
				<div className="flex justify-center w-full pt-4 mt-auto border-t border-gray-800/50">
					<a
						href={project.github}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white transition-colors bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-700 hover:border-purple-600"
					>
						<Github className="w-5 h-5" />
						View on GitHub
					</a>
				</div>
			)}
		</div>
	);
};
