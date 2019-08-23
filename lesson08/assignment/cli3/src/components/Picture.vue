<script>
import {
  toggle
} from "./mixins/toggle";
import {
  upper
} from "./filters";

export default {
  name: 'Post',
  props: {
    post: {
      type: Object
    }
  },

  mixins: [toggle],

  filters: {
    upper
  },

  data() {
    return {
      isShowing: true
    };
  }
};
</script>

<template>
<article class="picture">
  <b-card v-show="isShowing" :img-src="post.src" :key="post.id" :title="post.alt" img-top tag="article" style="max-width: 100%">
  </b-card>
  <b-card-text>{{post.copy | upper}}</b-card-text>
  <b-button @click="toggleShow" href="#" variant="primary">Click to toggle image</b-button>
</article>
</template>

<style scoped lang="scss">
.picture {
    height: 800px;
    width: 800px;
    margin: 2rem;
    padding: 2rem;
}
</style>
