<template>
  <!-- These are here just to show the structure of the list items -->
  <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
  <li :class="{ completed: todo.completed }">
    <div class="view">
      <input class="toggle" type="checkbox" :checked="todo.completed" />
      <label>{{ todo.title }}</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template" />
  </li>
</template>

<script lang="ts">
import { PropType } from 'vue';
import { Todo } from '@/model/todo.interface';
export default {
  props: {
    todo: {
      type: Object as PropType<Todo>,
      required: true
    }
  }
};
</script>

<style>
</style>