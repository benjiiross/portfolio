import { me } from "@/data/me";

export const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="px-6 py-8 border-t border-gray-800">
			<div className="max-w-6xl mx-auto text-center">
				<p className="text-sm text-gray-500">
					© {currentYear} {me.name}. Built with Next.js & Tailwind CSS.
				</p>
				<p className="mt-2 text-xs text-gray-600">
					Deployed on Vercel • Source on GitHub
				</p>
			</div>
		</footer>
	);
};
