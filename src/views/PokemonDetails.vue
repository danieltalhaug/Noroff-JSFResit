<template>
    <img :src="$route.params.image" :alt="$route.params.name + ' card'">
</template>
<script>
export default {
    name: 'PokemonDetails',
}
</script>
<style lang="scss" scoped>

</style>
