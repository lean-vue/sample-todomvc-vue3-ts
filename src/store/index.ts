import { Todo } from '@/model/todo.interface'
import { createStore } from 'vuex'

import httpBackend from '@/model/http.store';

export interface State {
  todos: Todo[];
  visibility: number;
}

export default createStore<State>({
  state: {
    todos: [],
    visibility: 0
  },
  getters: {
    allDone(state): boolean {
      return state.todos.findIndex(t => !t.completed) === -1
    }
  },
  mutations: {
    todosLoaded(state, todos: Todo[]) {
      state.todos = todos;
    },
    todoCreated(state, todo: Todo) {
      state.todos.push(todo);
    },
    todoUpdated(state, todo: Todo) {
      state.todos = state.todos.map(t => t.id === todo.id 
        ? todo : t);
    },
    todoDestroyed(state, id: number) {
      state.todos = state.todos.filter(t => t.id !== id);
    }
  },
  actions: {
    async loadTodos( { commit }) {
      const todos = await httpBackend.getAll();
      commit('todosLoaded', todos);
    },
    async createTodo( ctx, title: string) {
      const todo = await httpBackend.create(title);
      ctx.commit('todoCreated', todo);
    },
    async toggleTodo( {commit, state}, id: number) {
      const todo = state.todos.find(t => t.id === id) as Todo;
      const updatedTodo = await httpBackend.update(id, { completed: !todo.completed });
      commit('todoUpdated', updatedTodo);
    },
    async updateTodoTitle( {commit}, payload: { id: number; title: string }) {
      const todo = await httpBackend.update(payload.id, { title: payload.title });
      commit('todoUpdated', todo);
    },
    async destroyTodo( { commit }, id: number ) {
      await httpBackend.remove(id);
      commit('todoDestroyed', id);
    },
    async destroyCompletedTodos( { commit, state }) {
      Promise.all(
        state.todos.filter(t => t.completed).map(
          t => httpBackend.remove(t.id)
        )
      ).then(() => {
        state.todos.filter(t => t.completed).forEach(
          t => commit('todoDestroyed', t.id)
        )
      })
    }
  },
  modules: {
  }
})
