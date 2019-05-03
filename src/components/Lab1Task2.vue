<template>
    <div>
        <b-jumbotron>
            <template slot="lead">
                Задание: В предыдущем задании сделать так, чтобы после того, как был убран текст из поля для ввода строка приобрела исходный вид. Т.е. содержала текст “Привет незнакомец”
            </template>
        </b-jumbotron>
        <label for="input-formatter">Welcome</label>
        <b-form-input
                id="input-formatter"
                v-model.lazy="textField"
                placeholder="Enter your name"
                aria-describedby="input-formatter-help"
        ></b-form-input>
        <b-form-text id="input-formatter-help">
            We will greet you instantly
        </b-form-text>
        <b-alert variant="success" show>Привет, {{ userName(textField) }}!</b-alert>
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