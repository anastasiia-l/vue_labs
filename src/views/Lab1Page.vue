<template>
    <b-card no-body>
        <b-tabs id="tab" pills card>
            <b-tab title="Tab 1" active><Task1/></b-tab>
            <b-tab title="Tab 2"><b-card-text>Tab Contents 2</b-card-text></b-tab>
        </b-tabs>
    </b-card>

</template>

<script>
    import Task1 from '../components/Lab1Task1'

    export default {
        name: "Lab1Page",
        components: {Task1}
    }
</script>
<style scoped>
    #tab {
        min-width: ;
        max-width: 50rem;
        margin: auto;
    }

</style>