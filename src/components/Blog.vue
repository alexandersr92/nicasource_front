<template>
  <div class="col-md-4 col-sm-12 mt-3 blog">
    <div class="blog__meta">
      <p>
        <span>By {{ author }}</span> {{ blogPosted }}
      </p>
      <p>
          <ul>
            <li v-for="tag in tags" :key="tag">{{ tag }}</li>
          </ul>
      </p>
    </div>
    <div class="blog__content">
      <h3>{{ title }}</h3>
      <p>{{ excerpt }}</p>
      <a :id="id" class="btns btn-outline-red"  data-bs-toggle="modal" :data-bs-target="`#showSingle${id}`">Read More</a>
    </div>
  </div>
  <!-- Modal -->
<div class="modal fade " :id="`#showSingle${id}`" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{{ title }}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
         <div class="blog__meta">
      <p>
        <span>By {{ author }}</span> {{ blogPosted }}
      </p>
      <p>
          <ul>
            <li v-for="tag in tags" :key="tag">{{ tag }}</li>
          </ul>
      </p>
    </div>
        {{content}}
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
  data(){
      return {
          id: 1,
          title: "Aliquam tincidunt mauris eu risus.",
          excerpt: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.",
          content: "Lorem ipsum dolor sit amet, consect consectetuer adipiscing elit. Donec odio.",
          author: 'Fulano de tal',
          blogPosted: 'Sep, 02 2022',
          tags: ['tag 1', 'tag 2']
      }
  }
};
</script>

<style></style>
