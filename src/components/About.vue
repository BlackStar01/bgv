<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    src: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="about">
        <div class="left">
            <div class="left-content">
                <h1> {{ title }} </h1>
                <br>
                <small> {{ text }} </small>
            </div>
        </div>
        <div class="right">
            <img :src="src" alt="">
        </div>
    </div>
</template>

<style lang="css" scoped>
.about {
    padding: 30px 0px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 70%;
    margin: auto;
}
.left {
    position: relative;
}
.left-content {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
.right {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.right img {
    width: 400px;
    margin: auto;
}
</style>