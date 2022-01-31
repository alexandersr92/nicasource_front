<template>
  <section class="container gallery">
    <h2>Our Gallery</h2>
    <div
      v-on:click="showSingleGallery"
      v-html="hero.gallery"
      class="gallery__list"
    ></div>
    <div v-if="!imgSingle == ''" class="gallery__single" id="singleGallery">
      <img :src="imgSingle" />
      <a v-on:click="clouseSingleGallery" class="btn btn-sm btn-secondary mt-3"
        ><i class="fa fa-times"></i
      ></a>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  name: "Gallery",
  data() {
    return {
      imgSingle: "",
      htmlGallery: "",
    };
  },
  methods: {
    ...mapActions(["GET_HERO"]),

    showSingleGallery: function () {
      window.addEventListener(
        "click",
        (e) => (this.imgSingle = e.target.currentSrc)
      );
    },
    clouseSingleGallery: function () {
      this.imgSingle = "";
    },
  },

  computed: {
    ...mapGetters(["hero"]),
  },
  created() {
    this.GET_HERO(11);
  },
};
</script>
