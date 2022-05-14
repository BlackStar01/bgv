<script setup>
import sectionHome from "../components/sectionHome.vue";
</script>

<template>
  <div id="home">
    <sectionHome
      btnBgColor="var(--orange)"
      btnColor="var(--blue)"
      btnShadow="var(--orangesoft)"
      class="agence"
      to="/agency"
    >
      AGENCE
    </sectionHome>
    <sectionHome
      btnBgColor="var(--blue)"
      btnColor="var(--orange)"
      btnShadow="var(--bluesoft)"
      class="gv"
      to="/gv"
    >
      GOOD VIBES
    </sectionHome>
  </div>
</template>

<style lang="css">
@media screen and (min-width: 769px) {
  #home {
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
@media screen and (max-width: 769px) {
  #home {
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
  }
}

.agence {
  width: 100%;
  height: 100%;
  background-image: url("../assets/l.png");
  background-blend-mode: multiply;
  background-color: var(--blue);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.gv {
  width: 100%;
  height: 100%;
  background-image: url("../assets/r.png");
  background-blend-mode: soft-light;
  background-color: var(--orangesoft);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>
