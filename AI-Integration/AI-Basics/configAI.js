import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.OPENAI_API_KEY;

export const apiKeyChecker = () => {
  if (!API_KEY) {
    console.error("No API Key found");
    process.exit(1);
  }
};

export const checkOpnAI = async () => {
  const openai = (await import("openai")).default;

  const client = new openai.OpenAI({
    apiKey: API_KEY,
  });

  if (!client) {
    console.error("Failed to initialize openai client");
    process.exit(1);
  }

  console.log("OpenAI client initialized successfully");
  return client;
};
