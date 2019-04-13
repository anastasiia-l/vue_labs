<template>
    <div>
        <b-button variant="danger" v-on:click="current=randomProperty(breedsWithSubbreeds)">Button</b-button>
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
            <b-list-group v-for="breed in breedsWithSubbreeds[current]" flush>
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
                breedsWithSubbreeds: {},
                current: '',
            }
        },

        created() {
            let url = 'https://dog.ceo/api/breeds/list/all';
            fetch(url).then(function(response) { return response.json(); }).then(breeds => {
                console.log(breeds.message);
                this.breeds = breeds.message;
                return breeds.message;
            }).then(breeds => {
                for (var subbreeds in breeds) {
                    if(breeds[subbreeds].length){
                        this.breedsWithSubbreeds[subbreeds] = breeds[subbreeds];
                    }
                }
                console.log(this.breeds);
                console.log(this.breedsWithSubbreeds);
            });
        },
        filters: {

        },
        methods: {
            randomProperty: function (obj) {
                return Object.keys(obj)[ Object.keys(obj).length * Math.random() << 0];
            }
        }
    }
</script>

<style scoped>

</style>