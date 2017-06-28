<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped src="./ProfilePage.scss">
</style>
<template src="./ProfilePage.html">
  <div></div>
</template>

<script>
import MenuPage from '../../components/MenuPage';

export default {
  name: 'profile',
  components: {
    MenuPage,
  },
  data() {
    return {
      msg: 'This is my profile',
    };
  },
  methods: {
  },
};
</script>
