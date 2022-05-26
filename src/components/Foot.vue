<template>
    <footer>
        <div class="footer">
            <div class="row">
                <ul>
                    <li><a href="#">Nous contacter</a></li>
                    <li><a href="#">Nos services</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Termes & Conditions</a></li>
                </ul>
            </div>
            <div class="row">
                Benin Good Vibes Copyright &copy; 2021 Inferno - All rights reserved || Designed By: <a href="#">LIAJ</a>
            </div>
        </div>
    </footer>

</template>
    
<script setup>

</script>
    
<style scoped>
.footer {
    background: #000;
    padding: 30px 0px;
    text-align: center;
}

.footer .row {
    width: 100%;
    padding: 0.6% 0%;
    color: gray;
    font-size: 0.8em;
}

.footer .row a {
    text-decoration: none;
    color: gray;
    transition: 0.5s;
}

.footer .row a:hover {
    color: #fff;
}

.footer .row ul {
    width: 100%;
}

.footer .row ul li {
    display: inline-block;
    margin: 0px 30px;
}

.footer .row a i {
    font-size: 2em;
    margin: 0% 1%;
}

@media (max-width:720px) {
    .footer {
        text-align: left;
        padding: 5%;
    }

    .footer .row ul li {
        display: block;
        margin: 10px 0px;
        text-align: left;
    }

    .footer .row a i {
        margin: 0% 3%;
    }
}
</style>