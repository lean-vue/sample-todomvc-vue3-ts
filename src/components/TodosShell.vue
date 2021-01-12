<template>
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <todos-input />
    </header>
    <todos-main />
    <todos-actionbar />
  </section>
</template>

<script lang="ts">
import TodosActionbar from './TodosActionbar.vue'
import TodosInput from './TodosInput.vue'
import TodosMain from './TodosMain.vue'

export default {
  components: { TodosInput, TodosMain, TodosActionbar },

}
</script>

<style>

</style>