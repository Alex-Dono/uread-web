import { createRouter, createWebHistory } from 'vue-router'
import BookList from './components/BookList.vue'
import UploadForm from './components/UploadForm.vue'
import BookReader from './components/BookReader.vue'

const routes = [
  {
    path: '/',
    name: 'book-list',
    component: BookList
  },
  {
    path: '/upload',
    name: 'upload-form',
    component: UploadForm
  },
  {
    path: '/book/:id',
    name: 'book-reader',
    component: BookReader,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router