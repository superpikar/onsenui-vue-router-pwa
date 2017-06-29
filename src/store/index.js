import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menuIsOpen: false,
  },
  mutations: {
    toggleMenu(state, isToggle) {
      if (typeof isToggle !== 'undefined') {
        state.menuIsOpen = isToggle;
      } else {
        state.menuIsOpen = !state.menuIsOpen;
      }
    },
  },
});
