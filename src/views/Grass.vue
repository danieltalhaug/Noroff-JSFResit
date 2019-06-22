<template>
    <div>
        <section>
            <Title  v-bind:title="this.title.title"
                    v-bind:subTitle="this.title.subTitle"
            />
        </section>
        <section class="flex-direction cards-container">
            <div class="" v-for="(value, index) in filterGrassPokemon" :key="index">
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
    </div>
</template>
<script>
import Title from './../components/Title.vue'
import PokemonCard from './../components/PokemonCard.vue'

export default {
    name: 'Grass',
    components: {
        Title,
        PokemonCard
    },
    data() {
        return {
            pokemonCards: [],
            title: {
                title: 'Grass Pokémon',
                subTitle: 'View all grass type pokemon'
            }
        }
    },
    computed: {
        filterGrassPokemon: function() {
          return this.pokemonCards.filter(value => {
            return value.types && value.types.includes("Grass");
          });
        }
  },
    created: function() {
    // get the pokemonCards array from vuex and set it to cards array on this page
    this.pokemonCards = this.$store.state.pokemonCards.cards;
  },
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