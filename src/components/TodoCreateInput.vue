<script setup lang="ts">
import { ref, unref } from 'vue';
import { useTodoStore } from '../stores/useTodoStore';

const todoStore = useTodoStore()

const todoName = ref('');

async function createTodo() {
  await todoStore.createTodo(unref(todoName), false);
  todoName.value = '';
  todoStore.getTodos();
}
</script>

<template>
  <form class="todo-create-input" @submit.prevent="createTodo">
    <label>
      Название задачи:
      <input v-model="todoName" />
    </label>
    <button type="button" @click="createTodo">Создать</button>
  </form>
</template>

<style>
.todo-create-input {
  display: flex;
  flex-direction: column;
  row-gap: 16px;
}
</style>