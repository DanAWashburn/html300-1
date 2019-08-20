<script>
import Post from './Post.vue';

export default {
  name: 'app',
  components: {
    Post
  },
  data () {
    return {
      posts: [
        { id: 1, name: 'Hill House', alt: 'A House on a Hill', src: 'https://picsum.photos/id/1/200/300'},
        { id: 2, name: 'Garden House', alt: 'A House and a Garden', src: require('../assets/rome.png')},
        { id: 3, name: 'Urban House', alt: 'A House in the City', src: require('../assets/lake.png')},
      ]
    }
  }
}
</script>

<template>
  <div id="app">
    <heading></heading>
    <section v-if="posts">
       <post class="myclass"
        v-for="post in posts"
        v-bind:post="post"
        v-bind:key="post.id"
      >
    </post>
    </section>
  </div>
</template>
