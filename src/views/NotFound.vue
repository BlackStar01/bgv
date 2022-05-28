<template>
    <div class="page">
        <Navbar></Navbar>
        <div class="number">
            <div>
                <span>4.0.4</span>
                <p>OUPSSS.... La page est introuvable</p>
            </div>
        </div>
    </div>
</template>
    
<script setup>
import Navbar from '../components/Navbar.vue';

</script>
    
<style scoped>
.page {
    height: 100vh;
    background-image: url("../assets/404.jpg");
    background-size: cover;
    background-color: rgba(0, 0, 0, 0.884);
    background-blend-mode: multiply;
}

.number {
    display: grid;
    height: 100%;
    place-items: center;
    color: var(--orange);
}

.number span {
    font-size: 8em;
}
.number p {
    font-size: 1.2em;
}
</style>