<script setup>
import sectionHome from '../components/sectionHome.vue';
</script>

<template>
    <div id="home">
        <sectionHome class="agence" to="/agence"> AGENCE </sectionHome>
        <sectionHome class="gv" to="/agence"> AGENCE </sectionHome>
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
        height: 50vh;
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
.agence button {
    background-color: var(--orange);
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
.gv button {
    background-color: var(--blue);
}   
</style>
