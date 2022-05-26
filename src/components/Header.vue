<script setup>
import { ref } from 'vue';
import Button from './Button.vue';
import Navbar from './Navbar.vue';
import Social from './Social.vue';

const socials = ref([
    {
        name: 'fcb',
        path: 'https://www.youtube.com',
        icon: 'phone'
    },
    {
        name: 'ytb',
        path: 'https://www.youtube.com',
        icon: 'phone'
    },
    {
        name: 'twt',
        path: 'https://www.youtube.com',
        icon: 'phone'
    },
])
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

})

</script>

<template>
    <div class="header" style="">
        <div class="nav">
            <Navbar></Navbar>
        </div>
        <div class="content">
            <div class="left">
                <div>
                    <h4> Bénin Good Vibes </h4>
                    <h1> AGENCE </h1>
                    <br>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit blanditiis eum provident obcaecati
                        dolore nemo suscipit, ab, optio vitae, neque voluptate in dignissimos corrupti error vero?
                        Perferendis obcaecati consequatur quibusdam?
                    </p>
                    <br><br>
                    <Button
                        :style="'background-color:' + btnBgColor + ';box-shadow:' + btnShadow + ' 2px 2px 0 0,black 1px 1px 0 1px;color:' + btnColor + ';'">
                        Nous contacter 
                    </Button>
                </div>
            </div>
            <div class="right">
                <ul class="social-icons" v-for="item in socials" :key="name">
                    <Social :path="item.path" :icon="item.icon" />
                </ul>
            </div>
        </div>

    </div>
</template>

<style lang="css" scoped>
h1 {
    font-size: 4em;
}

.header {
    height: 90vh;
    background-image: url('../assets/agence-land.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    color: #fff;
}

nav {
    padding: 20px 0px;
    height: 10%;
}

.content {
    display: grid;
    grid-template-columns: 3fr 1fr;
    position: relative;
    top: 30%;
}

.left {
    position: absolute;
    top: 50%;
    left: 10%;
    width: 40%;
}
.right {
    position: absolute;
    right: 50px;
}

.social-icons {
    padding: 0;
    list-style: none;
    margin: 1em;
}

.social-icons li {
    display: inline-block;
    margin: 0.15em;
    position: relative;
}
</style>