import { ChevronDown, FileDown } from "lucide-react";
import { A } from "@/components/ui/A";
import { H2 } from "@/components/ui/H2";
import { Section, type SectionWrapperProps } from "@/components/ui/Section";
import { me } from "@/data/me";
import { socials } from "@/data/socials";
import { HeroTitle } from "./HeroTitle";
import { SocialLinkItem } from "./SocialLinkItem";

export const Hero = ({ id }: SectionWrapperProps) => {
	return (
		<Section
			id={id}
			className="flex items-center justify-center min-h-screen px-6 pt-20"
		>
			<div className="max-w-4xl mx-auto text-center">
				<div className="mb-6 text-lg text-purple-500 animate-pulse">
					👋 Hi, I'm
				</div>

				<HeroTitle>{me.name}</HeroTitle>

				<H2 className="text-2xl font-normal md:text-3xl">{me.title}</H2>

				<p className="max-w-2xl mx-auto mb-12 text-lg text-gray-400">
					{me.tagline}
				</p>

				<div className="flex flex-wrap justify-center gap-4">
					<A href="#projects">View Projects</A>

					<A
						href="/resume-benjamin-rossignol.pdf"
						className="flex items-center gap-2 align-middle"
					>
						<FileDown size={18} />
						Download Resume
					</A>

					<A href="#contact" variant="outline">
						Get In Touch
					</A>
				</div>

				<div className="flex justify-center gap-6 mt-12">
					{socials.map((link) => (
						<SocialLinkItem key={link.name} link={link} />
					))}
				</div>

				<A href="#about" className="mt-16 animate-bounce">
					<ChevronDown size={32} className="mx-auto text-purple-500" />
				</A>
			</div>
		</Section>
	);
};
