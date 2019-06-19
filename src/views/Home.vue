<template>
  <div class="home">
    <section>
      <Title  v-bind:title="this.title.title"
              v-bind:subTitle="this.title.subTitle"
      />
    </section>
    <main>
      <section>
        
      </section>
      <section class="flex-direction">
        <div class="" v-for="(value, index) in cards.cards" :key="index">
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
import PokemonCard from './../components/PokemonCard.vue'

export default {
  name: 'home',
  components: {
    Title,
    PokemonCard
  },
  data() {
    return {
      cards: [],
      title: {
        title: 'All pokemon',
        subTitle: 'search for a pokemon',
      }
    }
  },
  beforeMount: function() {
    // Fire off the get pokemon cards in vuex store
    this.$store.dispatch('getPokemonCards');
    // get the pokemonCards array from vuex and set it to cards array on this page
  },
  mounted: function() {
    this.cards = this.$store.state.pokemonCards;
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

