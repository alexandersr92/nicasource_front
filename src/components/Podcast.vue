<template>
  <div class="container podcast">
    <div class="row">
      <div class="col-md-2 col-sm-12 podcast__cover">
        <img
          class="img-fluid"
          :src="cover['wp:featuredmedia'][0].source_url"
          :alt="title"
        />
      </div>
      <div class="col-md-7 col-sm-12 podcast__info">
        <h2>{{ title }}</h2>
        <p v-html="description"></p>
        <div class="podcast__info--player">
          <a :id="id" v-on:click="showAudio(id)" class="btns btn-outline-red"
            >Know more</a
          >
          <audio :id="`audio_${id}`" controls>
            <source :src="audio" type="audio/mpeg" />
          </audio>
        </div>
      </div>
      <div class="col-md-3 col-sm-12 podcast__meta">
        <p>
          <span v-for="item in season" :key="item.id">{{ item.name }}</span>
        </p>
        <p># Posted on {{ setDatePost }}</p>
        <p>
          # <span v-for="tag in tags" :key="tag.id">{{ tag.name }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Podcast",

  props: {
    id: Number,
    title: String,
    cover: Object,
    description: String,
    season: Array,
    postedDate: String,
    audio: String,
    tags: Array,
  },
  methods: {
    showAudio(id) {
      let player = document.getElementById("audio_" + id);

      player.style.display =
        player.style.display == "none" || player.style.display == ""
          ? "block"
          : "none";
    },
  },
  computed: {
    setDatePost() {
      let date = new Date(this.postedDate);
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Octr",
        "Nov",
        "Dec",
      ];
      let setDate = `${
        months[date.getMonth()]
      } ${date.getDate()}, ${date.getFullYear()}`;
      return setDate;
    },
  },
};
</script>
