<template>
  <!-- This section should be hidden by default and shown when there are todos -->
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <todos-item 
        v-for="t in todos" :key="t.id"
      />
    </ul>
  </section>
</template>

<script lang="ts">
import TodosItem from './TodosItem.vue';
import { Todo } from '@/model/todo.interface';
import { PropType } from 'vue';

export default {
  components: { TodosItem },

  props: {
    todos: {
      type: Object as PropType<Todo[]>,
      required: true
    }
  }
};
</script>

<style>
</style>