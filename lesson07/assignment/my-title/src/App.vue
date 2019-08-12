<template>
  <div id="app">
    <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
    </div>
    <router-view/>
<img src="./assets/logo.png">

<div class="container">
<h1>{{ title }}</h1>

</div>
<div class="container">
  <!--Creates navbar and uses the light colorscheme-->
  <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
    <!--Makes list items inline-->
    <ul class="list-inline">
      <!--Tooltips pop up messages in different directions when links hovered over-->
      <li class="list-inline-item"><a href="index.html" data-toggle="tooltip" data-placement="left" title="Sends you back to the Home page.">Home</a></li>
      <li class="list-inline-item"><a href="images.html" data-toggle="tooltip" data-placement="top" title="A smattering of images.">Images</a></li>
      <li class="list-inline-item"><a href="accordion.html" data-toggle="tooltip" data-placement="bottom" title="Not the musical kind.">Accordion</a></li>
      <li class="list-inline-item"><a href="grid.html" data-toggle="tooltip" data-placement="right" title="Gird yourself. It's grid.">Grid</a></li>
    </ul>
  </nav>
</div>
<input type="text" v-on:input="changeTitle">
</div>

</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title: 'A Demo Bootstrap Website',
  }
},
}


</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
