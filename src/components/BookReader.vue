<template>
  <div class="book-reader">
    <pdfvuer v-if="bookUrl" :src="bookUrl" />
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
    const response = await axios.get(`/api/book?id=${this.id}`, { responseType: 'blob' })
    console.log(response.data.url)
    const blob = new Blob([response.data], { type: 'application/pdf' })
    this.bookUrl = URL.createObjectURL(blob)
    console.log(this.id)
  }
}
</script>

<style scoped>
.book-reader {
  /* Add some styles for the book reader component here */
}
</style>
