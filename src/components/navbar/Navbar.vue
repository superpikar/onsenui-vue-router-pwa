<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .header {
    text-align: center;
    margin-bottom: 20px;
  }
  img {
    max-width: 150px;
  }
  ons-list-item {
    cursor: pointer;
  }
</style>

<template>
  <v-ons-toolbar class="home-toolbar">
    <div class="left">
      <v-ons-toolbar-button @click="toggleMenu()">
        <v-ons-icon icon="ion-navicon, material:md-menu"></v-ons-icon>
      </v-ons-toolbar-button>
    </div>
    <div class="center">{{ msg }}</div>
  </v-ons-toolbar>
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
      this.$store.commit('toggleMenu', true);
    },
  },
};
</script>
