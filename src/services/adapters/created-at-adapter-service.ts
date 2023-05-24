import { injectable } from "inversify";
import { ICreatedAtAdapterService } from "./created-at-adapter-service.interfaces";
import { CreatedAt } from "../../types/server/created-at";

@injectable()
export class CreatedAtAdapterService implements ICreatedAtAdapterService {
  getData(data: CreatedAt): Date {
    return new Date(`${data.date} ${data.time}`);
  }
}
