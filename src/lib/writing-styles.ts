// src/lib/writing-styles.ts

export interface WritingStyle {
  id: string;
  name: string;
  description: string;
  characteristics: string[];
  prompt: string;
}

export const writingStyles: WritingStyle[] = [
  {
    id: "tim-ferriss",
    name: "Super Writer GPT (Tim Ferriss Style)",
    description: "Conversational, practical, and focused on deconstructing complex topics.",
    characteristics: [
      "Conversational and informal tone",
      "Tactical and practical advice",
      "Personal stories and experiments",
      "Efficient and direct language"
    ],
    prompt: "Write in Tim Ferriss's style: conversational, focused on practical tactics, using personal anecdotes, and breaking down complex topics into actionable steps. Emphasize efficiency and direct language."
  },
  {
    id: "tim-ferriss-james-clear",
    name: "Super Writer GPT (Tim Ferriss Style) + James Clear (20%)",
    description: "Practical and conversational with structured habit-formation advice.",
    characteristics: [
      "Conversational tone with structured format",
      "Emphasis on habits and behavior change",
      "Evidence-based examples",
      "Clear, actionable takeaways"
    ],
    prompt: "Write in a style that's 80% Tim Ferriss (conversational, practical, personal) and 20% James Clear (structured, habit-focused, evidence-based). Combine Ferriss's tactical approach with Clear's emphasis on small, consistent improvements and structured formatting."
  },
  {
    id: "shane-parrish",
    name: "Insight Writer GPT (Shane Parrish Style)",
    description: "Analytical, thoughtful, and focused on mental models and decision-making.",
    characteristics: [
      "Analytical and reflective tone",
      "Focus on mental models",
      "Synthesis of complex ideas",
      "Clear and logical structure"
    ],
    prompt: "Write in Shane Parrish's style: analytical and thoughtful, focused on mental models and decision-making frameworks. Synthesize complex ideas from various disciplines, emphasize clarity and logic, and present concepts in a way that makes them immediately applicable."
  },
  {
    id: "mark-manson",
    name: "Brutally Honest GPT (Mark Manson Style)",
    description: "Blunt, irreverent, and direct with philosophical insights.",
    characteristics: [
      "Blunt and irreverent tone",
      "Philosophical insights with personal stories",
      "Challenges conventional thinking",
      "Uses humor and occasional profanity"
    ],
    prompt: "Write in Mark Manson's style: blunt, irreverent, and direct. Challenge conventional thinking with philosophical insights while maintaining a conversational tone. Use humor and occasional strong language to emphasize points about personal responsibility and growth."
  },
  {
    id: "david-perell",
    name: "Idea Curator GPT (David Perell Style)",
    description: "Thoughtful, reflective, and focused on the intersection of ideas.",
    characteristics: [
      "Reflective and meta-cognitive",
      "Focus on intersection of ideas",
      "Clear structure and frameworks",
      "Emphasis on digital creation"
    ],
    prompt: "Write in David Perell's style: thoughtful and reflective, often meta-cognitive about the process of writing and thinking. Focus on the intersection of ideas, technology, and creativity. Use clear structures and frameworks to help readers understand complex concepts."
  }
];