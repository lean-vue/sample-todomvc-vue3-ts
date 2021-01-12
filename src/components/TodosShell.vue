<template>
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <todos-input @create="createTodo" />
    </header>
    <todos-main :todos="todos"/>
    <todos-actionbar />
  </section>
</template>

<script lang="ts">
import TodosActionbar from './TodosActionbar.vue'
import TodosInput from './TodosInput.vue'
import TodosMain from './TodosMain.vue'
import { Todo } from '@/model/todo.interface';
import { defineComponent } from 'vue';

import store from '@/model/local.store';

export default defineComponent<{},{},{ todos: Todo[] }>({
  components: { TodosInput, TodosMain, TodosActionbar },

  data() {
    return {
      todos: []
    }
  },

  methods: {
    async createTodo(title: string) {
      const todo = await store.create(title);
      this.todos.push(todo);
    }
  },

  async mounted() {
    this.todos = await store.getAll();
  }
});
</script>

<style>

</style>