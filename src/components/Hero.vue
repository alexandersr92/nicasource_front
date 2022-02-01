<template>
  <section class="hero_container">
    <div class="container hero">
      <div class="row">
        <div class="col-md-6 col-xs-12 hero__text slide-in-left">
          <span class="left">{{ hero.sub_title }} </span>
          <h1>{{ hero.main_title }}</h1>
          <p>{{ hero.parragraph }}</p>
          <span class="right">Listen On Also</span>
          <Platform
            :spotify="hero.spotify"
            :google="hero.google_podcasts"
            :apple="hero.apple_podcasts"
          />
        </div>
        <div class="col-md-6 col-xs-12 hero__image slide-in-right">
          <img class="img-fluid" :src="hero.imagen" />
        </div>
      </div>
    </div>
  </section>
</template>


<script>

import Platform from "@/components/Platform";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "Hero",
  data(){
    return{
      isLoading: true,
    }
  },
  components: {
    Platform,
  },

  methods: {
    ...mapActions(["GET_HERO"]),
  },
  computed: {
    ...mapGetters(["hero"]),

   
  },
  created() {
    this.GET_HERO(11);
  },
  
  
};
</script>
