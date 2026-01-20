export const formatBoldText = (text: string) => {
	const parts = text.split(/(\*\*.*?\*\*)/g);
	return parts.map((part, i) => {
		const key = `text-part-${part}-${i}`;

		if (part.startsWith("**") && part.endsWith("**")) {
			return (
				<strong key={key} className="font-bold text-gray-100">
					{part.slice(2, -2)}
				</strong>
			);
		}

		return part;
	});
};
