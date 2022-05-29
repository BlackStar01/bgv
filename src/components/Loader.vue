<template>
    <div class="loaderpage">
        <div class="content">
            <img src="../assets/404.jpg" alt="logo_loader">
        </div>
        <div class="line">

        </div>

    </div>

</template>
    
<style scoped>
@media screen and (min-width: 769px) {
    .loaderpage {
        position: relative;
        height: 100vh;
        width: 100%;
        background-color: #FFFEEE;
    }
}


.content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.line {
    z-index: 0;
    opacity: 0.5;
    height: 2px;
    width: 50%;
    display: block;
    background-color: var(--orange);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

img {
    z-index: 1;
    height: 300px;
    width: 300px;
    animation: rotation 2s infinite linear;
}

@keyframes rotation {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(359deg);
    }
}


@media screen and (max-width: 769px) {
    img {
        z-index: 1;
        height: 150px;
        width: 150px;
    }

}
</style>