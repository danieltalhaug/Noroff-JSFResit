<template>
    <nav class="navbar is-spaced is-danger" role="navigation" aria-label="main navigation">
        <div class="container">
        <div class="navbar-brand">
            <router-link class="navbar-item" to="/">
                <h1 class="title is-3 has-text-white">{{ logoText }}</h1>
            </router-link>

            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-end">
                <router-link class="navbar-item" to="/">Home</router-link>
                <router-link class="navbar-item" to="/Grass">Grass</router-link>
                <router-link class="navbar-item" to="/Contact">Contact</router-link>
            </div>
        </div>
        </div>
    </nav>
</template>
<script>
export default {
    name: 'Navigation',
    props: {
    logoText: String
  }
}
</script>

<style lang="scss" scoped>

</style>
