<template>
    <div>
        <b-jumbotron>
            <template slot="lead">
                Задание: Сделать кнопку, по нажатию на которую будет выводится случайная порода, содержащая подпороды и её подпороды с помощью api, которое предоставляет данный сайт
            </template>
        </b-jumbotron>
        <b-button variant="danger" v-on:click="current.name=randomProperty(breedsWithSubbreeds);
        current.image = imageURL()">Random breed</b-button>
        <b-card bg-variant="light"
                no-body
                style="max-width: 20rem; margin: 1rem auto"
                :img-src=current.image
                img-alt="Image"
                img-top

        >
            <h4 slot="header">Breed: <b>{{ current.name }}</b></h4>

            <b-card-body >
                <b-card-text><b>Sub-breeds:</b></b-card-text>
            </b-card-body>
            <b-list-group v-for="breed in breedsWithSubbreeds[current.name]" flush>
                <b-list-group-item>{{breed}}</b-list-group-item>
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
                current: {
                    name: '',
                    image: ''
                },
            }
        },

        created() {
            let url = 'https://dog.ceo/api/breeds/list/all';
            fetch(url).then(function (response) {
                return response.json();
            }).then(breeds => {
                console.log(breeds.message);
                this.breeds = breeds.message;
                return breeds.message;
            }).then(breeds => {
                for (var subbreeds in breeds) {
                    if (breeds[subbreeds].length) {
                        this.breedsWithSubbreeds[subbreeds] = breeds[subbreeds];
                    }
                }
                console.log(this.breeds);
                console.log(this.breedsWithSubbreeds);
            });
        },
        methods: {
            randomProperty: function (obj) {
                return Object.keys(obj)[Object.keys(obj).length * Math.random() << 0];
            },
            imageURL: function () {
                let url = this.current ? 'https://dog.ceo/api/breed/' + this.current.name + '/images/random' : 'https://dog.ceo/api/breeds/image/random';
                fetch(url).then(function (response) {
                    return response.json();
                }).then(breeds => {
                    console.log(breeds.message);
                    this.current.image = breeds.message;
                });
            }
        }
    }


</script>

<style scoped>

</style>