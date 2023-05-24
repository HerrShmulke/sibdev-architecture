import type { InjectionKey } from 'vue';
import containerAccessor from '../configuration/inversify/containerAccessor';

export function useInjectable<T>(key: InjectionKey<T>): T {
  const error = new Error();
  
  let desc = (key as symbol).description ?? '';
  
  if (desc.length == 0)
    desc = 'unknown';    
  
  try {
    return containerAccessor.get(key);
  } catch (ex) {
    console.log(`key: ${desc}`, error.stack);      
    
    throw ex;
  }
}
