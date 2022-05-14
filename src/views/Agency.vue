<script setup>

</script>

<template>
    <div>
        <h1>
            <div class="social-container">
                <ul class="social-icons">
                    <li><a href="#"><fa class="fa" icon="phone" /></a></li>
                    <br>
                    <li><a href="#"><fa class="fa" icon="phone" /></a></li>
                </ul>
            </div>
        </h1>
    </div>
</template>

<style lang="css" scoped>

.social-icons {
  padding: 0;
  list-style: none;
  margin: 1em;
}
.social-icons li {
  display: inline-block;
  margin: 0.15em;
  position: relative;
  font-size: 1.2em;
}
.social-icons .fa {
  color: #fff;
  font-size: 20px;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 200ms ease-out;
}
.social-icons a {
  display: inline-block;
}
.social-icons a:before {
  transform: scale(1);
  -ms-transform: scale(1);
  -webkit-transform: scale(1);
  content: " ";
  width: 50px;
  height: 50px;
  border-radius: 100%;
  display: block;
  background: linear-gradient(45deg, #00b5f5, #002a8f);
  transition: all 200ms ease-out;
}
.social-icons a:hover:before {
  transform: scale(0);
  transition: all 200ms ease-in;
}
.social-icons a:hover .fa {
  transform: scale(1.3);
  -ms-transform: scale(1.3);
  -webkit-transform: scale(1.3);
  color: #00b5f5;
  background: -webkit-linear-gradient(45deg, #00b5f5, #002a8f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 200ms ease-in;
}
</style>
