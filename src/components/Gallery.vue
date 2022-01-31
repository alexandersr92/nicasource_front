<template>
  <section class="container gallery">
    <h2>Our Gallery</h2>
    <div v-on:click="showSingleGallery" class="gallery__list">
      <img :src="gallery" />
      <img :src="gallery" />
      <img :src="gallery" />
      <img :src="gallery" />
      <img :src="gallery" />
      <img :src="gallery" />
      <img :src="gallery" />
      <img :src="gallery" />
    </div>
    <div v-if="!imgSingle == ''" class="gallery__single" id="singleGallery">
      <img :src="imgSingle" />
      <a v-on:click="clouseSingleGallery" class="btn btn-sm btn-secondary mt-3"
        >Clouse</a
      >
    </div>
  </section>
</template>

<script>
import gallery from "@/assets/img/gallery.jpg";
import gallery_2 from "@/assets/img/gallery-2.jpg";

export default {
  name: "Gallery",
  data() {
    return {
      gallery,
      gallery_2,
      imgSingle: "",
    };
  },
  methods: {
    showSingleGallery: function () {
    

      window.addEventListener(
        "click",
        (e) => (this.imgSingle = e.target.currentSrc)
      );

    },
    clouseSingleGallery: function () {
        this.imgSingle= ""
      
    },
  },
};
</script>
