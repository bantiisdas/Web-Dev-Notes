import { apiKeyChecker } from "./configAI.js";
import { checkOpnAI } from "./configAI.js";
import readline from "readline";

apiKeyChecker();

const client = await checkOpnAI();

const model = "gpt-4o-mini";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Using readline
// rl.question("Who are you?", (ans) => {
//   console.log(`You told ${ans}`);
// });

const systemPrompt =
  "You are a very helpful AI assistant. You give answers of user quries";

const askQuestion = (userPrompt) => {
  return new Promise((resolve) => {
    rl.question(userPrompt, (answer) => {
      resolve(answer);
    });
  });
};

let conversation = [];

while (true) {
  console.log("Hi, I am your AI Assistant, please ask a question");
  const userQuestion = await askQuestion("You: ");

  if (userQuestion.toLowerCase() === "exit") {
    console.log("exiting...");
    break;
  }

  const ansStream = await client.chat.completions.create({
    model,
    stream: true,
    messages: [
      {
        role: "system",
        content: systemPrompt,
      },
      ...conversation,
      {
        role: "user",
        content: userQuestion,
      },
    ],
  });

  let all_chunk = null;

  process.stdout.write("AI Assistant: ");
  for await (const chunk of ansStream) {
    const delta = chunk.choices[0]?.delta?.content;

    if (delta) {
      process.stdout.write(delta);
      all_chunk += delta;
    }
  }
  conversation.push({ role: "user", content: userQuestion });
  conversation.push({ role: "assistant", content: all_chunk });

  console.log("\n");
  //console.log(conversation);
}

rl.close();
