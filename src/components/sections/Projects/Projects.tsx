import { ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { H2 } from "@/components/ui/H2";
import { PurpleText } from "@/components/ui/PurpleText";

export const Projects = () => {
	return (
		<section id="projects" className="px-6 py-20">
			<div className="max-w-6xl mx-auto">
				<H2>
					Featured <PurpleText>Projects</PurpleText>
				</H2>

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
