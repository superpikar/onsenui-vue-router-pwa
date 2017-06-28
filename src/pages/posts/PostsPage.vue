<style lang="scss" scoped src="./PostsPage.scss">
</style>
<template src="./PostsPage.html">
  <div></div>
</template>

<script>
import Navbar from '../../components/navbar/Navbar';
import LoadingIndicator from '../../components/loading-indicator/LoadingIndicator';
import PostService from '../../services/PostService';
import Config from '../../config/Config';

export default {
  name: 'posts-page',
  components: {
    Navbar,
    LoadingIndicator,
  },
  data() {
    return {
      config: Config,
      isLoading: false,
      posts: [],
      found: 0,
    };
  },
  mounted() {
    this.isLoading = true;
    PostService.getPosts().then((response) => {
      this.posts = response.posts;
      this.found = response.found;
      this.isLoading = false;
    });
  },
};
</script>
