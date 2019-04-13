<template>
    <div>
        <b-list-group v-for="(value, key) in object">
            <b-list-group-item v-if="!value.length">{{ key }}</b-list-group-item>
            <b-list-group-item variant="warning" v-else>{{ key }}
                <b-list-group v-for="subValue in object[key]">
                    <b-list-group-item variant="danger">{{ subValue }}</b-list-group-item>
                </b-list-group>
            </b-list-group-item>

        </b-list-group>
    </div>
</template>

<script>
    export default {
        name: "Lab1Task3",
        data: function () {
            return {
                object: {},
            }
        },
        methods: {},
        created: function () {
            let url = 'https://dog.ceo/api/breeds/list/all';
            fetch(url)
                .then(
                    function (response) {
                        return response.json()
                    }
                )
                .then(berrds => {
                    this.object = berrds.message
                })
                .catch(function (err) {
                    console.log('Fetch Error :-S', err);
                });
        }
    }
</script>

<style scoped>

</style>