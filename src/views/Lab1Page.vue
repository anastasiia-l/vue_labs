<template>
    <b-card no-body>
        <b-tabs id="tab" pills card vertical>
            <b-tab title="Task 1" active><Task1/></b-tab>
            <b-tab title="Task 2"><Task2/></b-tab>
            <b-tab title="Task 3"><Task3/></b-tab>
            <b-tab title="Task 4"><Task4/></b-tab>
            <b-tab title="Task 5"><Task5/></b-tab>
        </b-tabs>
    </b-card>

</template>

<script>
    import Task1 from '../components/Lab1Task1'
    import Task2 from '../components/Lab1Task2'
    import Task3 from '../components/Lab1Task3'
    import Task4 from '../components/Lab1Task4'
    import Task5 from '../components/Lab1Task5'

    export default {
        name: "Lab1Page",
        components: {Task1, Task2, Task3, Task4, Task5}
    }
</script>
<style scoped>
    #tab {

    }

</style>