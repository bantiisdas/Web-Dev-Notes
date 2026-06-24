import type { Request, Response } from "express";
import {
  todoIdParamSchema,
  todoValidationSchema,
  type Todo,
} from "../../validation/todo.schema.js";

class TodoController {
  private _db: Todo[];

  constructor() {
    this._db = [];
  }

  public handleGetAllTodos(req: Request, res: Response) {
    const todos = this._db;
    return res.status(200).json({ todos });
  }

  public async handleInsertTodo(req: Request, res: Response) {
    try {
      const unvalidatedBody = req.body;
      const validationResult =
        await todoValidationSchema.parseAsync(unvalidatedBody);
      this._db.push(validationResult);
      return res.status(201).json({ todo: validationResult });
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  }

  public async handleGetTodoById(req: Request, res: Response) {
    try {
      const { id } = await todoIdParamSchema.parseAsync(req.params);
      const todo = this._db.find((t) => t.id === id);
      if (!todo) {
        return res.status(404).json({ error: "Todo not found" });
      }
      return res.status(200).json({ todo });
    } catch (error) {
      return res.status(400).json({ error: error });
    }
  }

  public async handleUpdateTodoById(req: Request, res: Response) {
    try {
      const unvalidatedBody = req.body;
      const validationResult =
        await todoValidationSchema.parseAsync(unvalidatedBody);

      const { id } = await todoIdParamSchema.parseAsync(req.params);
      const index = this._db.findIndex((todo) => todo.id === id);
      if (index === -1) {
        return res.status(404).json({ error: "Todo not found" });
      }

      const updatedTodo: Todo = { ...validationResult, id };
      this._db[index] = updatedTodo;
      return res.status(201).json({ todo: updatedTodo });
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  }

  public async handleDeleteTodoById(req: Request, res: Response) {
    try {
      const { id } = await todoIdParamSchema.parseAsync(req.params);
      const index = this._db.findIndex((todo) => todo.id === id);
      if (index === -1) {
        return res.status(404).json({ error: "Todo not found" });
      }
      const deletedTodo = this._db.splice(index, 1)[0];
      return res.status(200).json({ deletedTodo });
    } catch (error) {
      return res.status(400).json({ error: error });
    }
  }
}

export default TodoController;
