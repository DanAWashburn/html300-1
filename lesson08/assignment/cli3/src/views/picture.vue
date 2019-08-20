

<script>
export default {
name: 'Picture',
props: ['picture'],

  }

</script>


<template>

<div id="app">
  <article class="picture">
    <h1 class="picture__alt">{{ picture.alt }} </h1>
    <h2 class="picture__location">{{ picture.location}} </h2>
  </article>

</div>
</template>
