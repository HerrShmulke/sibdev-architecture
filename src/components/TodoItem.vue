<script setup lang="ts">
import { computed, unref } from 'vue';
import { useFormatDate } from '../composables/useFormatDate';
import { useFormatTime } from '../composables/useFormatTime';

interface IProps {
  label: string;
  createdAt: Date;
}

const props = defineProps<IProps>();

const isPassedModel = defineModel<boolean>('isPassed');

const formattedDate = useFormatDate(props.createdAt);
const formattedTime = useFormatTime(props.createdAt);

const fullDate = computed(() => `${unref(formattedDate)} ${unref(formattedTime)}`);
</script>

<template>
  <label class="todo-item">
    <div class="todo-item__content">
      <input v-model="isPassedModel" type="checkbox" />
      {{ props.label }}
    </div>
    <div class="todo-item__date">
      {{ fullDate }}
    </div>
  </label>
</template>

<style>
.todo-item {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  background: #1a1a1a;
  padding: 8px;
  border-radius: 8px;
  line-height: 18px;
  font-size: 18px;
  cursor: pointer;
}

.todo-item__content {
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 8px;
  flex-grow: 1;
}

.todo-item__date {
  font-size: 10px;
  line-height: 10px;
  width: max-content;
  color: #747474;
}
</style>