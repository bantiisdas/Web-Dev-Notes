import { inngest } from "./client.js";
import { auditLogs } from "../service.js";

export const onTodoCreated = inngest.createFunction(
  {
    id: "on-todo-created",
    triggers: [{ event: "todo.created" }],
  },
  async ({ event, step }) => {
    const result = await step.run("audit", async () => {
      auditLogs.push({
        action: "created",
        id: event.data.todo.id,
        title: event.data.todo.title,
        timeStamp: new Date().toISOString(),
      });
      return { success: true };
    });
    return result;
  },
);

export const onTodoDeleted = inngest.createFunction(
  {
    id: "on-todo-deleted",
    retries: 2,
    triggers: [{ event: "todo.deleted" }],
  },
  async ({ event, step, attempt }) => {
    const id = event.data.todo.id;
    await step.run("cleanup", async () => {
      if (attempt === 0) {
        throw new error("Failed to cleanup data");
      }
      return "Cleaned";
    });

    await step.run("audit", async () => {
      auditLogs.push({
        action: "deleted",
        id: id,
        timeStamp: new Date().toISOString(),
      });
      return { ok: true };
    });
  },
);
