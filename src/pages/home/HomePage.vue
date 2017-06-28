<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped src="./HomePage.scss">
</style>
<template src="./HomePage.html">
  <div></div>
</template>

<script>
import MenuPage from '../../components/MenuPage';

export default {
  name: 'home',
  components: {
    MenuPage,
  },
  data() {
    return {
      essentialLinks: [
        {
          label: 'Core Docs',
          link: 'https://vuejs.org',
          icon: 'fa-book',
        },
        {
          label: 'Gitter Chat',
          link: 'https://gitter.im/vuejs/vue',
          icon: 'fa-commenting',
        },
        {
          label: 'Forum',
          link: 'https://forum.vuejs.org',
          icon: 'ion-chatboxes',
        },
        {
          label: 'Twitter',
          link: 'https://twitter.com/vuejs',
          icon: 'fa-twitter',
        },
        {
          label: 'Docs for this template',
          link: 'http://vuejs-templates.github.io/webpack/',
          icon: 'fa-file-text',
        },
      ],
    };
  },
  methods: {
    goTo(url) {
      window.open(url, '_blank');
    },
  },
};
</script>

