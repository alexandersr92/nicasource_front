<template>
  <section class="hero_container">
    <div class="container hero">
      <div class="hero__text">
        <span class="left">{{ sub_title }} </span>
        <h1>{{ title }}</h1>
        <p>{{ paragraph }}</p>
        <span class="right">Listen On Also</span>
        <Platform :spotify="spotify" :google="google" :apple="apple" />
      </div>
      <div class="hero__image">
        <img :src="hero_image" />
      </div>
    </div>
  </section>
</template>

<script>
import hero_image from "@/assets/img/hero.png";
import Platform from "@/components/Platform";

export default {
  name: "Hero",
  components: { 
    Platform,
  },
  props: {
    title: {
      type: String,
      default: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
    },
    sub_title: {
      type: String,
      default: "Aliquam tincidunt mauris eu risus.",
    },
    paragraph: {
      type: String,
      default:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
    },
    spotify: {
      type: String,
      default: "#",
    },
    google: {
      type: String,
      default: "#",
    },
    apple: {
      type: String,
      default: "#",
    },
    image: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      hero_image,
    };
  },
};
</script>
