<template>
  <!-- This section should be hidden by default and shown when there are todos -->
  <section class="main">
    <input :checked="allDone" id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <todos-item 
        v-for="t in todos" :key="t.id"
        :todo="t"
      />
    </ul>
  </section>
</template>

<script lang="ts">
import TodosItem from './TodosItem.vue';
import { Todo } from '@/model/todo.interface';
import { PropType } from 'vue';
import { mapGetters } from 'vuex';

export default {
  components: { TodosItem },

  props: {
    todos: {
      type: Object as PropType<Todo[]>,
      required: true
    }
  },

  computed: {
    ...mapGetters(['allDone'])
  }
};
</script>

<style>
</style>