<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped src="./ProfilePage.scss">
</style>
<template src="./ProfilePage.html">
  <div></div>
</template>

<script>
import Navbar from '../../components/navbar/Navbar';

export default {
  name: 'profile',
  components: {
    Navbar,
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
