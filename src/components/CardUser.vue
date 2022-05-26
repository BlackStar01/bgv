<script setup>
defineProps({
    job : {
        type: String,
        required: true
    },
    name : {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="card">
        <div class="img">
            <img src="../assets/person.jpg" alt="user">
        </div>
        <h3> {{job}} </h3>
        <small> {{name}} </small>
    </div>
</template>

<style lang="css" scoped>
    .card
    {
        padding: 20px;
    }
    img {
        width: 120px;
        height: 120px;
        border: 1px solid transparent;
        border-radius: 50%;
    }
</style>