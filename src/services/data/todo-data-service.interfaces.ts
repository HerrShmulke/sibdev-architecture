import { InjectionKey } from "vue";
import { Todo } from "../../types/server/todo";
import { TodoDTO } from "../../types/dto/todo-dto";

export interface ITodoDataService {
  getTodos(): Promise<Todo[]>;
  editTodo(todo: TodoDTO): Promise<Todo>;
  createTodo(label: string, isPassed: boolean): Promise<void>;
}

export const ITodoDataServiceKey: InjectionKey<ITodoDataService> =
  Symbol("ITodoDataService");
