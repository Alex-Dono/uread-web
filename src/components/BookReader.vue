<template>
  <div class="book-reader">
    <pdfvuer :src="bookUrl" />
  </div>
</template>

<script>
import pdfvuer from 'pdfvuer'
import axios from 'axios'

export default {
  components: {
    pdfvuer
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      bookUrl: ''
    }
  },
  async created() {
    // Fetch the book URL when the component is created
    const response = await axios.get(`/api/books/${this.id}`)
    this.bookUrl = response.data.url
  }
}
</script>

<style scoped>
.book-reader {
  /* Add some styles for the book reader component here */
}
</style>
