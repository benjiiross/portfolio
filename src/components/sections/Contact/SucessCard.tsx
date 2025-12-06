import { CheckCircle } from "lucide-react";

export const SuccessCard = () => {
	return (
		<div className="p-8 mb-8 text-center bg-green-900/30 border border-green-700 rounded-lg">
			<CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-400" />
			<h3 className="mb-2 text-2xl font-bold text-white">Message Sent! 🚀</h3>
			<p className="text-green-300">
				Thanks for reaching out! I'll get back to you as soon as possible.
			</p>
		</div>
	);
};
