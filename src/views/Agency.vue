<script setup>
import Header from '../components/Header.vue';
import About from '../components/About.vue';
import Team from './Team.vue';
import Services from '../components/Services.vue';
import Form from '../components/Form.vue';

</script>

<template>
  <div>
    <Header btnBgColor="var(--orange)" btnColor="var(--blue)" btnShadow="var(--orangesoft)">
    </Header>
    <About title="À propos" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nostrum provident animi voluptatem sapiente. 
    A recusandae quidem autem assumenda animi velit impedit, quam ut iste! A earum dicta sapiente vitae!"
      src="src/assets/about.png"></About>
    <Team condition="team"></Team>
    <Team></Team>
    <Services title="Services"></Services>
    <Form></Form>
  </div>
</template>

<style lang="css" scoped>
</style>
