import 'reflect-metadata';
import { Container } from 'inversify';
import { InjectionKey } from 'vue';
import { bindDataServices } from './container.data-services';
import { bindAdapterServices } from './container.adapter-services';

export function getContainer() {
  const container = new Container();

  function bind<T>(key: InjectionKey<T>) {
    return container.bind<T>(key as symbol);
  }

  bindAdapterServices(bind);
  bindDataServices(bind);

  return container;
}