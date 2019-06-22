<template>
    <footer class="footer">
        <div class="content">
            <p>
                <a href="https://www.pokemon.com/us/">© 2019 Pokémon. TM, ® Nintendo.</a>
            </p>
            <p>
                This project was created for a school project and is in no way affiliated with Pokémon or Nintendo. 
            </p>
        </div>
    </footer>
</template>
<script>
export default {
    name: 'Footer'
}
</script>
<style lang="scss" scoped>
// Import scss variables
@import "./../scss/variables.scss";
// scss
.footer {
    margin: 5rem 0 0 0;
}
</style>