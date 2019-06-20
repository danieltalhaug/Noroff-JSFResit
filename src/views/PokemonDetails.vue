<template>
    <main>
        <section>
            <Title  :title="$route.params.name"
            />
        </section>
        <section v-if="$route.params.supertype === 'Pokémon'">
            <div class="columns">
                <PokemonHeader  :type="$route.params.type"
                                :image="$route.params.image"
                                :name="$route.params.name"
                />
            </div>
            <div class="columns">
                <Details        :type="$route.params.type"
                                :image="$route.params.image"
                                :name="$route.params.name"
                />
            </div>
        </section>
        <section v-else-if="$route.params.supertype === 'Trainer'">
            <div class="columns">
                <TrainerHeader  :name="$route.params.name"
                                :image="$route.params.image"
                />
            </div>
            <div class="columns">
                <Details        :name="$route.params.name"
                                :supertype="$route.params.supertype"
                                :number="$route.params.number"
                                :artist="$route.params.artist"
                                :rarity="$route.params.rarity"
                                :series="$route.params.series"
                                :text="$route.params.text"
                
                />
            </div>
        </section>
        <section v-else>
            <div class="columns">
                <EnergyHeader   :name="$route.params.name"
                                :image="$route.params.image"
                />
            </div>
            <div class="columns">
                <Details        :name="$route.params.name"
                                :supertype="$route.params.supertype"
                                :subtype="$route.params.subtype"
                                :number="$route.params.number"
                                :artist="$route.params.artist"
                                :rarity="$route.params.rarity"
                                :series="$route.params.series"
                />
            </div>
        </section>
    </main>
</template>
<script>
// Imports
import Title from './../components/Title.vue'
import PokemonHeader from './../components/PokemonDetails/PokemonHeader.vue'
import TrainerHeader from './../components/PokemonDetails/TrainerHeader.vue'
import EnergyHeader from './../components/PokemonDetails/EnergyHeader.vue'
import Details from './../components/PokemonDetails/Details.vue'

export default {
    name: 'PokemonDetails',
    components: {
        Title,
        PokemonHeader,
        TrainerHeader,
        EnergyHeader,
        Details
    },
}
</script>
<style lang="scss" scoped>
// Import scss variables
@import "./../scss/variables.scss";
// scss

</style>
