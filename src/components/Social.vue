<!-- Must be included in a ul -->
<script setup>
defineProps({
    path : {
        type: String,
        required: true,  
    },
    icon : {
        type: String,
        required: true,  
    },
})
</script>

<template>
    <li>
        <a :href="path">
            <fa class="fa" :icon="icon" />
        </a>
    </li>
</template>

<style lang="css">
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
  background: linear-gradient(45deg, var(--orange), var(--orangesoft));
  transition: all 200ms ease-out;
}
.social-icons a:hover:before {
  transform: scale(0);
  transition: all 200ms ease-in;
}
.social-icons a:hover .fa {
  color: var(--orange);
  background: -webkit-linear-gradient(45deg, var(--orange), var(--orangesoft));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 200ms ease-in;
}
</style>