import { H3 } from "@/components/ui/H3";
import { PurpleText } from "@/components/ui/PurpleText";

export const Background = () => {
	return (
		<div>
			<H3>Background</H3>
			<p className="mb-4 leading-relaxed text-gray-300">
				Final-year Master&apos;s student in Data & AI at EFREI Paris, with
				international experience in Canada. Passionate about solving complex
				problems through data and cloud technologies.
			</p>
			<p className="mb-4 leading-relaxed text-gray-300">
				I&apos;ve worked at{" "}
				<PurpleText className="font-semibold">Renault</PurpleText> as a Data
				Engineer and{" "}
				<PurpleText className="font-semibold">Nokia Bell Labs</PurpleText>{" "}
				researching ML applications for cybersecurity.
			</p>
			<p className="leading-relaxed text-gray-300">
				Currently seeking opportunities to contribute to global innovation in a
				cross-cultural environment.
			</p>
		</div>
	);
};
