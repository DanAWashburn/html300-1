


<script>
//Trying to use props. Still struggling with inserting image as an image and getting the props and validation right
export default {
  name: 'post',
  props: {
    post: {
      type: Array,
      required: true,
      default: 'Sorry. Out of Order!'
    }
  }
}

</script>

<template>

 	<article class="post">
    <h3 class="post__name">{{ post.name }}</h3>
		<h2 class="post__alt">{{ post.alt }}</h2>
		<img class="post__src">{{ post.src }} </img>

    </article>
</template>

<style lang="scss">

</style>
