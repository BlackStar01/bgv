<script setup>

defineProps({
    btn: String,
    to: String
})

</script>

<template>
    <section>
        <div>
            <h2 class="">
                <slot></slot>
            </h2>
            <router-link :to="to">
                <button>
                    EXPLORER
                </button>
            </router-link>
        </div>
    </section>
</template>

<style scoped>
h2,
button {
    margin: 8px 0px;
    color: white;
}
section {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
section>div{
    text-align: center;
}
button {
    border: 1px solid transparent;
    border-radius: 5px;
    padding: 10px 20px;
    font-weight: bold;
}

</style>
