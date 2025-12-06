import { z } from "zod";

const envSchema = z.object({
	FORMSPREE_ID: z.string().min(1),
});

const envVars = {
	FORMSPREE_ID: process.env.NEXT_PUBLIC_FORMSPREE_ID,
};

export const env = envSchema.parse(envVars);
