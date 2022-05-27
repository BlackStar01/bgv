<script setup>
import { ref } from 'vue';

import CardUser from '../components/CardUser.vue';
defineProps({
    condition: {
        type: String,
        required: true
    }
})
const workers = ref([
    {
        id: 1,
        job: 'CEO',
        name: 'John MORANT'
    },
    {
        id: 2,
        job: 'DIRECTOR',
        name: 'John MORANT'
    },
    {
        id: 3,
        job: 'BOSS',
        name: 'John MORANT'
    },
    {
        id: 4,
        job: 'RH',
        name: 'John MORANT'
    },]
)
const partners = ref([
    {
        id: 1,
        url: '/src/assets/person.jpg',
        link: 'google.com',
        name: 'zrcoizcr'
    },
    {
        id: 2,
        url: '/src/assets/person.jpg',
        link: 'google.com',
        name: 'zrcoizcr'
    },
    {
        id: 3,
        url: '/src/assets/person.jpg',
        link: 'google.com',
        name: 'zrcoizcr'
    },
    {
        id: 4,
        url: '/src/assets/person.jpg',
        link: 'google.com',
        name: 'zrcoizcr'
    },
    {
        id: 6,
        url: '/src/assets/person.jpg',
        link: 'google.com',
        name: 'zrcoizcr'
    },]
)
</script>

<template>
    <div v-if="condition === 'team'" class="team">
        <CardUser v-for="worker in workers" :key="worker.id" :job="worker.job" :name="worker.name"></CardUser>
    </div>
    <div v-else class="partners">
        <h1> Nos partenaires </h1>
        <br>
        <div class="partenerimg">
            <img v-for="partner in partners" :key="partner.id" :src="partner.url" alt="">
        </div>
    </div>
</template>


<style lang="css" scoped>
.team {
    padding: 30px 0px;
    width: 70%;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
}

.partners {
    text-align: center;
    padding: 30px;
    width: 70%;
    margin: auto;
}

.partenerimg {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}

.partners img {
    width: 100%;
    padding: 10px;
}

@media (max-width:720px) {
    .team {
        padding: 50px 0px;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .partners {
        text-align: center;
        padding: 5px 0px;
        width: 95%;
        margin: auto;
    }

    .partenerimg {
        grid-template-columns: 1fr 1fr;
    }

    .partners img {
        width: 100%;
        padding: 10px;
    }
}
</style>