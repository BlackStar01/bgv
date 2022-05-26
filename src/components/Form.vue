<script setup>
import ButtonVue from './Button.vue';
</script>

<template>
    <div class="form">
        <div class="left">
            <h1> Contactez-nous </h1>
            <small> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ipsum, aliquid nihil neque quisquam
                veniam perferendis voluptas, doloremque velit corporis consequatur nostrum placeat voluptate et
                similique maiores explicabo optio totam. </small>
        </div>
        <form action="">
            <input type="text" placeholder="Nom et prénom">
            <input type="tel" placeholder="+229 12 57 48 52">
            <input type="email" placeholder="exemple@gmail.com">
            <textarea name="" id="" cols="30" rows="10" placeholder="Votre message ..."></textarea>
            <ButtonVue :style="'background-color: var(--orangesoft);'"> Envoyer </ButtonVue>
        </form>
    </div>
</template>

<style lang="css" scoped>
.form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 70%;
    margin: auto;
}

input,
textarea {
    display: block;
    width: 100%;
    padding: 10px;
    margin: 10px 0px;
    outline: none;
    border-radius: 5px;
}

input:hover,
input:active,
textarea:hover,
textarea:active {
    border: 1px solid var(--orange);
}
</style>