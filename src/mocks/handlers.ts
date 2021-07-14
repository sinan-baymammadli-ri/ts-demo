import { db } from "./db";

export const handlers = [...db.todo.toHandlers("rest")];
