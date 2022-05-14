<script setup>
import Button from './Button.vue';

defineProps({
    btnBgColor: {
        type: String,
        required: true,
    },
    btnColor: {
        type: String,
        required: true,
    },
    btnShadow: {
        type: String,
        required: true,
    },
    to: {
        type : String,
        required: true,
    },
})

</script>

<template>
    <section>
        <div>
            <h2>
                <slot></slot>
            </h2>
            <router-link :to="to">
                <Button :style="'background-color:'+btnBgColor+';box-shadow:'+btnShadow+' 2px 2px 0 0,black 1px 1px 0 1px;color:'+btnColor+';'">EXPLORER</Button>
            </router-link>
        </div>
    </section>
</template>

<style scoped>
h2,
button {
    margin: 8px 0px;
    color: #fff;
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
    padding: 15px 25px;
    font-weight: bold;
}

</style>
