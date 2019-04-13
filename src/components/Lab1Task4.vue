<template>
    <div>
        <b-card
                no-body
                style="max-width: 20rem;"
                img-src="https://placekitten.com/380/200"
                img-alt="Image"
                img-top
        >
            <h4 slot="header">Hello World</h4>

            <b-card-body>
                <b-card-title>Card Title</b-card-title>
            </b-card-body>
            <li>

            </li>
            <b-list-group  v-for="item in breeds" flush>
                <b-list-group-item>{{ item }}</b-list-group-item>
            </b-list-group>
        </b-card>
    </div>
</template>

<script>
    export default {
        name: "Lab1Task4",
        data: function () {
            return {
                breeds: this.methods.uploadBreeds(),
            }
        },
        methods: {
            uploadBreeds: function () {
                let url = 'https://dog.ceo/api/breeds/list/all';
                let list = []
                fetch(url) // Call the fetch function passing the url of the API as a parameter
                    .then(function(data) {
                        console.log(data);
                        list = data
                    })
                    .catch(function() {
                        // This is where you run code if the server returns any errors
                    });
                return list
            }
        }
    }
</script>

<style scoped>

</style>