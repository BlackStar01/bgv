<template>
  <header :class="{'scrolled-nav':scrollNav}">
    <nav>
      <div class="branding">
        <img src="../assets/logo.png" alt="">
      </div>

      <ul v-show="!mobile" class="navigation">
        <li><router-link class="link" to="/zd">Home</router-link></li>
        <li><router-link class="link" to="/f">About</router-link></li>
        <li><router-link class="link" to="/gr">Protfolio</router-link></li>
        <li><router-link class="link" to="/e">Contact</router-link></li>
      </ul>
      <div class="icon">
        <fa @click="toggleMobileNav" v-show="mobile" icon="phone" :class="{'icon-active': mobileNav}"> zerz </fa>
      </div>
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
        <li><router-link class="link" to="/zd">Home</router-link></li>
        <li><router-link class="link" to="/f">About</router-link></li>
        <li><router-link class="link" to="/gr">Protfolio</router-link></li>
        <li><router-link class="link" to="/e">Contact</router-link></li>
      </ul>
      </transition>
    </nav>

  </header>
  
</template>

<script>
export default {
  name:"NavigationVue",
  data() {
    return {
      scrollNav: null,
      mobile:null,
      mobileNav:null,
      windowWidth:null,
    }
  },
  created(){
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  mounted(){
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    checkScreen(){
      this.windowWidth = window.innerWidth;
      if(this.windowWidth <=750 ){
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
    updateScroll(){
      const scrollPosition=window.scrollY;
      if(scrollPosition > 50){
        this.scrollNav = true;
        return;
      }
      this.scrollNav=false;
    }
  },
};
</script>

<style lang="css" scoped>
header {
  background-color: transparent;
  z-index: 99;
  width: 100%;
  position: fixed;
  transition: 0.5s ease all;
  color: #fff;
}
header nav {
  position: relative;
  display: flex;
  flex-direction: row;
  transition: 0.5s ease all;
  width: 90%;
  margin: 0 auto;
  height: 90px;
}
@media (min-width: 1140px) {
  header nav {
    max-width: 1140px;
  }
}
header nav ul, header nav .link {
  font-weight: 500;
  color: #fff;
  list-style: none;
  text-decoration: none;
}
header nav li {
  text-transform: uppercase;
  padding: 16px;
  margin-left: 16px;
}
header nav .link {
  font-size: 15px;
  transition: 0.3s ease all;
  padding-bottom: 4px;
  border-bottom: 1px solid transparent;
  font-weight: bolder;
}
header nav .link:hover {
  color: white;
  border-color: white;
}
header nav .branding {
  display: flex;
  align-items: center;
}
header nav .branding img {
  width: 50px;
  transition: 0.5s ease all;
}
header nav .navigation {
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
}
header nav .icon {
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  right: 34px;
  height: 100%;
}
header nav .icon i {
  cursor: pointer;
  font-size: 24px;
  transition: 0.8s ease all;
}
header nav .icon .icon-active {
  transform: rotate(180deg);
}
header nav .dropdown-nav {
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  max-width: 250px;
  height: 100%;
  background-color: #fff;
  top: 0;
  left: 0;
}
header nav .dropdown-nav li {
  margin-left: 0;
}
header nav .dropdown-nav li .link {
  color: #000;
}
header nav .mobile-nav-enter-active, header nav .mobile-nav-leave-active {
  transition: 1s ease all;
}
header nav .mobile-nav-enter-from, header nav .mobile-nav-leave-to {
  transform: translateX(-250px);
}
header nav .mobile-nav-enter-to {
  transform: translateX(0);
}
.scrolled-nav {
  background-color: #000;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
.scrolled-nav nav {
  padding: 8px 0;
}
.scrolled-nav nav .branding img {
  width: 40px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

</style>