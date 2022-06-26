<script setup>
import { reactive } from 'vue';
import ButtonVue from './Button.vue';

const formData = reactive({
    name: '',
    tel: '',
    email: '',
    message: ''
})

const validateEmail = () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
        return 1
    }
    return 0
}

const checkForm = () => {
    if(validateEmail() === 1)
    {
        console.log(formData)
        return true
    }
    return false
}

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
        <form action="" @submit.prevent="checkForm" method="post" novalidate="true">
            <input v-model="formData.name" type="text" placeholder="Nom et prénom">
            <input v-model="formData.tel" type="tel" placeholder="+229 12 57 48 52">
            <input v-model="formData.email" @blur="validateEmail" type="email" placeholder="exemple@gmail.com">
            <textarea v-model="formData.message" id="" rows="4" placeholder="Votre message ..."></textarea>
            <ButtonVue :btn-type="'submit'"
                :style="'background-color: var(--orange);box-shadow: var(--orangesoft) 2px 2px 0 0,black 1px 1px 0 1px;'">
                Envoyer </ButtonVue>
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

input:focus, textarea:focus {
    background-color: rgb(255, 255, 204);
}


@media (max-width:720px) {
    .form {
        display: block;
        padding-top: 130px;
        width: 100%;
        margin: auto;
    }

    .left {
        position: relative;
        width: 92%;
        text-align: center;
    }

    .left-content {
        position: relative;
        transform: translateY(-15%);
    }

    form {
        width: 90%;
        margin: auto;
    }


}
</style>