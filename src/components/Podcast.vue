<template>
  <div class="container podcast">
    <div class="row">
      <div class="col-md-2">
        <img class="img-fluid" :src="cover" :alt="title" />
      </div>
      <div class="col-md-7 podcast__info">
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
        <div class="podcast__info--player">
          <a :id="id" v-on:click="showAudio(id)" class="btns btn-outline-red"
            >Know more</a
          >
          <audio :id="`audio_${id}`" controls>
            <source :src="audio" type="audio/mpeg" />
          </audio>
        </div>
      </div>
      <div class="col-md-3 podcast__meta">
        <p>{{ season }}</p>
        <p># Posted on {{ postedDate }}</p>
        <p>
          # <span v-for="tag in tags" :key="tag">{{ tag }}</span>
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
    cover: String,
    description: String,
    season: String,
    postedDate: String,
    audio: String,
    tags: Array,
  },
  methods: {
    showAudio(id) {
      
      let player = document.getElementById("audio_" + id);
      console.log(player);
       player.style.display = (player.style.display == "none" || player.style.display == "") ? "block" : "none";
 
    },
  },
};
</script>
