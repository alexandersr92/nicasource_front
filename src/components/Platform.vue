<template>
  <div class="listenOn">
    <a v-if="spotify != ''" :href="spotify"><img :src="spotify_podcast" /></a>
    <a v-if="google != ''" :href="spotify"><img :src="google_podcast" /></a>
    <a v-if="apple != ''" :href="spotify"><img :src="apple_podcast" /></a>
  </div>
</template>

<script>
import apple_podcast from "@/assets/img/apple_podcast.png";
import spotify_podcast from "@/assets/img/spotify_podcast.png";
import google_podcast from "@/assets/img/google_podcast.png";

export default {
  name: "Plataforms",
  props: {
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
  },

  data() {
    return {
      spotify_podcast,
      google_podcast,
      apple_podcast,
    };
  },
};
</script>
