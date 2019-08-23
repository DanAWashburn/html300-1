<script>
import Post from './picture.vue';
// import { lower } from "../components/filters";
//move picture.vue to components and change this to /components/picture.vue
export default {
  name: "home",//check on this name
  components: {
    Post
  },

  // filters: {
  //   lower
  // },
  data () {
    return {
      posts: [

            {
              id: 1,
              name: 'Hill House',
              alt: 'A House on a Hill',
              copy: 'TTTTTTTTTTTTTTTTTTTHHHHHHHHHHHHHHHHRRRRRRRRRRRRR',
              src: require('../assets/ray.png')
            },
            {
              id: 2,
              name: 'Garden House',
              alt: 'A House and a Garden',
              copy: 'NNNNNNNNNNNNNNNNNNNNNNNNAAAAAAAAAAAAAAAA',
              src: require('../assets/rome.png')
            },
            { id: 3,
              name: 'Urban House',
              alt: 'A House in the City',
              copy: 'MMMMMMMMMMMMMMMMMEEEEEEEEEEEE',
              src: require('../assets/lake.png')
            }


      ]
    };
  }
};

</script>

<template>
  <div id="app">
    <!-- <h1>TESTING THIS IS ALL CAPS {{toLowerCase}}</h1> -->
    <heading></heading>
    <!--Bryce has `class="d-flex justify-content-between"`--><section v-if="posts" >
       <post class="myclass"
        v-for="post in posts"
        :post="post"
        :key="post.id"
      >
    </post>
    </section>
  </div>
</template>

<style scoped lang="scss">

.myclass {
  height: 600px;
  width: 800px;
  border: 10px solid black;
  margin: 25px;
}
</style>
