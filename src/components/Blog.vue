<template>
  <div class="col-md-4 col-sm-12 mt-3 blog">
    <div class="blog__meta">
      <p>
        <span>By {{ authorPost }}</span> {{ blogPosted }}
      </p>
      <p>
          <ul>
            <li v-for="tag in tags" :key="tag.id">{{ tag.name }}</li>
          </ul>
      </p>
    </div>
    <div class="blog__content">
      <h3>{{ title }}</h3>
      <p v-html="excerpt"></p>
      <a  :id="id" class="btns btn-outline-red"  data-bs-toggle="modal" :data-bs-target="`#showSingle-${id}`">Read More</a>
    </div>
  </div>

  <!-- Modal -->
<div class="modal fade " :id="`showSingle-${id}`" tabindex="-1" :aria-labelledby="`ModalLabel-${id}`" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" :id="`ModalLabel-${id}`">{{ title }}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
         <div class="blog__meta">
      <p>
        <span>By {{ authorPost }}</span> {{ blogPosted }}
      </p>
      <p>
          <ul>
            <li v-for="tag in tags" :key="tag.id">{{ tag.name }}</li>
          </ul>
      </p>
    </div>
        <p v-html="content"></p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Blog",
  props: {
    post: Object
  },
   data(){
      return {
          id: this.post.id,
          title: this.post.title.rendered,
          excerpt: this.post.excerpt.rendered,
          content: this.post.content.rendered,
          authorPost: this.post._embedded.author[0].name,
          blogPosted: this.setDatePost,
          tags: this.post._embedded['wp:term'][0],
      }
  }, 
  computed:{
    setDatePost() {
      let date = new Date(this.post.date);
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
  created(){
    //console.log(this.tags[0].name)
  }
};
</script>

<style></style>
