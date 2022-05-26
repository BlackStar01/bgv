<script setup>
import Header from '../components/Header.vue';
import About from '../components/About.vue';
import Team from './Team.vue';
import Services from '../components/Services.vue';
import Form from '../components/Form.vue';
import Foot from '../components/Foot.vue';

</script>

<template>
  <div>
    <Header btnBgColor="var(--orange)" btnColor="var(--blue)" btnShadow="var(--orangesoft)">
    </Header>
    <About v-motion-slide-visible-right title="À propos" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nostrum provident animi voluptatem sapiente. 
        A recusandae quidem autem assumenda animi velit impedit, quam ut iste! A earum dicta sapiente vitae!"
        src="src/assets/about.png">
    </About>  
    <!--<Team v-motion-slide-visible-right condition="team"></Team>
    <Team v-motion-slide-visible-right></Team>
    <Services v-motion-slide-visible-right title="Services"></Services>
    <Form v-motion-slide-visible-right></Form>
    <Foot v-motion-slide-visible-right></Foot> -->
  </div>
</template>

<style scoped>
</style>
