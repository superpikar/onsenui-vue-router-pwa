<style lang="scss" scoped src="./App.scss">
</style>
<template src="./App.html">
  <div></div>
</template>

<script>
import HomePage from './pages/home/HomePage';
import store from './store';

export default {
  name: 'app',
  store,
  computed: {
    menuIsOpen() {
      return store.state.menuIsOpen;
    },
  },
  data() {
    return {
      essentialLinks: [
        {
          label: 'Home',
          routeName: 'home',
          icon: 'fa-home',
        },
        {
          label: 'Profile',
          routeName: 'profile',
          icon: 'fa-user',
        },
        {
          label: 'Blog',
          routeName: 'posts',
          icon: 'fa-file',
        },
      ],
    };
  },
  components: {
    HomePage,
  },
  methods: {
    goTo(routeName) {
      this.$router.push({ name: routeName });
      store.commit('toggleMenu', false);
    },
    onUserInteraction(event) {
      // console.log(event);   // on click ons-splitter-side-mask, event always false(?)
      store.commit('toggleMenu', event);
    },
  },
};
</script>
