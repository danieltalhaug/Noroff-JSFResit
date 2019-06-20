<template>
    <main>
        <section>
            <Title  v-bind:title="$route.params.name"
                    v-bind:subTitle="'Pokedex number: ' + $route.params.pokedex" 
            />
        </section>
        <section class="columns">
            <PokemonHeader  v-bind:type="$route.params.type"
                            v-bind:image="$route.params.image"
                            v-bind:name="$route.params.name"
            />
        </section>
    </main>
</template>
<script>
// Imports
import Title from './../components/Title.vue'
import PokemonHeader from './../components/PokemonHeader.vue'
export default {
    name: 'PokemonDetails',
    components: {
        Title,
        PokemonHeader
    },
}
</script>
<style lang="scss" scoped>
// Import scss variables
@import "./../scss/variables.scss";
// scss

</style>
