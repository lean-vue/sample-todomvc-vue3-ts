import { Store } from "./store.interface";
import { Todo } from "./todo.interface";
import axios from 'axios';

const baseUrl = 'http://localhost:3000/todos'
class HttpStore implements Store {

  async getAll(): Promise<Todo[]> {
   const response = await axios.get(baseUrl);
   return response.data;
  }

  async create(title: string): Promise<Todo> {
    const response = await axios.post(baseUrl, { title, completed: false });
    return response.data;
  }

  async update(id: number, changes: Partial<{ title: string; completed: boolean }>): Promise<Todo> {
    const response = await axios.patch(baseUrl + '/' + id, changes);
    return response.data;
  }

  async remove(id: number): Promise<void> {
    await axios.delete(baseUrl + '/' + id);
  }
}

// Export singleton store object
export default new HttpStore();