import { TodoDTO } from "../../types/dto/todo-dto";
import { CreatedAt } from "../../types/server/created-at";
import { Todo } from "../../types/server/todo";
import { ITodoDataService } from "./todo-data-service.interfaces";
import { injectable } from 'inversify';
import { isNumber } from 'lodash-es';

@injectable()
export class TodoDataService implements ITodoDataService {
  private readonly TODO_KEY = 'todos';
  private readonly LAST_ID_KEY = 'last_id';

  getTodos(): Promise<Todo[]> {
    const storageTodos = localStorage.getItem(this.TODO_KEY);

    if (storageTodos) {
      const todos = JSON.parse(storageTodos) as Todo[];
      return Promise.resolve(todos);
    }

    return Promise.resolve([]);
  }

  async createTodo(label: string, isPassed: boolean) {
    const todos = await this.getTodos();
    const lastId = this.getNextId();
    const createdDate = new Date();
    todos.push({ label, is_passed: isPassed, id: lastId, created_at: this.formatDateToCreatedAt(createdDate) });

    localStorage.setItem(this.TODO_KEY, JSON.stringify(todos));
  }

  async editTodo(todo: TodoDTO): Promise<Todo> {
    const todos = await this.getTodos();

    const foundTodoIndex = todos.findIndex(iterableTodo => iterableTodo.id === todo.id);

    if (foundTodoIndex === -1) throw new Error(`Элемент с ID \`${todo.id}\` не найден.`);

    const newTodo: Todo = { id: todo.id, label: todo.label, is_passed: todo.isPassed, created_at: this.formatDateToCreatedAt(todo.createdAt) }
    const newTodos = todos.with(foundTodoIndex, newTodo);

    localStorage.setItem(this.TODO_KEY, JSON.stringify(newTodos));

    return newTodo;
  }

  private getNextId(): number {
    const currentId = JSON.parse(localStorage.getItem(this.LAST_ID_KEY) ?? '0');

    if (isNumber(currentId)) {
      const nextId = currentId + 1;
      localStorage.setItem(this.LAST_ID_KEY, JSON.stringify(nextId));
      return nextId;
    }

    localStorage.setItem(this.LAST_ID_KEY, JSON.stringify(0));
    return 0
  }

  private formatDateToCreatedAt(date: Date): CreatedAt {
    return {
      date: `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`,
      time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    }
  }
}
