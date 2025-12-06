"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NAV_ITEMS } from "@/lib/constants";
import { PurpleText } from "../ui/PurpleText";

export const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<nav className="fixed top-0 z-50 w-full border-b border-gray-800 bg-gray-950/80 backdrop-blur-lg">
			<div className="flex items-center justify-between max-w-6xl px-6 py-4 mx-auto">
				<div className="text-2xl font-bold">
					<PurpleText>BR</PurpleText>
					<span className="text-gray-100">.dev</span>
				</div>

				{/* Desktop Nav */}
				<div className="hidden gap-8 md:flex">
					{NAV_ITEMS.map((item: { label: string; href: string }) => (
						<a
							key={item.label}
							href={item.href}
							className="text-gray-300 transition-colors duration-300 hover:text-purple-500"
						>
							{item.label}
						</a>
					))}
				</div>

				{/* Mobile Menu Button */}
				<button
					className="text-gray-300 md:hidden"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					type="button"
				>
					{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
				</button>
			</div>

			{/* Mobile Menu */}
			{isMenuOpen && (
				<div className="bg-gray-900 border-t border-gray-800 md:hidden">
					{NAV_ITEMS.map((item) => (
						<a
							key={item.label}
							href={item.href}
							className="block px-6 py-3 text-gray-300 transition-colors hover:text-purple-500 hover:bg-gray-800"
							onClick={() => setIsMenuOpen(false)}
						>
							{item.label}
						</a>
					))}
				</div>
			)}
		</nav>
	);
};
