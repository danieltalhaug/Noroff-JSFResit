<template>
    <div class="column">
        <div class="card-container__background card-container__background--trainer">
            <figure>
                <img class="pokemon-card" :src="image" :alt="name + ' card'">
            </figure>
        </div>
    </div>
</template>
<script>
export default {
    name: 'TrainerHeader',
    props: [
        'name',
        'image'
        ]
}
</script>
<style lang="scss" scoped>
// Import scss variables
@import "./../../scss/variables.scss";
// scss
.card-container {
    &__background {
        margin: $header-margin;
        padding: $header-padding;
        &--trainer {
            background: $trainer-bright;
            background: linear-gradient(0deg, $trainer-dark 0%, $trainer-bright 100%);
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
