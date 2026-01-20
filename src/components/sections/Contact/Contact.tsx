import { Linkedin, Mail } from "lucide-react";
import { H2 } from "@/components/ui/H2";
import { PurpleText } from "@/components/ui/PurpleText";
import { Section, type SectionWrapperProps } from "@/components/ui/Section";
import { languages } from "@/data/languages";
import { me } from "@/data/me";
import { ContactCard } from "./ContactCard";
import { FormspreeContactForm } from "./FormspreeContactForm";

export const Contact = ({ id }: SectionWrapperProps) => {
	return (
		<Section id={id} className="px-6 py-20 bg-gray-900">
			<div className="max-w-3xl mx-auto">
				<H2>
					Get In <PurpleText>Touch</PurpleText>
				</H2>

				<div className="p-8 bg-gray-800 border border-gray-700 rounded-xl">
					<p className="mb-8 text-center text-gray-300">
						Currently seeking full-time opportunities internationally.
						Let&apos;s connect!
					</p>

					<FormspreeContactForm />

					<div className="grid gap-6 mb-8 md:grid-cols-2">
						<ContactCard
							icon={Mail}
							title="Email"
							value={me.email}
							href={`mailto:${me.email}`}
						/>

						<ContactCard
							icon={Linkedin}
							title="LinkedIn"
							value={me.linkedinUsername}
							href={`https://www.linkedin.com/in/${me.linkedinUsername}`}
							target="_blank"
							rel="noopener noreferrer"
						/>
					</div>

					<div className="pt-8 mt-8 text-center border-t border-gray-700">
						<p className="mb-4 text-sm text-gray-300">
							🌍 Based in {me.location} • ✈️ Seeking opportunities
							internationally
						</p>
						<p className="text-xs text-gray-400">
							{languages.map((lang, idx) => (
								<span key={lang.language}>
									{lang.flag} {lang.language} ({lang.level})
									{idx < languages.length - 1 ? " • " : ""}
								</span>
							))}
						</p>
					</div>
				</div>
			</div>
		</Section>
	);
};
