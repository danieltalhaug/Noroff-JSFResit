<template>
  <div id="app">
    <Navigation logoText="Pokémon" />
    <router-view/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'

export default {
  components: {
    Navigation
  },
   beforeMount: function() {
    // Fire off the get pokemon cards in vuex store
    this.$store.dispatch('getPokemonCards');
  },
}
</script>

<style lang="scss">
// My own variables. Make changes to Bulma variables here.
@import "./scss/variables.scss";
// Import Bulma for use in the entire project
@import "~bulma/bulma.sass";
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
