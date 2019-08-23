<script>
import Post from '../components/Picture.vue';
//move picture.vue to components and change this to /components/picture.vue
export default {
  name: "home", //check on this name
  components: {
    Post
  },

  data() {
    return {
      posts: [{
          id: 1,
          name: 'A ray swims',
          alt: 'Ray the Ray',
          copy: 'this lower case that should display in upper. behold the ray.',
          src: require('../assets/ray.png')
        },
        {
          id: 2,
          name: 'Roman Antiquities',
          alt: 'Colosseum',
          copy: 'more upper case text. when in rome.',
          src: require('../assets/rome.png')
        },
        {
          id: 3,
          name: 'Boat on Lake',
          alt: 'Lake in Glacier National Park',
          copy: 'upper case at the upper lake.',
          src: require('../assets/lake.png')
        }
      ]
    };
  }
};
</script>

<template>
<div id="app">
  <div class="container">
    <!--Note to instructors: these images are not centering accurately; they're offset to the left. I can't figure out why.-->
    <section v-if="posts">
      <post class="myclass" v-for="post in posts" :post="post" :key="post.id">
      </post>
    </section>
  </div>
</div>
</template>

<style scoped lang="scss">
.myclass {
    border: 10px solid black;
    margin: 25px;
}
</style>
