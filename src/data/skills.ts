export interface Skill {
	category: string;
	keywords: string[];
}

export const skills: Skill[] = [
	{
		category: "Data & AI",
		keywords: [
			"Python",
			"Machine Learning",
			"Scikit-Learn",
			"Pandas",
			"Computer Vision",
			"SQL",
		],
	},
	{
		category: "Software & Mobile",
		keywords: [
			"Kotlin Multiplatform",
			"Jetpack Compose",
			"Android",
			"React",
			"TypeScript",
		],
	},
	{
		category: "Cloud & Devops",
		keywords: ["AWS", "Azure", "Docker", "GitHub Actions", "CI/CD"],
	},
];
