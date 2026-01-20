export interface Experience {
	role: string;
	company: string;
	period: string;
	location: string;
	highlights: string[];
}

export const experiences: Experience[] = [
	{
		role: "Data Engineer & Project Manager",
		company: "RENAULT SAS",
		period: "Mar 2025 - Sep 2025",
		location: "Guyancourt, France",
		highlights: [
			"Led digital transformation for Global Academy across 9 countries and 22 factories.",
			"Built custom SQL-backed PowerApps interfaces for 600+ trainers to streamline operations.",
			"Audited and cleaned complex datasets for 100+ training programs to ensure KPI reliability.",
		],
	},
	{
		role: "Data Research Analyst",
		company: "NOKIA BELL LABS",
		period: "Nov 2023 - Apr 2024",
		location: "Massy, France",
		highlights: [
			"ML applied to Intrusion Detection Systems",
			"Classification & clustering of malicious packets",
			"Cross-service collaboration on research goals",
		],
	},
];
