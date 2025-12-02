import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { H2 } from "@/components/ui/H2";
import { socialLinks } from "@/data/social";
import { PERSONAL_INFO } from "@/lib/constants";
import { HeroTitle } from "./HeroTitle";
import { SocialLinkItem } from "./SocialLinkItem";

export const Hero = () => {
	return (
		<section
			id="home"
			className="flex items-center justify-center min-h-screen px-6 pt-20"
		>
			<div className="max-w-4xl mx-auto text-center">
				<div className="mb-6 text-lg text-purple-500 animate-pulse">
					👋 Hi, I'm
				</div>

				<HeroTitle>{PERSONAL_INFO.name}</HeroTitle>

				<H2 className="text-2xl font-normal md:text-3xl">
					{PERSONAL_INFO.title}
				</H2>

				<p className="max-w-2xl mx-auto mb-12 text-lg text-gray-400">
					{PERSONAL_INFO.tagline}
				</p>

				<div className="flex flex-wrap justify-center gap-4">
					<Button href="#projects">View Projects</Button>
					<Button href="#contact" variant="outline">
						Get In Touch
					</Button>
				</div>

				<div className="flex justify-center gap-6 mt-12">
					{socialLinks.map((link) => (
						<SocialLinkItem key={link.name} link={link} />
					))}
				</div>

				<div className="mt-16 animate-bounce">
					<ChevronDown size={32} className="mx-auto text-purple-500" />
				</div>
			</div>
		</section>
	);
};
