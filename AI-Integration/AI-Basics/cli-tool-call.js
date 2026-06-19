import { toolCallAnswer } from "./tools.js";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export function askQuestion(userPrompt) {
  return new Promise((resolve) => {
    rl.question(userPrompt, (answer) => {
      resolve(answer);
    });
  });
}

while (true) {
  console.log("Hi I am your AI Assistant, please ask your question");

  const userQuestion = await askQuestion("You: ");
  if (userQuestion.toLowerCase() === "exit") {
    console.log("Existing");
    break;
  }

  const streamAnswer = await toolCallAnswer(userQuestion);
  console.log("AI Assistant: ");

  for await (const chunk of streamAnswer) {
    const delta = chunk.choices[0]?.delta?.content;
    if (delta) {
      process.stdout.write(delta);
    }
  }
  console.log("\n");
}

rl.close();
