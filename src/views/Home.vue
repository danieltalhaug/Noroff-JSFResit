<template>
  <div class="home">
    <section>
      <Title  v-bind:title="this.title.title"
              v-bind:subTitle="this.title.subTitle"
      />
    </section>
    <main>
      <section class="section">
        <Searchbar  v-on:getSearchWord="setSearchInputValue"
        />
        <p>{{ this.search }}</p>
      </section>
      <section class="flex-direction">
        <div class="" v-for="(value, index) in filterPokemon" :key="index">
          <PokemonCard  v-bind:image="value.imageUrl"
                        v-bind:name="value.name"
          />
        </div>
      </section>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from './../components/Title.vue'
import Searchbar from './../components/Searchbar.vue'
import PokemonCard from './../components/PokemonCard.vue'

export default {
  name: 'home',
  components: {
    Title,
    Searchbar,
    PokemonCard
  },
  data() {
    return {
      search: '',
      pokemonCards: [],
      title: {
        title: 'All pokémon',
        subTitle: 'search for a pokemon',
      }
    }
  },
  computed: {
        filterPokemon: function() {
          return this.pokemonCards.filter(value => {
            return value.name.toLowerCase().includes(this.search.toLowerCase())
            })
        }
  },
  methods: {
    setSearchInputValue (value) {
          this.search = value;
      },
  },
  beforeMount: function() {
    // Fire off the get pokemon cards in vuex store
    // this.$store.dispatch('getPokemonCards');
    // get the pokemonCards array from vuex and set it to cards array on this page
  },
  mounted: function() {
    this.pokemonCards = this.$store.state.pokemonCards.cards;
  }
}
</script>
<style lang="scss" scoped>
// Import scss variables
@import "./../scss/variables.scss";
// scss
.flex-direction {
  display: flex;
  flex-wrap: wrap;
}
</style>

