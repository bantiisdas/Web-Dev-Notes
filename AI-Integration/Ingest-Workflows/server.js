import express from "express";
import "dotenv/config";

import { todos, addTodo, deleteTodo } from "./service.js";
import { serve } from "inngest/express";
import { inngest } from "./ingest/client.js";
import { onTodoCreated, onTodoDeleted } from "./ingest/functions.js";

const app = express();

app.use(express.json());
app.use(
  "/api/inngest",
  serve({
    client: inngest,
    functions: [onTodoCreated, onTodoDeleted],
  }),
);

app.post("/todos", async (req, res) => {
  const { title } = req.body;

  if (!title) return res.status(400).json({ error: "Title is required" });

  const todo = addTodo(title);

  await inngest.send({
    name: "todo.created",
    data: { todo },
  });

  res.status(201).json(todo);
});

app.delete("/todos/:id", async (req, res) => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ error: "Id is required" });
  const todo = deleteTodo(id);

  await inngest.send({
    name: "todo.deleted",
    data: { todo },
  });
  res.status(201).json(todo);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
