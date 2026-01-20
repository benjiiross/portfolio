import { H2 } from "@/components/ui/H2";
import { PurpleText } from "@/components/ui/PurpleText";
import { Section, type SectionWrapperProps } from "@/components/ui/Section";
import { Background } from "./Background";
import { Skills } from "./Skills";

export const About = ({ id }: SectionWrapperProps) => {
	return (
		<Section id={id} className="bg-gray-900 px-60 py-28">
			<H2>
				<PurpleText>About</PurpleText> Me
			</H2>

			<div className="grid gap-12 mb-16 md:grid-cols-2">
				<Background />
				<Skills />
			</div>
		</Section>
	);
};
