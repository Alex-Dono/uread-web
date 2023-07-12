<template>
    <div class="book-list">
      <book v-for="book in books" :key="book.id" :book="book" />
    </div>
</template>
  
  <script>
  import Book from './Book.vue'
  import axios from 'axios'
  
  export default {
    components: {
      Book
    },
    data() {
      return {
        books: []
      }
    },
    async created() {
      // Fetch the list of books when the component is created
      const response = await axios.get('/api/books')
      this.books = response.data
    }
  }
  </script>
  
  <style scoped>
  .book-list {
    /* Add some styles for the book list component here */
  }
  </style>