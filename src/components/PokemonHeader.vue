<template>
<!--    This component creates a header/hero with a pokemon card displayed in the middle
        It only needs three props, type, image and name. 
        Background gradient is decided by the Type
 -->
    <div v-if="type[0] === 'Lightning'" class="column">
        <div class="card-container__background card-container__background--lightning">
            <figure>
                <img class="pokemon-card" :src="image" :alt="name + ' card'">
            </figure>
        </div>
    </div>
    <div v-else-if="type[0] === 'Fire'" class="column">
        <div class="card-container__background card-container__background--fire">
            <figure>
                <img class="pokemon-card" :src="image" :alt="name + ' card'">
            </figure>
        </div>
    </div>
    <div v-else-if="type[0] === 'Grass'" class="column">
        <div class="card-container__background card-container__background--grass">
            <figure>
                <img class="pokemon-card" :src="image" :alt="name + ' card'">
            </figure>
        </div>
    </div>
    <div v-else-if="type[0] === 'Water'" class="column">
        <div class="card-container__background card-container__background--water">
            <figure>
                <img class="pokemon-card" :src="image" :alt="name + ' card'">
            </figure>
        </div>
    </div>
    <div v-else-if="type[0] === 'Psychic'" class="column">
        <div class="card-container__background card-container__background--psychic">
            <figure>
                <img class="pokemon-card" :src="image" :alt="name + ' card'">
            </figure>
        </div>
    </div>
    <div v-else-if="type[0] === 'Fighting'" class="column">
        <div class="card-container__background card-container__background--fighting">
            <figure>
                <img class="pokemon-card" :src="image" :alt="name + ' card'">
            </figure>
        </div>
    </div>
    <div v-else-if="type[0] === 'Colorless'" class="column">
        <div class="card-container__background card-container__background--normal">
            <figure>
                <img class="pokemon-card" :src="image" :alt="name + ' card'">
            </figure>
        </div>
    </div>
</template>
<script>
export default {
    name: 'PokemonHeader',
    props: [
        'type',
        'image',
        'name'
    ]
}
</script>
<style lang="scss" scoped>
// Import scss variables
@import "./../scss/variables.scss";
// scss
.card-container {
    &__background {
        margin: 1rem 0 1rem 0;
        padding: 5rem 0 5rem 0;
        &--lightning {
            background: $lightning-bright;
            background: radial-gradient(circle, $lightning-bright 0%, $lightning-dark 100%);
        }
        &--fire {
            background: $fire-bright;
            background: radial-gradient(circle, $fire-bright 0%, $fire-dark 100%);
        }
        &--grass {
            background: $grass-bright;
            background: radial-gradient(circle, $grass-bright 0%, $grass-dark 100%);
        }
        &--water {
            background: $water-bright;
            background: radial-gradient(circle, $water-bright 0%, $water-dark 100%);
        }
        &--psychic {
            background: $psychic-bright;
            background: radial-gradient(circle, $psychic-bright 0%, $psychic-dark 100%);
        }
        &--fighting {
            background: $fighting-bright;
            background: radial-gradient(circle, $fighting-bright 0%, $fighting-dark 100%);
        }
        &--normal {
            background: $normal-bright;
            background: radial-gradient(circle, $normal-bright 0%, $normal-dark 100%);
        }
    }
}
.pokemon-card {
    height: 100%;
    width: auto;
    border-radius: $border-radius-small;
    box-shadow: 1px 10px 15px rgba(0,0,0,.2);
}
</style>
