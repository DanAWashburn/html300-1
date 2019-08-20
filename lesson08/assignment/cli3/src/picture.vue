

<script>
export default {
name: 'picture',
props: ['picture'],

  }

</script>


<template>

<div id="images">
  <article class="picture">
    <h1 class="picture__alt">{{ picture.alt }} </h1>
    <h2 class="picture__location">{{ picture.location}} </h2>
  </article>

</div>
</template>
