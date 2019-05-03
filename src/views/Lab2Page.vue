<template>
    <div>
        <b-jumbotron>
            <template slot="header">Lab2</template>

            <template slot="lead">
                Задание:​ Используя открытые данные, предоставляемые ресурсом opendota.com, написать приложение для работы со списком профессиональных матчей.
            </template>

            <hr class="my-4">

            <p>
                1. Написать класс OpenDotaClient для доступа API (https://api.opendota.com/api)<br>
                2. Написать Vue-компонент MatchCard, в котором отобразить информацию о матче и командах, принимавших участие.<br>
                3. Реализовать компонент MatchList, в котором:<br>
                ● загружать данные о матчах и командах с помощью OpenDotaClient;<br>
                ● показывать список матчей;<br>
                ● удалять матч при клике на кнопку “Delete”;<br>
                ● показывать простую панель управления: refresh - обновить список матчей<br>
            </p>

            <b-button variant="outline-primary" to="/">Back</b-button>
            <b-button variant="success" href="#" v-on:click="refresh()">Refresh</b-button>
        </b-jumbotron>
        <div id="list">
        <Lab2Task2
                v-for="current_match in this.matches"
                :match="current_match"
        />
        </div>
    </div>
</template>

<script>
    import  Lab2Task2  from '../components/Lab2Task2'
    import { OpenDotaClient } from '../utils/OpenDotaClient.js'

    export default {
        name: "Lab2Page.vue",
        components: {Lab2Task2},
        data: function () {

            return {
                client: new OpenDotaClient(),
                matches:[],
             }
        },
        methods: {
            refresh: function () {
                this.matches = this.client.format.concat();
            }
        },
        created: async function () {
            let teams, matches;
            await this.client.getMatches().then(result => matches = result);
            await this.client.getTeams().then( result => teams = result);
            this.matches = this.client.formatMatches(matches, teams).concat();
        }

    }


</script>

<style scoped>
    .jumbotron{
        text-align: left;
    }
    .jumbotron .btn{
        margin-right: 5px;
    }

    #list{
        display: flex;
        width: 100%;
        flex-wrap:wrap;
        justify-content:center;

    }

</style>