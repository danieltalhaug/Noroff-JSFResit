<template>
    <div class="columns">
        <div class="column is-offset-4 is-one-third">
            <div class="field has-addons">
                <div class="control searchbar--fullwidth">
                    <input list="pokemonNames" v-model="searchWord" v-on:keyup="sendSearchWord" class="input is-info is-medium is-rounded" type="text" :placeholder="placeholder">
                    <datalist v-if="searchWord" id="pokemonNames">
                        <option v-for="(value, index) in pokemonCards" :key="index" :value="value.name"></option>
                    </datalist>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Searchbar',
    props: [
        'placeholder'
    ],
    data() {
        return {
            searchWord: '',
            pokemonCards: [],
        }
    },
    methods: {
        sendSearchWord: function() {
            this.$emit('getSearchWord', this.searchWord);
        },
    },
    created: function() {
    // get the pokemonCards array from vuex and set it to cards array on this page
        this.pokemonCards = this.$store.state.pokemonCards.cards;
  },
}
</script>
<style lang="scss" scoped>
.searchbar--fullwidth {
    width: 100% !important;
}
[list]::-webkit-calendar-picker-indicator {
    display: none;
}
</style>
