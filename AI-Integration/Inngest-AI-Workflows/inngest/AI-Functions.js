import { inngest, gpt4omini } from "./inngest-client.js";

export const summarizeThenTranslate = inngest.createFunction(
  {
    id: "summmarize-translate",
    triggers: [{ event: "summarize.translate" }],
  },

  async ({ event, step }) => {
    const summarizedText = await step.ai.infer("summarize", {
      model: gpt4omini,
      body: {
        input: [
          {
            role: "user",
            content: `Summarize this in one line: ${event.data.text}`,
          },
        ],
      },
    });

    const translatedText = await step.ai.infer("translate", {
      model: gpt4omini,
      body: {
        input: [
          {
            role: "user",
            content: `translate this into bengali: ${summarizedText.output[0].content[0].text}`,
          },
        ],
      },
    });
    return translatedText.output[0].content[0].text;
  },
);
