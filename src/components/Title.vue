<template>
    <div class="column margin">
        <div>
            <h1 class="title is-1 has-text-info">{{ title }}</h1>
            <h2 class="subtitle is-4">{{ subTitle }}</h2>
        </div>
    </div>
</template>
<script>
// This components is just a simple Title and subtitle. Can be used anywhere and at any
// width. Input needed is title and subTitle
export default {
    name: 'Title',
    props: {
        title: String,
        subTitle: String
    }
}
</script>
<style lang="scss" scoped>
// Import scss variables
@import "./../scss/variables.scss";
// scss
.margin {
    margin: 2rem 0 2rem 0;
}
</style>


