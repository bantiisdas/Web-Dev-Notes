import { apiKeyChecker } from "./configAI.js";
import { checkOpnAI } from "./configAI.js";
import { calculator, calculateTool } from "./calculator.js";
import readline from "readline";
apiKeyChecker();

const client = await checkOpnAI();

const model = "gpt-4o-mini";

const tools = [calculateTool];

export async function toolCallAnswer(userPrompt) {
  const systemPrompt =
    "You are a very helpful AI assistant. You give calculation results of user quries";

  //const userPrompt = "What is 5 multiplied by 3?";

  const firstResponse = await client.chat.completions.create({
    model,
    messages: [
      {
        role: "system",
        content: systemPrompt,
      },
      { role: "user", content: userPrompt },
    ],
    tools,
    tool_choice: "auto",
  });

  //console.log(firstResponse.choices[0].message);
  //console.log("Tool calls: ", firstResponse.choices[0].message.tool_calls);

  const assistantResponse = firstResponse.choices[0].message;
  let calculatorResult = null;
  if (assistantResponse?.tool_calls?.length > 0) {
    const toolCall = assistantResponse.tool_calls[0];
    const name =
      toolCall.function?.name ?? toolCall.name ?? toolCall.function_call?.name;
    let args =
      toolCall.function?.arguments ??
      toolCall.arguments ??
      toolCall.function_call?.arguments;
    if (typeof args === "string") {
      try {
        args = JSON.parse(args);
      } catch (e) {
        console.error("Failed to parse tool arguments:", e);
        args = {};
      }
    }
    if (name === "calculator") {
      const { operation, number1, number2 } = args;
      //console.log("Calling calculator with: ", operation, number1, number2);
      calculatorResult = await calculator(operation, number1, number2);
      //console.log("Calculator Result: ", calculatorResult);
    }
  }

  const secondResponse = await client.chat.completions.create({
    model,
    stream: true,
    messages: [
      {
        role: "system",
        content: systemPrompt,
      },
      { role: "user", content: userPrompt },
      assistantResponse,
      {
        role: "tool",
        tool_call_id: assistantResponse.tool_calls[0].id,
        content: String(calculatorResult),
      },
    ],
  });

  //console.log(secondResponse.choices[0].message.content);
  return secondResponse;
}
