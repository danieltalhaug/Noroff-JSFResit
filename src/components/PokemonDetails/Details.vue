<template>
    <div class="container">
        <article v-if="$route.params.supertype === 'Pokémon'" class="column card">
            <table class="table is-striped is-hoverable is-fullwidth">
                <thead class="is-size-4">
                    <th>Card</th>
                    <th>{{ name }}</th>
                </thead>
                <tbody class="is-size-5">
                    <tr>
                        <td>Pokedex Number</td>
                        <td>{{ pokedex }}</td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td>{{ type[0] }}</td>
                    </tr>
                    <tr>
                        <td>Subtype</td>
                        <td>{{ subtype }}</td>
                    </tr>
                    <tr>
                        <td>Hp</td>
                        <td>{{ hp }}</td>
                    </tr>
                    <tr>
                        <td>Rarity</td>
                        <td>{{ rarity }}</td>
                    </tr>
                    <tr>
                        <td>Series</td>
                        <td>{{ series }}</td>
                    </tr>
                    <tr>
                        <td>Attacks</td>
                        <td>
                            <ul v-for="(value, index) in this.attacks" :key="index">
                                <li>{{ value.name }}</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>Attack text</td>
                        <td>
                            <ul v-for="(value, index) in this.attacks" :key="index">
                                <li>{{ value.text }}</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>Attack damage</td>
                        <td>
                            <ul v-for="(value, index) in this.attacks" :key="index">
                                <li>{{ value.damage }}</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>Attack Type</td>
                        <td>
                            <ul v-for="(value, index) in this.attacks" :key="index">
                                <li>{{ value.cost[index] }}</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>Weaknesses</td>
                        <td>
                            <ul v-for="(value, index) in this.weaknesses" :key="index">
                                <li>{{ value }}</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>Artist</td>
                        <td>{{ artist }}</td>
                    </tr>
                </tbody>
            </table>
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
                    <tr>
                        <th>Artist</th>
                        <td>{{ artist }}</td>
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
    </div><!-- Container end -->
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
        'text',
        'hp',
        'pokedex',
        'weaknesses',
        'attacks'
        ],
    created() {
        
    }
}
</script>
<style lang="scss" scoped>
// Import scss variables
@import "./../../scss/variables.scss";
// scss
</style>
