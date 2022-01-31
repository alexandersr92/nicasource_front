<template>
  <Header :mainMenu="mainMenu" logo="" />
  <Hero />
  <Podcasts :podcastsList="podcastsValueTest" />
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




import coverImage from "@/assets/img/cover.jpg";
import testAudio from "@/assets/audio/test.mp3";
export default {
  name: "App",
  components: {
    Header,
    Hero,
    Podcasts,
    Blogs,
    Gallery,
    NewsLetter,
    Footer
  },
  data() {
    return {
      mainMenu: [
        { title: "Home", url: "#", class: "header__menu--item active" },
        { title: "About", url: "#", class: "header__menu--item" },
        { title: "Episodes", url: "#", class: "header__menu--item" },
        { title: "Blog", url: "#", class: "header__menu--item" },
        { title: "Contact", url: "#", class: "header__menu--item" },
        { title: "Subscribe", url: "#", class: "btns btn-solid-red" },
        { title: "Sing-in", url: "#", class: "btns btn-outline-red" },
      ],
      podcastsValueTest: [
        {
          id: 1,
          title: "Title Podcast 1",
          cover: coverImage,
          description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
          season: "Season 1",
          postedDate: "2022-01-15",
          audio: testAudio,
          tags: ["audio", "life"],
        },
        {
          id: 2,
          title: "Title Podcast 2",
          cover: coverImage,
          description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
          season: "Season 1",
          postedDate: "2022-01-15",
          audio: testAudio,
          tags: ["audio", "life"],
        },
        {
          id: 3,
          title: "Title Podcast 3",
          cover: coverImage,
          description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
          season: "Season 1",
          postedDate: "2022-01-15",
          audio: testAudio,
          tags: ["audio", "life"],
        },
        {
          id: 4,
          title: "Title Podcast 4",
          cover: coverImage,
          description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
          season: "Season 1",
          postedDate: "2022-01-15",
          audio: testAudio,
          tags: ["audio", "life"],
        },
        {
          id: 5,
          title: "Title Podcast 5",
          cover: coverImage,
          description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
          season: "Season 1",
          postedDate: "2022-01-15",
          audio: testAudio,
          tags: ["audio", "life"],
        },
        {
          id: 6,
          title: "Title Podcast 6",
          cover: coverImage,
          description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
          season: "Season 1",
          postedDate: "2022-01-15",
          audio: testAudio,
          tags: ["audio", "life"],
        },
      ],
    };
  },
};
</script>
