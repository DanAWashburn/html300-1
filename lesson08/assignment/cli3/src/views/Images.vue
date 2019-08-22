<script>
import Post from './picture.vue';
//move picture.vue to components and change this to /components/picture.vue
export default {
  name: "home",//check on this name
  components: {
    Post
  },
  data () {
    return {
      posts: [

            {
              id: 1,
              name: 'Hill House',
              alt: 'A House on a Hill',
              src: require('../assets/ray.png')
            },
            {
              id: 2,
              name: 'Garden House',
              alt: 'A House and a Garden',
              src: require('../assets/rome.png')
            },
            { id: 3,
              name: 'Urban House',
              alt: 'A House in the City',
              src: require('../assets/lake.png')
            }


      ]
    };
  }
};

</script>

<template>
  <div id="app">
    <heading></heading>
    <section v-if="posts">
       <post class="myclass"
        v-for="post in posts"
        :post="post"
        :key="post.id"
      >
    </post>
    </section>
  </div>
</template>
