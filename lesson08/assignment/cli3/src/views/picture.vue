

<script>
import { toggle } from "../components/mixins/toggle";
import { lower } from "../components/filters";

export default {
  name: 'Post', //Check that this is the actual name used
  props: {
    post: {
      type: Object
    }
  },

mixins: [toggle],

filters: {
  lower
},

  data () {
    return {
      isShowing: true
    };
  }
};
</script>


<template>


  <article class="picture">
    <b-card
      v-show="isShowing"
      :img-src="post.src"
      :key="post.id"
      :title="post.alt"
      img-top
      tag="article"
      style="max-width: 100%"
      class="mb-2"
      >
    </b-card>
    <b-card-text>{{post.copy | lower}}</b-card-text>
    <b-button @click="toggleShow" href="#" variant="primary">Toggle Me</b-button>
  </article>


</template>

<style scoped lang="scss">

.picture {
  height: 400px;
  width: 600px;
}

.toggle-cards {
  margin: 2rem 0;
  padding: 2rem;
  border: 2px solid purple;
}

</style>
