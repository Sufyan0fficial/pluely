export const AI_MODELS = {
  openai: [
    "gpt-4o",
    "gpt-4o-mini", 
    "gpt-4-turbo",
    "gpt-4",
    "gpt-3.5-turbo",
    "o1-preview",
    "o1-mini"
  ],
  claude: [
    "claude-3-5-sonnet-20241022",
    "claude-3-5-haiku-20241022", 
    "claude-3-opus-20240229",
    "claude-3-sonnet-20240229",
    "claude-3-haiku-20240307"
  ],
  grok: [
    "grok-beta",
    "grok-vision-beta"
  ],
  gemini: [
    "gemini-2.5-flash",
    "gemini-2.5-flash-lite", 
    "gemini-2.5-pro",
    "gemini-2.0-flash",
    "gemini-2.0-flash-lite",
    "gemini-flash-latest",
    "gemini-flash-lite-latest",
    "gemini-pro-latest"
  ],
  mistral: [
    "mistral-large-latest",
    "mistral-medium-latest",
    "mistral-small-latest",
    "open-mistral-7b",
    "open-mixtral-8x7b",
    "open-mixtral-8x22b"
  ],
  cohere: [
    "command-r-plus",
    "command-r",
    "command",
    "command-nightly", 
    "command-light",
    "command-light-nightly"
  ],
  groq: [
    "llama-3.1-405b-reasoning",
    "llama-3.1-70b-versatile",
    "llama-3.1-8b-instant",
    "llama3-groq-70b-8192-tool-use-preview",
    "llama3-groq-8b-8192-tool-use-preview",
    "mixtral-8x7b-32768",
    "gemma2-9b-it"
  ],
  perplexity: [
    "llama-3.1-sonar-large-128k-online",
    "llama-3.1-sonar-small-128k-online",
    "llama-3.1-sonar-large-128k-chat",
    "llama-3.1-sonar-small-128k-chat", 
    "llama-3.1-8b-instruct",
    "llama-3.1-70b-instruct"
  ],
  openrouter: [
    "openai/gpt-4o",
    "anthropic/claude-3.5-sonnet",
    "google/gemini-pro-1.5",
    "meta-llama/llama-3.1-405b-instruct",
    "meta-llama/llama-3.1-70b-instruct", 
    "mistralai/mistral-large"
  ],
  ollama: [
    "llama3.2",
    "llama3.1", 
    "llama3",
    "mistral",
    "codellama",
    "phi3",
    "gemma2",
    "qwen2.5"
  ]
} as const;

export function getModelsForProvider(providerId: string): string[] {
  console.log('Getting models for provider:', providerId);
  console.log('Available providers:', Object.keys(AI_MODELS));
  const models = AI_MODELS[providerId as keyof typeof AI_MODELS] || [];
  console.log('Found models:', models);
  return models;
}
