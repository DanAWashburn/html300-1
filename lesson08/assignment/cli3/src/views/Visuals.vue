<script>
export default {
  name: 'visuals',
  props: ['visuals'],
}

</script>

<template>
 	<article class="visual">
    <h1 class="visual__name">{{ visual.name}}</h1>
		<h2 class="visual__alt">{{ visual.alt }}</h2>
		<h3 class="visual__location">{{ visual.location }}</h3>
		<button v-on:click="visual.likes++" class="visual__likes">+1 | {{ visual.likes }}</button>
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
.visual {
	padding: 2rem;
	margin: 1.5rem auto;
	max-width: 900px;
	border: 1px solid #2c3e50;
}
</style>
