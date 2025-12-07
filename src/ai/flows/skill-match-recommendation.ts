'use server';

/**
 * @fileOverview A skill match recommendation AI agent.
 *
 * - skillMatchRecommendation - A function that handles the skill match recommendation process.
 * - SkillMatchRecommendationInput - The input type for the skillMatchRecommendation function.
 * - SkillMatchRecommendationOutput - The return type for the skillMatchRecommendation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SkillMatchRecommendationInputSchema = z.object({
  userProfile: z
    .string()
    .describe('The profile of the user, including their skills and interests.'),
  availableSkills: z
    .string()
    .describe('A list of available skills in the community.'),
});
export type SkillMatchRecommendationInput = z.infer<typeof SkillMatchRecommendationInputSchema>;

const SkillMatchRecommendationOutputSchema = z.object({
  suggestedMatches: z
    .string()
    .describe('A list of suggested skill matches based on the user profile and available skills.'),
});
export type SkillMatchRecommendationOutput = z.infer<typeof SkillMatchRecommendationOutputSchema>;

export async function skillMatchRecommendation(input: SkillMatchRecommendationInput): Promise<SkillMatchRecommendationOutput> {
  return skillMatchRecommendationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'skillMatchRecommendationPrompt',
  input: {schema: SkillMatchRecommendationInputSchema},
  output: {schema: SkillMatchRecommendationOutputSchema},
  prompt: `You are a skill match recommendation expert.

  Based on the user's profile and available skills, you will suggest potential skill matches.

  User Profile: {{{userProfile}}}
  Available Skills: {{{availableSkills}}}

  Suggested Matches:`,
});

const skillMatchRecommendationFlow = ai.defineFlow(
  {
    name: 'skillMatchRecommendationFlow',
    inputSchema: SkillMatchRecommendationInputSchema,
    outputSchema: SkillMatchRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
