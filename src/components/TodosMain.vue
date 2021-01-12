<template>
  <!-- This section should be hidden by default and shown when there are todos -->
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <todos-item />
    </ul>
  </section>
</template>

<script lang="ts">
import TodosItem from './TodosItem.vue';
export default {
  components: { TodosItem },};
</script>

<style>
</style>