<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped src="./Navbar.scss">
</style>
<template src="./Navbar.html">
  <div></div>
</template>

<script>
export default {
  name: 'navbar',
  data() {
    return {
      msg: 'ONSENUI+VUE MOBILE WEB',
    };
  },
  methods: {
    toggleMenu() {
      console.log('toggleMenu');
      this.$store.commit('toggleMenu');
    },
  },
};
</script>
