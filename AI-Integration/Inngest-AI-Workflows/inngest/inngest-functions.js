import { inngest } from "./inngest-client.js";

export const onOrderPlaced = inngest.createFunction(
  {
    id: "on-order-placed",
    retries: 2,
    triggers: [{ event: "order.placed" }],
  },
  async ({ event, step }) => {
    const { orderId, customerName } = event.data;
    const greeting = await step.run("greeting", async () => {
      return `Hello ${customerName}, thank you for your order ${orderId}!`;
    });

    await step.run("greetlog", async () => {
      console.log(greeting);
    });

    return greeting;
  },
);
