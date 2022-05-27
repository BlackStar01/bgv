<script setup>
import { ref, computed } from 'vue';
import About from './About.vue';
import CardService from './CardService.vue';

defineProps({
    title: {
        type: String,
        required: true
    }
})
const services = ref([
    {
        title: 'Marketing',
        img_1: 'src/assets/person.jpg',
        img_2: 'src/assets/person.jpg',
        text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit fugit error dolorum laborum laudantium possimus fugiat architecto blanditiis accusantium odit impedit, doloremque molestiae iusto vitae molestias inventore commodi nemo illo.'
    },
    {
        title: 'Consultation',
        img_1: 'src/assets/person.jpg',
        img_2: 'src/assets/person.jpg',
        text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit fugit error dolorum laborum laudantium possimus fugiat architecto blanditiis accusantium odit impedit, doloremque molestiae iusto vitae molestias inventore commodi nemo illo.'
    },
    {
        title: 'SM Marketing',
        img_1: 'src/assets/person.jpg',
        img_2: 'src/assets/person.jpg',
        text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit fugit error dolorum laborum laudantium possimus fugiat architecto blanditiis accusantium odit impedit, doloremque molestiae iusto vitae molestias inventore commodi nemo illo.'
    }
])

const activeService = ref(services._rawValue[0])

const showService = (index) => {
    activeService.value = services._rawValue[index]
}


</script>

<template>
    <div class="services">
        <h1> {{ title }} </h1>
        <CardService v-for="(service, index) in services" :key="index" :title_service="service.title"
            :src="service.img_1" @click="showService(index)">
        </CardService>

        <About :title="activeService.title" :text="activeService.text" :src="activeService.img_2"></About>

    </div>
</template>

<style lang="css" scoped>
.services {
    padding: 30px 0px;
    width: 70%;
    margin: auto;
}

.about {
    width: 100% !important;
}

@media (max-width:720px) {
    .services {
        text-align: center;
        padding: 30px 0px;
        width: 100%;
        margin: auto;
    }
    .img {
        display: none;
    }
    .about {
        width: 100% !important;
    }
}
</style>