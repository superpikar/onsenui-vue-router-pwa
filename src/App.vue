<style lang="scss" scoped src="./App.scss">
</style>
<template src="./App.html">
  <div></div>
</template>

<script>
import HomePage from './pages/home/HomePage';
import MenuPage from './components/MenuPage';
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
      ],
    };
  },
  components: {
    HomePage,
    MenuPage,
  },
  methods: {
    goTo(routeName) {
      this.$router.push({ name: routeName });
      store.commit('toggleMenu');
      // this.menuIsOpen = false;
    },
  },
};
</script>
