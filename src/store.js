import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokemonCards: []
  },
  mutations: {
    getPokemonCards(state) {
      // API and cors fix url
      const pkmnApi = 'https://api.pokemontcg.io/v1/cards?setCode=base1';
      const corsFix = 'https://cors-anywhere.herokuapp.com/';

      fetch(corsFix + pkmnApi)
      .then(function(response) {
        return response.json();
      })
      .then(function(result) {
        // Passing the result to pokemonCards array in vuex state
        state.pokemonCards = result;
      })
    }
  },
  actions: {
    getPokemonCards: context => {
      context.commit('getPokemonCards');
    }
  }
})
