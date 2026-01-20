import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { router } from "@/lib/router";

const Home = () => {
	return (
		<div className="min-h-screen text-gray-100 bg-gray-950">
			<Navbar />

			<main>
				{router.map((item) => {
					const SectionComponent = item.component;

					return <SectionComponent key={item.id} id={item.id} />;
				})}
			</main>

			<Footer />
		</div>
	);
};

export default Home;
