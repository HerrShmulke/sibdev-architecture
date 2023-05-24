<script setup lang="ts">
import TodoCreateInput from './components/TodoCreateInput.vue';
import TodoList from './components/TodoList.vue';
</script>

<template>
  <div class="app">
    <TodoCreateInput class="app__todo-input" />
    <TodoList />
  </div>
</template>

<style scoped>
.app__todo-input {
  margin-bottom: 24px;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
