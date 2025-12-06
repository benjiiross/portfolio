import { H2 } from "@/components/ui/H2";
import { H3 } from "@/components/ui/H3";
import { PurpleText } from "@/components/ui/PurpleText";
import { experiences } from "@/data/experiences";
import { Background } from "./Background";
import { ExperienceTimelineItem } from "./ExperienceTimelineItem";
import { SkillsCertifications } from "./SkillsCertifications";

export const About = () => {
	return (
		<section id="about" className="px-6 py-20 bg-gray-900">
			<div className="max-w-6xl mx-auto">
				<H2>
					<PurpleText>About</PurpleText> Me
				</H2>

				<div className="grid gap-12 mb-16 md:grid-cols-2">
					<Background />
					<SkillsCertifications />
				</div>

				<div>
					<H3 className="mb-8 text-2xl font-semibold text-purple-400">
						Experience
					</H3>
					<div className="space-y-8">
						{experiences.map((exp) => (
							<ExperienceTimelineItem
								key={`${exp.company}-${exp.role}`}
								experience={exp}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
