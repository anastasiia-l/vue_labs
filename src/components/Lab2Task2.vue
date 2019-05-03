<template>
    <div class="wrapper">

        <b-card
                :header="match.league_name"
                :title="'Match #' + match.id"
                style="max-width: 40rem;"
                class="mb-2"
        >
            <b-card-body>
                <b-card-sub-title class="mb-2">Started: {{new Date(match.start_time *1000).toLocaleString()}}</b-card-sub-title>
                <b-card-sub-title class="mb-2">Duration:   {{new Date(match.duration *1000).toLocaleTimeString()}}   </b-card-sub-title>
                <div class="table-responsive-sm">
                <table class="table table-sm table-hover">
                    <thead>
                    <tr>
                        <th scope="col" style="width: 10%"></th>
                        <th scope="col" style="width: 45%">Radiant</th>
                        <th scope="col" style="width: 45%">Dire</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">Team</th>
                        <td v-bind:class="columnBackground(match.radiant_win)">
                            <img :src=match.radiant.logo_url  height="50px">
                            <p>{{ match.radiant.name }}</p>
                        </td>
                        <td v-bind:class="columnBackground(!match.radiant_win)">
                            <img :src=match.dire.logo_url height="50px">
                            <p>{{ match.dire.name }}</p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Rating</th>
                        <td v-bind:class="columnBackground(match.radiant_win)">{{ match.radiant.rating }}</td>
                        <td v-bind:class="columnBackground(!match.radiant_win)">{{ match.dire.rating }}</td>
                    </tr>
                    <tr>
                        <th scope="row">Wins</th>
                        <td v-bind:class="columnBackground(match.radiant_win)">{{ match.radiant.wins }}</td>
                        <td v-bind:class="columnBackground(!match.radiant_win)">{{ match.dire.wins }}</td>
                    </tr>
                    <tr>
                        <th scope="row">Losses</th>
                        <td v-bind:class="columnBackground(match.radiant_win)">{{ match.radiant.losses }}</td>
                        <td v-bind:class="columnBackground(!match.radiant_win)">{{ match.dire.losses }}</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </b-card-body>

            <b-button href="#" variant="danger" v-on:click="remove(match.id)">Delete</b-button>
        </b-card>
    </div>
</template>


<script>
    export default {
        name: "Lab1Task1",
        props:{
           match:{
               type:Object
           }
        },
        data: function () {
            return {
            }
        },
        methods: {
            columnBackground: function(isWin) {
                return isWin ? 'bg-success' : 'bg-danger';
            },
            remove: function(id) {
                let index = this.$parent.$data.matches.findIndex(x => x.id == id );
                this.$parent.$data.matches.splice(index,1)
            }
        }

    }
</script>

<style scoped>
    .table td {
        text-align: center;
    }
    .table th{
        text-align: center;
    }
    .bg-success {
        background-color: rgba(40, 167, 69, 0.15) !important;
    }
    .bg-danger {
        background-color: rgba(220, 53, 69, 0.15) !important;
    }
    h6{
        text-align: left;
    }
    .wrapper{
        margin: 1rem;
        width: 25rem;
        height: 30rem;
    }



</style>