"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { router } from "@/lib/router";
import { PurpleText } from "../ui/PurpleText";

export const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("home");

	useEffect(() => {
		const observerOptions = {
			root: null,
			rootMargin: "-20% 0px -70% 0px",
			threshold: 0,
		};

		const handleIntersect = (entries: IntersectionObserverEntry[]) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setActiveSection(entry.target.id);
				}
			});
		};

		const observer = new IntersectionObserver(handleIntersect, observerOptions);

		router.forEach((item) => {
			const element = document.getElementById(item.id);
			if (element) observer.observe(element);
		});

		return () => observer.disconnect();
	}, []);

	const NavLinks = ({ mobile = false }) => (
		<>
			{router.map((item) => {
				const isActive = activeSection === item.id;

				return (
					<a
						key={item.label}
						href={`#${item.id}`}
						onClick={() => setIsMenuOpen(false)}
						className={`transition-all duration-300 font-medium ${
							mobile
								? "block px-6 py-4 border-b border-gray-800/50"
								: "relative py-2"
						} ${
							isActive ? "text-purple-500" : "text-gray-400 hover:text-white"
						}`}
					>
						{item.label}

						{!mobile && isActive && (
							<span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 rounded-full" />
						)}
					</a>
				);
			})}
		</>
	);

	return (
		<nav className="fixed top-0 z-50 w-full border-b border-gray-800 bg-gray-950/80 backdrop-blur-lg">
			<div className="flex items-center justify-between max-w-6xl px-6 py-4 mx-auto">
				<div className="text-2xl font-bold">
					<PurpleText>BR</PurpleText>
					<span className="text-gray-100">.dev</span>
				</div>

				{/* Desktop Nav */}
				<div className="hidden gap-8 md:flex">
					<NavLinks />
				</div>

				{/* Mobile Menu Toggle */}
				<button
					className="p-2 text-gray-300 transition-colors md:hidden hover:text-white"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					aria-label="Toggle Menu"
					type="button"
				>
					{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
				</button>
			</div>

			{/* Mobile Menu Overlay */}
			<div
				className={`absolute top-full left-0 w-full bg-gray-950 border-b border-gray-800 md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}
			>
				<div className="flex flex-col py-2">
					<NavLinks mobile />
				</div>
			</div>
		</nav>
	);
};
