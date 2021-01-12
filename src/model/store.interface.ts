import { Todo } from "./todo.interface";

export interface Store {
  getAll(): Promise<Todo[]>;
  create(title: string): Promise<Todo>;
  update(id: number, changes: Partial<{ title: string, completed: boolean }>): Promise<Todo>;
  remove(id: number): Promise<void>;
}
