<template>
  <header>
    <div class="container header">
      <img class="header__logo" :src="mainLogo" alt="" />
      <ul class="header__menu desktop">
        <li
          v-for="item in mainMenu"
          v-show="item.class.includes('header__menu--item')"
          :key="item.title"
        >
          <a :href="item.url" :class="item.class">{{ item.title }}</a>
        </li>
      </ul>
      <ul class="header__rightMenu desktop">
        <li
          v-for="item in mainMenu"
          v-show="!item.class.includes('header__menu--item')"
          :key="item.title"
        >
          <a :href="item.url" :class="item.class">{{ item.title }}</a>
         
        </li>
      </ul>
      <span id="mobile_hamburguer" v-on:click="showMobileMenu"
        ><i class="fa fa-bars"></i
      ></span>
    </div>
    <div class="mobile__menu">
      <ul class="header__menu">
        <li
          v-for="item in mainMenu"
          v-show="item.class.includes('header__menu--item')"
          :key="item.title"
        >
          <a :href="item.url" :class="item.class">{{ item.title }}</a>
        </li>
      </ul>
      <ul class="header__rightMenu">
        <li
          v-for="item in mainMenu"
          v-show="!item.class.includes('header__menu--item')"
          :key="item.title"
        >
          <a :href="item.url" :class="item.class">{{ item.title }}</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import logoDefault from "@/assets/img/logo.png";

export default {
  name: "Header",
  props: {
    mainMenu: {
      type: Array,
      default: () => [],
    },
    mainLogo: {
      type: String,
      default: logoDefault,
    },
  },
  methods: {
    showMobileMenu() {
      var menuMobile = document.getElementsByClassName('mobile__menu');
      for (let i = 0; i < menuMobile.length; i++) {
        menuMobile[i].style.display = (menuMobile[i].style.display == "none" || menuMobile[i].style.display == "") ? "block" : "none";
      }
    },
  },
};
</script>
