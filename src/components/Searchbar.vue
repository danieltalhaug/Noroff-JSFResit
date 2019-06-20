<template>
    <div class="columns">
        <div class="column is-offset-4 is-one-third">
            <div class="field has-addons">
                <div class="control searchbar--fullwidth">
                    <input v-model="searchWord" v-on:keyup="sendSearchWord" class="input is-info is-medium is-rounded" type="text" :placeholder="placeholder">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Searchbar',
    props: [
        'placeholder'
    ],
    data() {
        return {
            searchWord: ''
        }
    },
    methods: {
        sendSearchWord: function() {
            this.$emit('getSearchWord', this.searchWord);
        },
    }
}
</script>
<style lang="scss" scoped>

.searchbar--fullwidth {
    width: 100% !important;
}
</style>
