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
                <h1> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                    </svg> {{ title }} </h1>
                <br>
                <small> {{ text }} </small>
            </div>
        </div>
        <div class="right">
            <img :src="src" alt="">
        </div>
    </div>
</template>

<style scoped>
h1 {
    color: var(--orange);
}

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

@media (max-width:720px) {
    .about {
        padding: 30px 0px;
        display: flex;
        flex-flow: column;
        width: 90%;
        margin: auto;
    }

    .left {
        position: relative;
        order: 2;
        /* May not ba supported by new browsers */
    }

    .left-content {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }

    .right {
        order: 1;
        margin-bottom: 100px;
    }

    .right img {
        width: 200px;
        margin: auto;
    }
}
</style>