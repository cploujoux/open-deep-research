export const CONFIG = {
  // Rate limits (requests per minute)
  rateLimits: {
    enabled: true, // Flag to enable/disable rate limiting
    search: 2,
    contentFetch: 20,
    reportGeneration: 2,
  },

  // Search settings
  search: {
    resultsPerPage: 10,
    maxSelectableResults: 3,
    provider: "google" as "google" | "bing", // Default search provider
    safeSearch: {
      google: "active" as "active" | "off",
      bing: "moderate" as "moderate" | "strict" | "off",
    },
    market: "en-US",
  },

  // AI Platform settings
  platforms: {
    google: {
      enabled: true,
      models: {
        "gemini-flash": {
          enabled: false,
          label: "Gemini Flash",
        },
        "gemini-flash-thinking": {
          enabled: false,
          label: "Gemini Flash Thinking",
        },
        "gemini-exp": {
          enabled: false,
          label: "Gemini Exp",
        },
      },
    },
    ollama: {
      enabled: true,
      models: {
        "deepseek-r1:1.5b": {
          enabled: false,
          label: "DeepSeek R1 1.5B",
        },
      },
    },
    openai: {
      enabled: true,
      models: {
        "gpt-4o": {
          enabled: true,
          label: "GPT-4o",
        },
        "o1-mini": {
          enabled: true,
          label: "o1-mini",
        },
        o1: {
          enabled: false,
          label: "o1",
        },
      },
    },
    anthropic: {
      enabled: true,
      models: {
        "sonnet-3.5": {
          enabled: false,
          label: "Claude 3 Sonnet",
        },
        "haiku-3.5": {
          enabled: false,
          label: "Claude 3 Haiku",
        },
      },
    },
    deepseek: {
      enabled: true,
      models: {
        chat: {
          enabled: false,
          label: "Chat",
        },
        reasoner: {
          enabled: false,
          label: "Reasoner",
        },
      },
    },
  },
} as const;
