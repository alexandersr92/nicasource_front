<template>
  <section class="container blogs">
    <h2>Blog Post</h2>
    <div class="blogs__list row">
      <Blog v-for="item in blogsList" :key="item.id" :post="item" />
    </div>
    
  </section>
</template>

<script>
import Blog from "@/components/Blog";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "Blogs",
  components: { Blog },
  data() {
    return {
      blogsList: [],
    };
  },

  methods: {
    ...mapActions(["GET_BLOGS"]),

  },

  computed: {
    ...mapGetters(["blogs"]),
  },
  created() {
    this.GET_BLOGS();
    setTimeout(() => {
      this.blogsList = this.blogs.slice(0, 3);
    }, 500);
  },
};
</script>
