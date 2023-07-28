<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="book">
    <h2>{{ book.Title }}</h2>
    <h3>{{ book.Author }}</h3>
    <button @click="readBook">Read</button>
  </div>
</template>
  
  <script>
  export default {
    props: {
      book: {
        type: Object,
        required: true
      }
    },
    methods: {
      readBook() {
        // Navigate to the book reader when the button is clicked
        this.$router.push(`/book/${this.book.ID}`);
      }
    }
  }
  </script>
  
  <style scoped>
  .book {
    /* Add some styles for the book component here */
  }
  </style>