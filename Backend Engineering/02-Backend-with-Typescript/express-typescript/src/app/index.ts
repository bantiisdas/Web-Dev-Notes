import express from "express";
import type { Application } from "express";
import todoRouter from "./todo/routes.js";

export const createServerApplication = (): Application => {
  const app = express();

  app.use(express.json());
  app.use("/todos", todoRouter);

  app.get("/health", (req, res) => {
    return res.json({ message: "My health is good!" });
  });
  return app;
};
