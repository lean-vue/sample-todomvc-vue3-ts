<template>
  <!-- This footer should be hidden by default and shown when there are todos -->
  <footer class="footer">
    <!-- This should be `0 items left` by default -->
    <span class="todo-count"><strong>{{ activeCount }}</strong> item left</span>
    <!-- Remove this if you don't implement routing -->
    <ul class="filters">
      <li>
        <a class="selected" href="#/">All</a>
      </li>
      <li>
        <a href="#/active">Active</a>
      </li>
      <li>
        <a href="#/completed">Completed</a>
      </li>
    </ul>
    <!-- Hidden if no completed items are left ↓ -->
    <button @click="destroyCompletedTodos" v-show="hasCompleted" class="clear-completed">Clear completed</button>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "vuex";

export default defineComponent({
  computed: {
    activeCount(): number {
      return this.$store.state.todos.reduce(
        (count, t) => t.completed ? count : count + 1 , 0
      );
    },
    hasCompleted(): boolean {
      return this.$store.state.todos.findIndex(t => t.completed) !== -1;
    }
  },
  methods: {
    ...mapActions(['destroyCompletedTodos'])
  }
});
</script>

<style>
</style>