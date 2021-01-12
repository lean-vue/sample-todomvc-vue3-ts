<template>
  <input v-model="title"
    @keyup.enter="createTodo"
   class="new-todo" placeholder="What needs to be done?" autofocus />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      title: ''
    }
  },
  methods: {
    createTodo() {
      this.title = this.title.trim();
      if (this.title) {
        this.$emit('create', this.title);
        this.title = '';
      }
    }
  }
});
</script>

<style>
</style>