import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menuIsOpen: false,
  },
  mutations: {
    toggleMenu(state) {
      state.menuIsOpen = !state.menuIsOpen;
    },
  },
  actions: {},
});
