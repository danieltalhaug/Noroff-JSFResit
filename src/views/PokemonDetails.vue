<template>
    <main>
        <section>
            <Title  :title="$route.params.name"
            />
        </section>
        <section v-if="$route.params.supertype === 'Pokémon'" class="columns">
            <PokemonHeader  :type="$route.params.type"
                            :image="$route.params.image"
                            :name="$route.params.name"
            />
        </section>
        <section v-else-if="$route.params.supertype === 'Trainer'" class="columns">
            <TrainerHeader  :name="$route.params.name"
                            :image="$route.params.image"
            />
        </section>
        <section v-else class="columns">
            <EnergyHeader   :name="$route.params.name"
                            :image="$route.params.image"
            />
        </section>
    </main>
</template>
<script>
// Imports
import Title from './../components/Title.vue'
import PokemonHeader from './../components/Pokemon/PokemonHeader.vue'
import TrainerHeader from './../components/Trainer/TrainerHeader.vue'
import EnergyHeader from './../components/Energy/EnergyHeader.vue'

export default {
    name: 'PokemonDetails',
    components: {
        Title,
        PokemonHeader,
        TrainerHeader,
        EnergyHeader
    },
}
</script>
<style lang="scss" scoped>
// Import scss variables
@import "./../scss/variables.scss";
// scss

</style>
