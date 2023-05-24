import { CreatedAtAdapterService } from "../../services/adapters/created-at-adapter-service";
import { ICreatedAtAdapterServiceKey } from "../../services/adapters/created-at-adapter-service.interfaces";
import { TodoAdapterService } from "../../services/adapters/todo-adapter-service";
import { ITodoAdapterServiceKey } from "../../services/adapters/todo-adapter-service.interfaces";
import { IContainerBinder } from "../../types/containerAccessor.interface";

export function bindAdapterServices(bind: IContainerBinder) {
  bind(ICreatedAtAdapterServiceKey).to(CreatedAtAdapterService).inSingletonScope();
  bind(ITodoAdapterServiceKey).to(TodoAdapterService).inSingletonScope();
}