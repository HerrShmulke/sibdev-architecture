import type { InjectionKey } from 'vue';
import { interfaces } from 'inversify/lib/interfaces/interfaces';

export interface IContainerAccessor {
  get<T>(key: InjectionKey<T>): T;
  isBound<T>(key: InjectionKey<T>): boolean
}

export interface IContainerUpdater {
  updateContainer: (container: interfaces.Container) => void
}

export type IContainerBinder = <T>(key: InjectionKey<T>) => interfaces.BindingToSyntax<T>;
