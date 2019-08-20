<template>
  <div class="example">
    <h1>{{ title }}</h1>
  <!--Using named slot with default value-->
    <slot name="slogan">Default Message</slot>

  </div>
</template>

<script>
export default {
  name: 'example',
  data () {
    return {
      title: 'design firm'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
