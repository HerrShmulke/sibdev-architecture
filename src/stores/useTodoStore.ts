import { defineStore } from 'pinia';
import { ref } from 'vue';
import { TodoDTO } from '../types/dto/todo-dto';
import { useInjectable } from '../composables/useInjectable';
import { ITodoDataServiceKey } from '../services/data/todo-data-service.interfaces';
import { ITodoAdapterServiceKey } from '../services/adapters/todo-adapter-service.interfaces';

export const useTodoStore = defineStore('todo', () => {
  const todos = ref<TodoDTO[]>([]);

  const todoDataService = useInjectable(ITodoDataServiceKey);
  const todoAdapterService = useInjectable(ITodoAdapterServiceKey);
  
  async function getTodos() {
    const localTodo = await todoDataService.getTodos();

    todos.value = localTodo.map((iterableTodo) => todoAdapterService.getData(iterableTodo));
  }

  async function createTodo(label: string, isPassed: boolean) {
    await todoDataService.createTodo(label, isPassed);
  }

  async function editTodo(todo: TodoDTO) {
    await todoDataService.editTodo(todo);
  }

  return {
    getTodos,
    createTodo,
    editTodo,
    todos,
  }
});