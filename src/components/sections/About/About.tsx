import { H3 } from "@/components/ui/H3";
import { SkillsCertifications } from "@/components/ui/SkillsCertifications";
import { experiences } from "@/data/experiences";
import { Background } from "./Background";
import { ExperienceTimelineItem } from "./ExperienceTimelineItem";

export const About = () => {
	return (
		<section id="about" className="px-6 py-20 bg-gray-900">
			<div className="max-w-6xl mx-auto">
				<h2 className="mb-12 text-4xl font-bold text-center">
					<span className="text-purple-500">About</span> Me
				</h2>

				<div className="grid gap-12 mb-16 md:grid-cols-2">
					<Background />
					<SkillsCertifications />
				</div>

				{/* Experience Timeline */}
				<div>
					<H3 className="mb-8 text-2xl font-semibold text-purple-400">
						Experience
					</H3>
					<div className="space-y-8">
						{experiences.map((exp) => (
							<ExperienceTimelineItem
								key={`${exp.company}-${exp.role}`} // Key is still needed here
								experience={exp}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
