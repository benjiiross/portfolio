import { Linkedin, Mail } from "lucide-react";
import { LANGUAGES, PERSONAL_INFO } from "@/lib/constants";
import { ContactCard } from "./ContactCard";

export const Contact = () => {
	return (
		<section id="contact" className="px-6 py-20 bg-gray-900">
			<div className="max-w-3xl mx-auto">
				<h2 className="mb-12 text-4xl font-bold text-center">
					Get In <span className="text-purple-500">Touch</span>
				</h2>

				<div className="p-8 bg-gray-800 border border-gray-700 rounded-xl">
					<p className="mb-8 text-center text-gray-300">
						Currently seeking full-time opportunities internationally.
						Let&apos;s connect!
					</p>

					<div className="grid gap-6 mb-8 md:grid-cols-2">
						<ContactCard
							icon={Mail}
							title="Email"
							value={PERSONAL_INFO.email}
							href={`mailto:${PERSONAL_INFO.email}`}
						/>

						<ContactCard
							icon={Linkedin}
							title="LinkedIn"
							value={PERSONAL_INFO.linkedinUsername}
							href={`https://www.linkedin.com/in/${PERSONAL_INFO.linkedinUsername}`}
							target="_blank"
							rel="noopener noreferrer"
						/>
					</div>

					<div className="text-center">
						<a
							href={`tel:${PERSONAL_INFO.phone}`}
							className="inline-block text-purple-400 transition-colors hover:text-purple-300"
						>
							📞 {PERSONAL_INFO.phone}
						</a>
					</div>

					<div className="pt-8 mt-8 text-center border-t border-gray-700">
						<p className="mb-4 text-sm text-gray-400">
							🌍 Based in {PERSONAL_INFO.location} • ✈️ Seeking opportunities
							internationally
						</p>
						<p className="text-xs text-gray-500">
							{LANGUAGES.map((lang, idx) => (
								<span key={lang.language}>
									{lang.flag} {lang.language} ({lang.level})
									{idx < LANGUAGES.length - 1 ? " • " : ""}
								</span>
							))}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
