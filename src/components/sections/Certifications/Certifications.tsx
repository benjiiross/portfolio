import { H3 } from "@/components/ui/H3";
import { Section, type SectionWrapperProps } from "@/components/ui/Section";
import { certifications } from "@/data/certifications";
import { CertificationCard } from "./CertificationCard";

export const Certifications = ({ id }: SectionWrapperProps) => {
	return (
		<Section id={id} className="px-6 py-20 bg-gray-900/50">
			<div className="max-w-6xl mx-auto">
				<div className="flex items-center gap-4 mb-10">
					<H3 className="text-2xl font-bold text-white whitespace-nowrap">
						Certifications
					</H3>
					<div className="w-full h-px bg-gray-800" />
				</div>

				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					{certifications.map((cert) => (
						<CertificationCard key={cert.name} certification={cert} />
					))}
				</div>
			</div>
		</Section>
	);
};
