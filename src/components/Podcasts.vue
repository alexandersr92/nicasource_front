<template>
  <section class="container podcasts">
    <div class="podcasts__title">
      <h3>Latest Podcast Episode</h3>
      <a href="#" class="btns btn-solid-red">View All</a>
    </div>

    <div class="podcasts__list">
      <Podcast
        v-for="item in newPodcastList"
        :key="item.id"
        :id="item.id"
        :title="item.title.rendered"
        :cover="item.cover"
        :description="item.content"
        :season="item.season"
        :postedDate="item.date"
        :audio="item.acf.audio"
        :tags="item.tags"
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
      newPodcastList: [],
    };
  },

  methods: {
    ...mapActions(["GET_PODCASTS"]),

    loadMore() {
      this.newPodcastList = this.podcasts;
    },
  },

  computed: {
    ...mapGetters(["podcasts"]),
  },
  created() {
    this.GET_PODCASTS();
    this.newPodcastList = this.podcasts.slice(0, 3);
  },
};
</script>
