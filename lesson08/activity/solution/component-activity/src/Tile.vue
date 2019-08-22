<script>
export default {
  name: 'tile',
  props: ['tile'],
}

</script>

<template>

    <article class="tile">
      <h3 class="tile__title">{{ tile.title }}</h3>
      <h6 class="tile__author">{{ tile.author }}</h6>
      <p class="tile__excerpt">{{ tile.excerpt }}</p>
      <button v-on:click="tile.likes++" class="tile__likes">+1 | {{ tile.likes }}</button>
      </article>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.post {
	padding: 2rem;
	margin: 1.5rem auto;
	max-width: 900px;
	border: 1px solid #2c3e50;
}
</style>
