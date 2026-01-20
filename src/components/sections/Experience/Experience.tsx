import { H3 } from "@/components/ui/H3";
import { Section, type SectionWrapperProps } from "@/components/ui/Section";
import { experiences } from "@/data/experiences";
import { ExperienceTimelineItem } from "./ExperienceTimelineItem";

export const Experience = ({ id }: SectionWrapperProps) => {
	return (
		<Section id={id} className="px-6 py-20 bg-gray-900 md:px-48">
			<H3 className="mb-8 text-2xl font-semibold text-purple-400">
				Experience
			</H3>
			<div className="space-y-8">
				{experiences.map((exp) => (
					<ExperienceTimelineItem key={exp.company} experience={exp} />
				))}
			</div>
		</Section>
	);
};
