import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { About } from "@/components/sections/About/About";
import { Contact } from "@/components/sections/Contact/Contact";
import { Hero } from "@/components/sections/Hero/Hero";
import { Projects } from "@/components/sections/Projects/Projects";

const Home = () => {
	return (
		<div className="min-h-screen text-gray-100 bg-gray-950">
			<Navbar />
			<Hero />
			<About />
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
};

export default Home;
