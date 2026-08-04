'use server';
/**
 * @fileOverview An AI agent that suggests relevant hackathon tracks and project categories
 *               based on a team's hardware project summary.
 *
 * - aiHardwareTrackScout - A function that handles the track and category suggestion process.
 * - AiHardwareTrackScoutInput - The input type for the aiHardwareTrackScout function.
 * - AiHardwareTrackScoutOutput - The return type for the aiHardwareTrackScout function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiHardwareTrackScoutInputSchema = z.object({
  hardwareSummary: z
    .string()
    .describe("A detailed summary of the team's hardware project."),
});
export type AiHardwareTrackScoutInput = z.infer<
  typeof AiHardwareTrackScoutInputSchema
>;

const AiHardwareTrackScoutOutputSchema = z.object({
  suggestedTracks: z
    .array(z.string())
    .describe("A list of relevant hackathon tracks suggested for the project."),
  suggestedCategories: z
    .array(z.string())
    .describe(
      "A list of relevant project categories suggested for the project."
    ),
});
export type AiHardwareTrackScoutOutput = z.infer<
  typeof AiHardwareTrackScoutOutputSchema
>;

export async function aiHardwareTrackScout(
  input: AiHardwareTrackScoutInput
): Promise<AiHardwareTrackScoutOutput> {
  return aiHardwareTrackScoutFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiHardwareTrackScoutPrompt',
  input: {schema: AiHardwareTrackScoutInputSchema},
  output: {schema: AiHardwareTrackScoutOutputSchema},
  prompt: `You are an AI assistant for 'HTH INDIA – Hack The Hardware India', a national-level hardware hackathon.
Your task is to analyze a team's hardware project summary and intelligently suggest the most relevant hackathon tracks and project categories.

Consider common themes and tracks found in hardware hackathons, such as:
- Internet of Things (IoT)
- Robotics & Automation
- Wearable Technology
- AI/ML Hardware Acceleration
- Sustainable & Green Tech
- Embedded Systems
- Biomedical & Health Tech
- Smart Home & Smart City Solutions
- Accessibility & Assistive Devices
- Gaming & Entertainment Hardware
- Aerospace & Defense Hardware

For project categories, think broadly about the application area or core technology.

Hardware Project Summary:
{{{hardwareSummary}}}

Please provide your suggestions as a JSON array of strings for both 'suggestedTracks' and 'suggestedCategories'.`,
});

const aiHardwareTrackScoutFlow = ai.defineFlow(
  {
    name: 'aiHardwareTrackScoutFlow',
    inputSchema: AiHardwareTrackScoutInputSchema,
    outputSchema: AiHardwareTrackScoutOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    if (!output) {
      throw new Error('Failed to get output from AI model.');
    }
    return output;
  }
);
