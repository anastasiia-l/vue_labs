<template>
    <div>
        <b-jumbotron>
            <template slot="header">Lab2</template>

            <template slot="lead">
                This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
                featured content or information.
            </template>

            <hr class="my-4">

            <p>
                It uses utility classes for typography and spacing to space content out within the larger
                container.
            </p>

            <b-button variant="outline-primary" href="#">Back</b-button>
            <b-button variant="success" href="#">Refresh</b-button>
        </b-jumbotron>
        <div id="list">
        <Lab2Task2
                v-for="current_match in this.client.format"
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
                matches: {},
                teams: {},
                format:[],
                perPage: 3,
                currentPage: 1,

            }
        },
        methods: {},
        created: async function () {

            await this.client.getMatches().then(result => this.matches = result);
            await this.client.getTeams().then( result => this.teams = result);
            this.format = this.client.formatMatches(this.matches, this.teams);

        },
        computed: {
            rows() {
                return this.format.length
            }
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