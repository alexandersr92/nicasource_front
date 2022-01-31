<template>
  <section class="container podcasts">
    <div class="podcasts__title">
      <h3>Latest Podcast Episode</h3>
      <a href="#" class="btns btn-solid-red">View All</a>
    </div>
    <div class="podcasts__list">
      <Podcast
        v-for="podcast in this.newPodcastList"
        :key="podcast.id"
        :id="podcast.id"
        :title="podcast.title"
        :cover="podcast.cover"
        :description="podcast.description"
        :season="podcast.season"
        :postedDate="podcast.postedDate"
        :audio="podcast.audio"
        :tags="podcast.tags"
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
import Podcast from "@/components/Podcast";

export default {
  name: "Podcasts",
  components: { Podcast },
  data(){
    return{
        newPodcastList: [],
    }
  },
  props: {
    podcastsList: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    loadMore() {
      this.newPodcastList = this.podcastsList;
    },
  },
  created() {

      this.newPodcastList = this.podcastsList.slice(0, 3);

  },
};
</script>
