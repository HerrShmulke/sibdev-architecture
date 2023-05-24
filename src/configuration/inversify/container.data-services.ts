import { IContainerBinder } from '../../types/containerAccessor.interface';
import { ITodoDataServiceKey } from '../../services/data/todo-data-service.interfaces';
import { TodoDataService } from '../../services/data/todo-data-service';

export function bindDataServices(bind: IContainerBinder) {
  bind(ITodoDataServiceKey).to(TodoDataService);
}