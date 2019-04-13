<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>

    export default {
        name: 'app',
        components: {
        },

        watch: {
        },
        data() {
            return {

            }
        }
    }
</script>

<style>

    html,
    body {
        height: 100%;
    }

    #app {
        text-align: center;
        height: inherit;
    }
</style>
