<template>
  <!-- These are here just to show the structure of the list items -->
  <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
  <li :class="{ completed: todo.completed }">
    <div class="view">
      <input
        class="toggle"
        type="checkbox"
        :checked="todo.completed"
        @change="toggleTodo(todo.id)"
      />
      <label>{{ todo.title }}</label>
      <button @click="destroyTodo(todo.id)" class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template" />
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Todo } from "@/model/todo.interface";
import { mapActions } from "vuex";

export default defineComponent({
  props: {
    todo: {
      type: Object as PropType<Todo>,
      required: true,
    },
  },
  methods: {
    ...mapActions(['toggleTodo', 'destroyTodo'])
  },
});
</script>

<style>
</style>