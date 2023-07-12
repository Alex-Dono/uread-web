<template>
    <form @submit.prevent="uploadBook" enctype="multipart/form-data">
      <input v-model="title" type="text" placeholder="Title" required>
      <input v-model="author" type="text" placeholder="Author" required>
      <input type="file" @change="onFileChange" required>
      <button type="submit">Upload</button>
    </form>
  </template>
  
  <script>
  import axios from 'axios';

  export default {
    data() {
      return {
        title: '',
        author: '',
        file: null
      }
    },
    methods: {
      onFileChange(e) {
          this.file = e.target.files[0];
      },
      async uploadBook() {
        // Create a new FormData object
        const formData = new FormData()
  
        // Add the title, author, and file to the form data
        formData.append('title', this.title)
        formData.append('author', this.author)
        formData.append('file', this.file)
  
        try {
          await axios.post('/api/upload', formData)

           // Clear the form
          this.title = ''
          this.author = ''
          this.file = null

          // Show a success message
          alert('Book uploaded successfully')
        } catch (error) {
          // Show an error message
          alert('Failed to upload book')
        }
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add some styles for the upload form component here */
  </style>
  