// Certifications and courses, newest first. Dates are "YYYY-MM".
export interface Credential {
  name: string;
  provider: string;
  date: string;
  url?: string;
}

export const learningIntro =
  'Recent training in Claude, OpenAI, prompt engineering and RAG / LLM application development — applied daily in AI-assisted workflows with Cursor and Claude.';

export const credentials: Credential[] = [
  {
    name: 'Building with the Claude API',
    provider: 'Anthropic',
    date: '2026-08',
    url: 'https://verify.skilljar.com/c/zctswhv3tdf2',
  },
  {
    name: 'ChatGPT Prompt Engineering for Developers',
    provider: 'OpenAI · DeepLearning.AI',
    date: '2026-08',
    url: 'https://www.deeplearning.ai/accomplishments/d9e4f6a9-d463-4d4b-9864-43fb0499fff1',
  },
  {
    name: 'Building and Evaluating Advanced RAG',
    provider: 'TruEra, LlamaIndex · DeepLearning.AI',
    date: '2026-08',
    url: 'https://www.deeplearning.ai/accomplishments/6f087931-56b5-4483-9900-5b383c2d141f',
  },
  {
    name: 'Preprocessing Unstructured Data for LLM Applications',
    provider: 'Unstructured · DeepLearning.AI',
    date: '2026-08',
    url: 'https://www.deeplearning.ai/accomplishments/24abe2ee-9b3e-4cc4-900e-f749c4a5bd92',
  },
  {
    name: 'Claude Code in Action',
    provider: 'Anthropic',
    date: '2026-04',
    url: 'https://verify.skilljar.com/c/f9qa5wrbup88',
  },
  {
    name: 'Machine Learning Crash Course',
    provider: 'Google',
    date: '2026-03',
  },
];
