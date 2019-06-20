<template>
    <div class="container">
        <article v-if="$route.params.supertype === 'Pokémon'" class="column">
            <h1>Pokemon details</h1>
        </article> <!-- Pokemon card end -->
        <article v-else-if="$route.params.supertype === 'Trainer'" class="column card">
            <table class="table is-striped is-hoverable is-fullwidth">
                <thead class="is-size-4">
                    <th>Card</th>
                    <th>{{ name }}</th>
                </thead>
                <tbody class="is-size-5">
                    <tr>
                        <th>Supertype</th>
                        <td>{{ supertype }}</td>
                    </tr>
                    <tr>
                        <th>Number</th>
                        <td>{{ number }}</td>
                    </tr>
                    <tr>
                        <th>Rarity</th>
                        <td>{{ rarity }}</td>
                    </tr>
                    <tr>
                        <th>Series</th>
                        <td>{{ series }}</td>
                    </tr>
                    <tr>
                        <th>Artist</th>
                        <td>{{ artist }}</td>
                    </tr>
                    <tr>
                        <th>Info</th>
                        <td>{{ text[0] }}</td>
                    </tr>
                </tbody>
            </table>
        </article> <!-- Trainer card end -->
        <article v-else class="column card">
            <table class="table is-striped is-hoverable is-fullwidth">
                <thead class="is-size-4">
                    <th>Card</th>
                    <th>{{ name }}</th>
                </thead>
                <tbody class="is-size-5">
                    <tr>
                        <th>Supertype</th>
                        <td>{{ supertype }}</td>
                    </tr>
                    <tr>
                        <th>Subtype</th>
                        <td>{{ subtype }}</td>
                    </tr>
                    <tr>
                        <th>Number</th>
                        <td>{{ number }}</td>
                    </tr>
                    <tr>
                        <th>Rarity</th>
                        <td>{{ rarity }}</td>
                    </tr>
                    <tr>
                        <th>Series</th>
                        <td>{{ series }}</td>
                    </tr>
                    <tr>
                        <th>Artist</th>
                        <td>{{ artist }}</td>
                    </tr>
                </tbody>
            </table>
        </article> <!-- Energy card end -->
    </div>
</template>
<script>
export default {
    name: 'Details',
    props: [
        'name',
        'type',
        'supertype',
        'subtype',
        'number',
        'artist',
        'rarity',
        'series',
        'text'
        ]
}
</script>
<style lang="scss" scoped>
// Import scss variables
@import "./../../scss/variables.scss";
// scss
</style>
