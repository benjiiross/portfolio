export interface Language {
	language: string;
	flag: string;
	level: string;
}

export const languages: Language[] = [
	{
		language: "French",
		flag: "🇫🇷",
		level: "Native",
	},
	{
		language: "English",
		flag: "🇬🇧",
		level: "Full Professional (C1 - TOEIC 970)",
	},
	{
		language: "Chinese",
		flag: "🇨🇳",
		level: "A1 (HSK 1)",
	},
];
