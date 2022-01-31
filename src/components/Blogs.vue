<template>
  <section class="container blogs">
    <h2>Blog Post</h2>
    <div class="blogs__list row">
      <Blog />
      <Blog />
      <Blog />
 
    </div>
    <div class="blogs__nav">
        <a><i class="fa fa-arrow-left"></i></a>
        <a><i class="fa fa-arrow-right"></i></a>
    </div>
  </section>
</template>

<script>
import Blog from "@/components/Blog";
export default {
  name: "Blogs",
  components: { Blog },
};
</script>
