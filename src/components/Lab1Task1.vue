<template>
    <div>
        <label for="input-formatter">Text input with formatter (on input)</label>
        <b-form-input
                id="input-formatter"
                v-model.lazy="textField"
                placeholder="Enter your name"
                aria-describedby="input-formatter-help"
        ></b-form-input>
        <b-form-text id="input-formatter-help">
            We will convert your name to lowercase instantly
        </b-form-text>
        <div>Привет, {{ userName(textField) }}!</div>
    </div>
</template>

<script>
    export default {
        name: "Lab1Task1",
        data: function () {
            return {
                textField: "",
            }
        },

        methods: {

        },
        computed:{
            userName: (app)=> (user)=> {
                return !user ? 'незнакомец' : user
            }
        }
    }
</script>

<style scoped>

</style>