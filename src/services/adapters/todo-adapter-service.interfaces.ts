import { InjectionKey } from "vue";
import { TodoDTO } from "../../types/dto/todo-dto";
import { Todo } from '../../types/server/todo';
import { IBaseAdapterService } from "./base-adapter-service";

export type ITodoAdapterService = IBaseAdapterService<Todo, TodoDTO>;

export const ITodoAdapterServiceKey: InjectionKey<ITodoAdapterService> = Symbol(
  "ITodoAdapterService"
);
