export let todos = [];
export let auditLogs = [];

let nextId = 1;

export function addTodo(title) {
  const todo = { id: nextId++, title, isCompleted: false };
  todos.push(todo);
  return todo;
}

export function getTodo(id) {
  return todos.find((todo) => todo.id === id);
}

export function updateTodo(id, patch) {
  const todo = getTodo(id);
  if (!todo) return null;

  if (todo.title !== undefined) todo.title = patch.title;
  if (todo.isCompleted !== undefined) todo.isCompleted = patch.isCompleted;

  return todo;
}

export function deleteTodo(id) {
  const index = todos.findIndex((todo) => todo.id === id);
  if (index === -1) return false;

  return todos.splice(index, 1)[0];
}
