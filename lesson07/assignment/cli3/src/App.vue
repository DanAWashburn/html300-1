<template>
  <div id="app">
    <div class="container">
    <h1>{{ title }}</h1>
    </div>
    <div class="container">
      <!--Creates navbar and uses the light colorscheme-->
      <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
        <!--Makes list items inline-->
          <!--Tooltips pop up messages in different directions when links hovered over-->
          <div id="nav">
              <ul class="list-inline">
            <li class="list-inline-item"><router-link to="/" data-toggle="tooltip" data-placement="left" title="Sends you back to the Home page.">Home</router-link> |</li>
            <li class="list-inline-item"><router-link to="/images" data-toggle="tooltip" data-placement="top" title="A smattering of images.">Images</router-link> |</li>
            <li class="list-inline-item"><router-link to="/accordion" data-toggle="tooltip" data-placement="bottom" title="Not the musical kind.">Accordion</router-link> |</li>
            <li class="list-inline-item"><router-link to="/grid" data-toggle="tooltip" data-placement="right" title="Gird yourself. It's grid.">Grid</router-link></li>
          </ul>
          </div>
      </nav>
    </div>
    <router-view/>
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
