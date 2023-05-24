import { inject, injectable } from "inversify";
import { TodoDTO } from "../../types/dto/todo-dto";
import { Todo } from "../../types/server/todo";
import { ITodoAdapterService } from "./todo-adapter-service.interfaces";
import { ICreatedAtAdapterServiceKey } from "./created-at-adapter-service.interfaces";
import { CreatedAtAdapterService } from "./created-at-adapter-service";

@injectable()
export class TodoAdapterService implements ITodoAdapterService {
  private createdAtAdapterService: CreatedAtAdapterService;
  
  constructor(
    @inject(ICreatedAtAdapterServiceKey as symbol) createdAtAdapterService: CreatedAtAdapterService
    ) {
      this.createdAtAdapterService = createdAtAdapterService;
    }
  
  getData(data: Todo): TodoDTO {
    return {
      id: data.id,
      isPassed: data.is_passed,
      label: data.label,
      createdAt: this.createdAtAdapterService.getData(data.created_at),
    };
  }
}
