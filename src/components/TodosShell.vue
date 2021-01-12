<template>
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <h2 v-if="errorMsg">{{ errorMsg }}</h2>
      <todos-input @create="createTodo" />
    </header>
    <todos-main :todos="todos"
      @toggle="toggleTodo"
    />
    <todos-actionbar />
  </section>
</template>

<script lang="ts">
import TodosActionbar from './TodosActionbar.vue'
import TodosInput from './TodosInput.vue'
import TodosMain from './TodosMain.vue'
import { Todo } from '@/model/todo.interface';
import { defineComponent, onErrorCaptured } from 'vue';

import store from '@/model/http.store';

export default defineComponent<{},{},{ todos: Todo[]; errorMsg: string }>({
  components: { TodosInput, TodosMain, TodosActionbar },

  data() {
    return {
      todos: [],
      errorMsg: ''
    }
  },

  methods: {
    async createTodo(title: string) {
      const todo = await store.create(title);
      this.todos.push(todo);
    },
    async toggleTodo(id: number) {
      const todo = this.todos.find(t => t.id === id) as Todo;
      await store.update(id, { completed: !todo.completed });
      todo.completed = !todo.completed;
    }
  },

  async mounted() {
    try {
      this.todos = await store.getAll();
    } catch (error) {
      this.errorMsg = error.message;
    }
  },

});
</script>

<style>

</style>