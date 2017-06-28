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
  name: 'menu',
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
