import { ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
	return (
		<section id="projects" className="px-6 py-20">
			<div className="max-w-6xl mx-auto">
				<h2 className="mb-12 text-4xl font-bold text-center">
					Featured <span className="text-purple-500">Projects</span>
				</h2>

				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{projects.map((project) => (
						<ProjectCard key={project.title} project={project} />
					))}
				</div>

				<div className="mt-12 text-center">
					<a
						href="https://github.com/benjiiross"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 text-purple-400 transition-colors hover:text-purple-300"
					>
						View More on GitHub <ExternalLink size={18} />
					</a>
				</div>
			</div>
		</section>
	);
};
