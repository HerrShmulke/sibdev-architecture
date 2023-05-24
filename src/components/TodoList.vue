<script setup lang="ts">
import { computed } from 'vue';
import { useTodoStore } from '../stores/useTodoStore';
import { TodoDTO } from '../types/dto/todo-dto';
import TodoItem from './TodoItem.vue';

const todoStore = useTodoStore();

todoStore.getTodos();

const todos = computed(() => todoStore.todos);

async function changePassed(todo: TodoDTO) {
  await todoStore.editTodo({
    id: todo.id,
    isPassed: !todo.isPassed,
    label: todo.label,
    createdAt: todo.createdAt
  });

  await todoStore.getTodos();
}
</script>

<template>
  <div class="todo-list">
    <TodoItem 
      v-for="todo in todos" 
      :label="todo.label" 
      :is-passed="todo.isPassed" 
      :created-at="todo.createdAt" 
      @update:is-passed="changePassed(todo)" 
    />
  </div>
</template>

<style>
.todo-list {
  display: flex;
  flex-direction: column;
  row-gap: 8px;
}
</style>