<template>
  <header>
    <div class="container header">
      <img class="header__logo" :src="settings?.logo" :alt="settings?.title" />

      <ul class="header__menu desktop">
        <li
          v-for="item in mainMenu"
          v-show="item.classes[0].includes('header__menu--item')"
          :key="item.ID"
        >
          <a
            :href="item.url"
            :class="item.classes.toString().replace(',', ' ')"
            >{{ item.post_title }}</a
          >
        </li>
      </ul>
      <ul class="header__rightMenu desktop">
        <li
          v-for="item in mainMenu"
          v-show="!item.classes[0].includes('header__menu--item')"
          :key="item.title"
        >
          <a
            :href="item.url"
            :class="item.classes.toString().replace(',', ' ')"
            >{{ item.title }}</a
          >
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
          v-show="item.classes[0].includes('header__menu--item')"
          :key="item.title"
        >
          <a
            :href="item.url"
            :class="item.classes.toString().replace(',', ' ')"
            >{{ item.title }}</a
          >
        </li>
      </ul>
      <ul class="header__rightMenu">
        <li
          v-for="item in mainMenu"
          v-show="!item.classes[0].includes('header__menu--item')"
          :key="item.title"
        >
          <a
            :href="item.url"
            :class="item.classes.toString().replace(',', ' ')"
            >{{ item.title }}</a
          >
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    mainMenu: {
      type: Array,
      default: () => [],
    },
    settings: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    showMobileMenu() {
      var menuMobile = document.getElementsByClassName("mobile__menu");
      for (let i = 0; i < menuMobile.length; i++) {
        menuMobile[i].style.display =
          menuMobile[i].style.display == "none" ||
          menuMobile[i].style.display == ""
            ? "block"
            : "none";
      }
    },
  },
};
</script>
