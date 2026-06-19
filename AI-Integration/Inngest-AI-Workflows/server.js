import "dotenv/config";
import express from "express";
import { serve } from "inngest/express";
import { inngest } from "./inngest/inngest-client.js";
import { onOrderPlaced } from "./inngest/inngest-functions.js";
import { summarizeThenTranslate } from "./inngest/AI-Functions.js";

const app = express();
app.use(express.json());

app.use(
  "/api/inngest",
  serve({
    client: inngest,
    functions: [onOrderPlaced, summarizeThenTranslate],
  }),
);

app.get("/", (req, res) => {
  res.send("Hello World");

  inngest.send({
    name: "order.placed",
  });
});

app.listen(3000, () => {
  console.log("Server is running on Port 3000");
});
