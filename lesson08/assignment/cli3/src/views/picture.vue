

<script>

// Later:
// import { toggle } from "./mixins/toggle";
// import { lower } from "./filters";

export default {
  name: 'Post', //Check that this is the actual name used
  props: {
    post: {
      type: Object
    }
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
      style="max-width: 100%"
      class="my-class"
      >
    </b-card>
  </article>


</template>
