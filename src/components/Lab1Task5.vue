<template>
    <div>
        <b-button variant="danger" v-on:click="current.push(randomProperty(breeds))">Button</b-button>
      <b-button variant="danger" v-on:click="current.splice(randomArrayItem(current), 1)">Button</b-button>
        <b-button variant="danger" v-on:click="current.sort(compareRandom)">Button</b-button>
        <b-card
                no-body
                style="max-width: 20rem;"
                img-src="https://placekitten.com/380/200"
                img-alt="Image"
                img-top
        >
            <h4 slot="header">Hello World</h4>

            <b-card-body >
                <b-card-title >{{ current }}</b-card-title>
            </b-card-body>
            <b-list-group v-for="breed in current" flush>
                <b-list-group-item >{{breed}}</b-list-group-item>
            </b-list-group>
        </b-card>
    </div>
</template>

<script>
    export default {
        name: "Lab1Task4",
        data: function () {
            return {
                breeds: {},
                current: [],
            }
        },

        created() {
            let url = 'https://dog.ceo/api/breeds/list/all';
            fetch(url).then(function(response) { return response.json(); }).then(breeds => {
                console.log(breeds.message);
                this.breeds = breeds.message;
                return breeds.message;
            })
        },
        filters: {

        },
        methods: {
            randomProperty: function (obj) {
                return Object.keys(obj)[Object.keys(obj).length * Math.random() << 0];
            },
            randomArrayItem: function (arr) {
                return Math.floor(Math.random() * arr.length);
            },
            compareRandom: function(a, b) {
                return Math.random() - 0.5;
            }
        }
    }
</script>

<style scoped>

</style>