<script setup>
import Header from '../components/Header.vue';
import About from '../components/About.vue';
import Team from './Team.vue';
import Services from '../components/Services.vue';
import Form from '../components/Form.vue';
import Foot from '../components/Foot.vue';


const clickToTop = () => {
  window.document.documentElement.scrollTop = 0
}
</script>

<template>
  <div>
    <div id="progress" @click="clickToTop">
      <span id="progress-value">&#x1F815;</span>
    </div>
    <Header btnBgColor="var(--orange)" btnColor="var(--blue)" btnShadow="var(--orangesoft)">
    </Header>
    <About v-motion-slide-visible-bottom title="À propos" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nostrum provident animi voluptatem sapiente. 
        A recusandae quidem autem assumenda animi velit impedit, quam ut iste! A earum dicta sapiente vitae!"
      src="src/assets/about.png">
    </About>
    <Team v-motion-slide-visible-bottom condition="team"></Team>
    <Team v-motion-slide-visible-bottom condition="none"></Team>
    <Services v-motion-slide-visible-bottom title="Services"></Services>
    <Form id="contact" v-motion-slide-visible-bottom></Form>
    <Foot v-motion-slide-visible-top></Foot>

  </div>
</template>

<style scoped>
#progress {
  background-color: var(--orange);
  position: fixed;
  bottom: 20px;
  right: 10px;
  height: 60px;
  width: 60px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0px 1px 5px var(--orangesoft);
  z-index: 1;
}

#progress-value {
  display: block;
  height: calc(100%-15px);
  width: calc(100%-15px);
  background-color: black;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: var(--orange);
}
</style>
