<template>
  <div class="home">
    <section>
      <Title  v-bind:title="this.title.title"
              v-bind:subTitle="this.title.subTitle"
      />
    </section>
    <main>
      <section>
        <Searchbar  v-on:getSearchWord="setSearchInputValue"
                    v-bind:placeholder="search.searchbarPlaceholder"
        />
      </section>
      <section v-if="filterPokemon.length" class="flex-direction cards-container">
        <div class="" v-for="(value, index) in filterPokemon" :key="index">
          <router-link  :to="{
                        name: 'pokemondetails',
                        params: {
                          id: value.id,
                          name: value.name,
                          image: value.imageUrl,
                          supertype: value.supertype,
                          subtype: value.subtype,
                          number: value.number,
                          artist: value.artist,
                          rarity: value.rarity,
                          pokedex: value.nationalPokedexNumber,
                          type: value.types,
                          series: value.series,
                          hp: value.hp,
                          text: value.text,
                          attacks: value.attacks,
                          weaknesses: value.weaknesses
            }}">
            <PokemonCard  v-bind:image="value.imageUrl"
                          v-bind:name="value.name"
            />
          </router-link>
        </div>
      </section>
      <section v-else>
        <h4 class="title is-4">Sorry, could not find that one.</h4>
        <h5 class="subtitle is-6">Please try again</h5>
      </section>
    </main>
  </div>
</template>

<script>
// imports
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
      search: {
        input: "",
        searchbarPlaceholder: 'Pikachu'
      },
      pokemonCards: [],
      title: {
        title: 'All Pokémon',
        subTitle: 'Type in a Pokémon name below',
      }
    }
  },
  computed: {
        filterPokemon: function() {
          return this.pokemonCards.filter(value => {
            return value.name.toLowerCase().includes(this.search.input.toLowerCase())
            })
        }
  },
  methods: {
    setSearchInputValue (value) {
          this.search.input = value;
      },
  },
  created: function() {
    // Fire off the get pokemon cards in vuex store
    this.$store.dispatch('getPokemonCards');
    // get the pokemonCards array from vuex and set it to cards array on this page
  },
  beforeMount: function() {
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
.cards-container {
  padding: 2rem 0 0 0;
}
</style>

