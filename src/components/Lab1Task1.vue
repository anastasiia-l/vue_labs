<template>
    <div>
        <label for="input-formatter">Welcome</label>
        <b-form-input
                id="input-formatter"
                v-model.lazy="textField"
                @input="userName=textField"
                placeholder="Enter your name"
                aria-describedby="input-formatter-help"
        ></b-form-input>
        <b-form-text id="input-formatter-help">
            We will greet you instantly
        </b-form-text>
        <b-alert variant="success" show>Привет, {{ userName }}!</b-alert>
    </div>
</template>

<script>
    export default {
        name: "Lab1Task1",
        data: function () {
            return {
                userName: "незнакомец",
                textField: ""
            }
        },

        methods: {

        },
    }
</script>

<style scoped>

</style>