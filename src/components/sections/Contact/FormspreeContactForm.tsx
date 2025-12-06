"use client";

import { useForm, ValidationError } from "@formspree/react";
import { Send } from "lucide-react";
import { env } from "@/lib/env";
import { SuccessCard } from "./SucessCard";

export const FormspreeContactForm = () => {
	const [state, handleSubmit] = useForm(env.FORMSPREE_ID);

	if (state.succeeded) {
		return <SuccessCard />;
	}

	return (
		<form onSubmit={handleSubmit} className="mb-8 space-y-4">
			<div>
				<label
					htmlFor="name"
					className="block mb-2 text-sm font-medium text-gray-300"
				>
					Name
				</label>
				<input
					type="text"
					id="name"
					name="name"
					required
					className="w-full px-4 py-3 text-white transition-colors bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
					placeholder="John Doe"
				/>
				<ValidationError
					prefix="Name"
					field="name"
					errors={state.errors}
					className="mt-1 text-sm text-red-400"
				/>
			</div>

			<div>
				<label
					htmlFor="email"
					className="block mb-2 text-sm font-medium text-gray-300"
				>
					Email Address
				</label>
				<input
					id="email"
					type="email"
					name="email"
					required
					className="w-full px-4 py-3 text-white transition-colors bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
					placeholder="john@example.com"
				/>
				<ValidationError
					prefix="Email"
					field="email"
					errors={state.errors}
					className="mt-1 text-sm text-red-400"
				/>
			</div>

			<div>
				<label
					htmlFor="message"
					className="block mb-2 text-sm font-medium text-gray-300"
				>
					Message
				</label>
				<textarea
					id="message"
					name="message"
					required
					rows={5}
					className="w-full px-4 py-3 text-white transition-colors bg-gray-700 border border-gray-600 rounded-lg resize-none focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
					placeholder="Tell me about your project or opportunity..."
				/>
				<ValidationError
					prefix="Message"
					field="message"
					errors={state.errors}
					className="mt-1 text-sm text-red-400"
				/>
			</div>

			<button
				type="submit"
				disabled={state.submitting}
				className="flex items-center justify-center w-full gap-2 px-6 py-3 font-medium text-white transition-all bg-purple-600 rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
			>
				{state.submitting ? (
					<>
						<div className="w-5 h-5 border-2 border-white rounded-full border-t-transparent animate-spin" />
						Sending...
					</>
				) : (
					<>
						<Send className="w-5 h-5" />
						Send Message
					</>
				)}
			</button>
		</form>
	);
};
