<template>
    <figure class="">
        <img class="pokemon-card" :src="image" :alt="name + 'pokemon card'">
    </figure>
</template>
<script>
export default {
    name: 'PokemonCard',
    props: ['image','name']
}
</script>
<style lang="scss" scoped>
// Import scss variables
@import "./../scss/variables.scss";
// scss
.pokemon-card {
    border-radius: $border-radius-small;
    box-shadow: 1px 5px 5px rgba(0,0,0,.4);
}
figure {
    margin: 1rem;
}
</style>
