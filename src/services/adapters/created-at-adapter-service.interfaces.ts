import { InjectionKey } from "vue";
import { IBaseAdapterService } from "./base-adapter-service";
import { CreatedAt } from "../../types/server/created-at";

export type ICreatedAtAdapterService = IBaseAdapterService<CreatedAt, Date>;

export const ICreatedAtAdapterServiceKey: InjectionKey<ICreatedAtAdapterService> = Symbol(
  "ICreatedAtAdapterService"
);
