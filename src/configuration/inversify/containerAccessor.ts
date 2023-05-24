import type{ InjectionKey } from 'vue';
import { interfaces } from 'inversify/lib/interfaces/interfaces';
import { IContainerAccessor, IContainerUpdater } from './containerAccessor.interface';

let container: interfaces.Container | undefined;

const containerAccessor: IContainerAccessor & IContainerUpdater = {
  updateContainer: (newContainer: interfaces.Container) => {
    container = newContainer;
  },
  
  get: <T>(key: InjectionKey<T> | string | symbol) => {
    if (container == undefined)
      throw new Error('Inversify container is not available');
    
    return container.get(key as symbol);    
  },
  
  isBound<T>(key: InjectionKey<T>): boolean {
    if (container == undefined)
      throw new Error('Inversify container is not available');
    
    return container.isBound(key as symbol);
  }
};

export default containerAccessor;
