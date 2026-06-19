import { apiKeyChecker } from "./configAI.js";
import { checkOpnAI } from "./configAI.js";
import util from "util";

apiKeyChecker();

const client = await checkOpnAI();

const model = "gpt-4o-mini";
// console.log(
//   util.inspect(client, {
//     depth: null,
//     colors: true,
//   }),
// );

// const response = await client.chat.completions.create({
//   model,
//   messages: [
//     {
//       role: "system",
//       content:
//         "You are science fiction writer. You write short stories about space travel.",
//     },
//     { role: "user", content: "What is the best place to travel?" },
//   ],
// });

// console.log(JSON.stringify(response, null, 2));

// console.log(response.choices[0].message.content);
// const usage_stats = {
//   prompt_tokens: response.usage.prompt_tokens,
//   completion_tokens: response.usage.completion_tokens,
//   total_tokens: response.usage.total_tokens,
// };
// console.table(usage_stats);

// const askQuestion = async (systemPrompt, userPrompt) => {
//   const response = await client.chat.completions.create({
//     model,
//     messages: [
//       {
//         role: "system",
//         content: systemPrompt,
//       },
//       {
//         role: "user",
//         content: userPrompt,
//       },
//     ],
//   });

//   console.log(response.choices[0].message.content);
// };

// askQuestion(
//   "You are John wick. You are the real life character of John wick",
//   "who killed your dog?",
// );

// let conversation = [];

// const askQuestion = async (systemPrompt, userPrompt, history = []) => {
//   const response = await client.chat.completions.create({
//     model,
//     messages: [
//       {
//         role: "system",
//         content: systemPrompt,
//       },
//       ...history,
//       {
//         role: "user",
//         content: userPrompt,
//       },
//     ],
//   });
//   history.push({ role: "user", content: userPrompt });

//   history.push({
//     role: "system",
//     content: response.choices[0].message.content,
//   });

//   return response.choices[0].message.content;
// };

// const response1 = await askQuestion(
//   "You are a helpul AI Assistant",
//   "My name is Sup, tell me the age of the universe",
//   conversation,
// );

// console.log(response1);

// const response2 = await askQuestion(
//   "You are a helpul AI Assistant",
//   "What is my name?",
//   conversation,
// );
// console.log(response2);
// console.log(conversation);

//Data Stream
// const stream = {
//   count: 0,
//   async next() {
//     this.count++;
//     if (this.count > 5) {
//       return { done: true };
//     }
//     return {
//       done: false,
//       value: `chunk ${this.count}`,
//     };
//   },
//   [Symbol.asyncIterator]() {
//     return this;
//   },
// };

// for await (const chunk of stream) {
//   console.log(chunk);
// }

const stream = await client.chat.completions.create({
  model,
  stream: true,
  messages: [
    {
      role: "system",
      content: "You are a helpful AI assistant",
    },
    {
      role: "user",
      content: "Tell me about one mistry of Universe",
    },
  ],
});

let last_chunk = null;

for await (const messages of stream) {
  console.log(JSON.stringify(messages, null, 2));
  const delta = messages.choices[0]?.delta?.content;

  if (delta) {
    process.stdout.write(delta);
    last_chunk += delta;
  }
}
