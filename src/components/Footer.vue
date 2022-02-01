<template>
  <footer>
    <div class="container footer">
      <div class="row">
        <div class="col-md-4 col-sm-6 mt-sm-5">
          <img :src="setting.logo" :alt="setting.title" />
          <p>
            {{ setting.description }}
          </p>
          <div class="footer__rrss">
            <a :href="hero.facebook"><i class="fa fa-facebook-f"></i></a>
            <a :href="hero.linkedin"><i class="fa fa-linkedin"></i></a>
            <a :href="hero.instagram"><i class="fa fa-instagram"></i></a>
            <a :href="hero.skype"><i class="fa fa-skype"></i></a> 
          </div>
        </div>
        <div class="col-md-2 col-sm-6 mt-sm-5">
          <p>Pages</p>
          <ul>
            <li
              v-for="item in menu"
              v-show="item.classes[0].includes('header__menu--item')"
              :key="item.ID"
            >
              {{ item.post_title }}
            </li>
          </ul>
        </div>
        <div class="col-md-2 col-sm-6 mt-sm-5">
          <p>Recent Episode</p>
          <ul>
            <li>Episode 1</li>
            <li>Episode 2</li>
            <li>Episode 3</li>
            <li>Episode 4</li>
          </ul>
        </div>
        <div class="col-md-3 col-sm-6 mt-sm-5">
          <p>Listen My Podcast Also in</p>
          <Platform />
        </div>
      </div>
    </div>
    <div class="container copyright mt-sm-5">
      <p>@ 2022 NicaSource. All Rights Reserved</p>
    </div>
  </footer>
</template>

<script>
import Platform from "@/components/Platform";
import { mapGetters } from "vuex";

export default {
  name: "Footer",
  components: { Platform },

  computed: {
    ...mapGetters(["podcast", "hero", "setting", "menu"]),
  },
  created() {

  }
 
};
</script>

<style></style>
