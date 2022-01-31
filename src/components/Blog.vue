<template>
  <div class="col-md-4 blog">
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
      <a :id="id" class="btns btn-outline-red">Read More</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Blog",
  data(){
      return {
          title: "Aliquam tincidunt mauris eu risus.",
          excerpt: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.",
          author: 'Fulano de tal',
          blogPosted: 'Sep, 02 2022',
          tags: ['tag 1', 'tag 2']
      }
  }
};
</script>

<style></style>
