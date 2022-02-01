<template>
  <Header :mainMenu="this.menu" :settings="setting" />
  <Hero />
  <Podcasts />
  <Blogs />
  <Gallery />
  <NewsLetter />
  <Footer/>
</template>

<script>
import Header from "@/components/Header.vue";
import Hero from "@/components/Hero.vue";
import Podcasts from "@/components/Podcasts.vue";
import Blogs from "@/components/Blogs.vue";
import Gallery from "@/components/Gallery.vue";
import NewsLetter from "@/components/NewsLetter.vue";
import Footer from "@/components/Footer.vue";

import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    Header,
    Hero,
    Podcasts,
    Blogs,
    Gallery,
    NewsLetter,
    Footer,
  },

  methods: {
    ...mapActions(["GET_MENU"]),
    ...mapActions(["GET_SETTING"]),
  },
  computed: {
    ...mapGetters(["menu", "setting"]),
  },
  created() {
    this.GET_SETTING();
    this.GET_MENU();
    
  },
 
};
</script>
