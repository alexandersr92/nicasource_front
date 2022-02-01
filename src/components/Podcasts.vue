<template>
  <section class="container podcasts">
    <div class="podcasts__title">
      <h3>Latest Podcast Episode</h3>
      <a href="#" class="btns btn-solid-red">View All</a>
    </div>

    <div v-if="this.allPodcasts.length == 0" class="podcasts__list">
      <Podcast
        v-for="item in this.newPodcast"
        :key="item.id"
        :id="item.id"
        :title="item.title.rendered"
        :cover="item._embedded"
        :description="item.content.rendered"
        :season="item._embedded['wp:term'][1]"
        :postedDate="item.date"
        :audio="item.acf.audio"
        :tags="item._embedded['wp:term'][0]"
      />
    </div>
    <div v-if="this.allPodcasts.length != 0" class="podcasts__list">
      <Podcast
        v-for="item in this.allPodcasts"
        :key="item.id"
        :id="item.id"
        :title="item.title.rendered"
        :cover="item._embedded"
        :description="item.content.rendered"
        :season="item._embedded['wp:term'][1]"
        :postedDate="item.date"
        :audio="item.acf.audio"
        :tags="item._embedded['wp:term'][0]"
      />
    </div>
    <div class="podcasts__footer">
      <a v-on:click="loadMore" class="btns btn-outline-red"
        >Show More Episodes</a
      >
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

import Podcast from "@/components/Podcast.vue";

export default {
  name: "Podcasts",
  components: { Podcast },
  data() {
    return {
      allPodcasts: [],
    };
  },

  methods: {
    ...mapActions(["GET_PODCASTS"]),

    loadMore() {
      this.allPodcasts = this.podcasts;
    },
  },

  computed: {
    ...mapGetters(["podcasts"]),

    newPodcast() {
      return this.podcasts.slice(0, 3);
    },
  },
  created() {
    this.GET_PODCASTS();
  },
};
</script>
