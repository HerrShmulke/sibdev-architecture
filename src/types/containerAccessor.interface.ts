import { InjectionKey } from "vue";
import { interfaces } from "inversify/lib/interfaces/interfaces";

export type IContainerBinder = <T>(
  key: InjectionKey<T>
) => interfaces.BindingToSyntax<T>;
