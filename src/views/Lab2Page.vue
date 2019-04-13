<template>
    <div class="div">
        <b-list-group id="breedsList">
            <b-list-group-item v-for="(value, key) in object" v-if="value.length == 0">{{breed}}</b-list-group-item>
            <b-list-group-item variant="danger" v-else>Danger list group item</b-list-group-item>
        </b-list-group>
    </div>
</template>

<script>

    export default {
        name: "Lab2Page.vue",
        el: '#breedsList',
        data: function () {
            return {
                object: this.getAllBreeds()
            }
        },
        methods: {
            getAllBreeds() {
                fetch('https://dog.ceo/api/breeds/list/all')
                    .then(
                        function (response) {
                            if (response.status !== 200) {
                                console.log('Looks like there was a problem. Status Code: ' +
                                    response.status);
                                return;
                            }
                            response.json().then(function (data) {
                                console.log(data);
                                return data;
                            });
                        }
                    )
                    .catch(function (err) {
                        console.log('Fetch Error :-S', err);
                    });
            }
        }
    }
</script>

<style scoped>

</style>