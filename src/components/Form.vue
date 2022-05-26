<script setup>
import ButtonVue from './Button.vue';
</script>

<template>
    <div class="form">
        <div class="left">
            <div class="left-content">
                <h1> Contactez-nous </h1>
                <small> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ipsum, aliquid nihil neque
                    quisquam
                    veniam perferendis voluptas, doloremque velit corporis consequatur nostrum placeat voluptate et
                    similique maiores explicabo optio totam. </small>
            </div>
        </div>
        <form action="">
            <input type="text" placeholder="Nom et prénom">
            <input type="tel" placeholder="+229 12 57 48 52">
            <input type="email" placeholder="exemple@gmail.com">
            <textarea name="" id="" rows="4" placeholder="Votre message ..."></textarea>
            <ButtonVue :style="'background-color: var(--orangesoft);'"> Envoyer </ButtonVue>
        </form>
    </div>
</template>

<style lang="css" scoped>
.form {
    padding-bottom: 15px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 70%;
    margin: auto;
}
.left {
    position: relative;
    width: 90%;
    margin: auto;

}
.left-content {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
input,
textarea {
    font-size: 12px;
    border: 1px solid #ccc;
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
    color: black;
}
</style>