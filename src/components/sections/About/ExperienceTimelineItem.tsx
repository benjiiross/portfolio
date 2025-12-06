import { PurpleText } from "@/components/ui/PurpleText";
import type { Experience } from "@/lib/types";

interface ExperienceTimelineItemProps {
	experience: Experience;
}

export const ExperienceTimelineItem = ({
	experience: exp,
}: ExperienceTimelineItemProps) => {
	const highlightList = exp.highlights.map((highlight) => (
		<li key={highlight} className="flex items-start text-sm text-gray-400">
			<PurpleText className="mr-2">▹</PurpleText>
			{highlight}
		</li>
	));

	return (
		<div
			key={`${exp.company}-${exp.role}`}
			className="relative pl-6 border-l-2 border-purple-600"
		>
			<div className="absolute top-0 w-4 h-4 bg-purple-600 rounded-full -left-2"></div>

			<div className="p-6 transition-colors bg-gray-800 border border-gray-700 rounded-lg hover:border-purple-600">
				<h4 className="text-xl font-semibold text-purple-400">{exp.role}</h4>
				<p className="font-medium text-gray-300">{exp.company}</p>
				<p className="mb-4 text-sm text-gray-500">
					{exp.period} • {exp.location}
				</p>
				<ul className="space-y-2">{highlightList}</ul>
			</div>
		</div>
	);
};
