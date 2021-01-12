<template>
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <todos-input @create="createTodo" />
    </header>
    <todos-main :todos="todos" />
    <todos-actionbar />
  </section>
  <footer class="info">
    <p>Double-click to edit a todo</p>
    <!-- Remove the below line ↓ -->
    <p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
    <!-- Change this out with your name and url ↓ -->
    <p>Created by <a href="http://todomvc.com">you</a></p>
    <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
  </footer>
</template>

<script lang="ts">
import TodosActionbar from './TodosActionbar.vue'
import TodosInput from './TodosInput.vue'
import TodosMain from './TodosMain.vue'
import { Todo } from '@/model/todo.interface';
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';

export default defineComponent({
  components: { TodosInput, TodosMain, TodosActionbar },

  methods: {
    ...mapActions(['createTodo'])
  },

  computed: {
    todos(): Todo[] {
      return this.$store.state.todos;
    }
  },

  async created() {
    this.$store.dispatch('loadTodos');
  },

});
</script>

<style>

</style>