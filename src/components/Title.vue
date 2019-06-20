<template>
    <div class="column">
        <div>
            <h2 class="title is-2 has-text-info">{{ title }}</h2>
            <h3 class="subtitle is-4">{{ subTitle }}</h3>
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

