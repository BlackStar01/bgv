<script setup>
import Header from '../components/Header.vue';
import About from '../components/About.vue';
import Team from './Team.vue';
import Form from '../components/Form.vue';
import Foot from '../components/Foot.vue';
import Button from '../components/Button.vue';

import { ref } from 'vue';

const clickToTop = () => {
  window.document.documentElement.scrollTop = 0
}

const pass = ref('')

const submitPass = () => {

}
</script>

<template>
  <div>
    <div id="progress" @click="clickToTop">
      <span id="progress-value">&#8593;</span>
    </div>

    <Header btnBgColor="var(--orange)" btnColor="var(--blue)" btnShadow="var(--orangesoft)" sectionTitle="AGENCY" sectionDescription="Something tio fod"></Header>
    <About v-motion-slide-visible-bottom title="À propos" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nostrum provident animi voluptatem sapiente. 
        A recusandae quidem autem assumenda animi velit impedit, quam ut iste! A earum dicta sapiente vitae!"
      src="src/assets/about.png">
    </About>
    <Team v-motion-slide-visible-bottom condition="team"></Team>
    <Team v-motion-slide-visible-bottom condition="none"></Team>
    <div class="pass">
        <form action="" @submit="submitPass">
            <h4> BGV Pass</h4>
            <input type="text" v-model="pass">
            <Button btn-type="submit"
                    :style="'background-color: var(--orange)' + ';box-shadow: var(--orangesoft)' + ' 2px 2px 0 0,black 1px 1px 0 1px;color:' + btnColor + ';'">EXPLORER</Button>
        </form>
    </div>
    <Form id="contact" v-motion-slide-visible-bottom></Form>
    <Foot v-motion-slide-visible-top :goto="'agency'"> AGENCY </Foot>

  </div>
</template>

<style scoped>
.pass {
    background-color: rgba(0, 0, 0, 0.705);
    background-blend-mode: multiply;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-image: url('../assets/agence-land.png');
    width: 100%;
    padding: 40px 0px;
    display: grid;
    place-items: center;
}
form {
    color: var(--orange);
    width: 25%;
    margin: auto;
    text-align: center;
}
form h4 {
    font-size: 1.5em;
}
form input {
    width: 100%;
    padding: 10px 0px;
    margin: 10px 0px;
}
form button {
    padding: 10px 20px;
}
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
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: var(--black);
}
</style>
