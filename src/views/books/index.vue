<template>
  <div class="book-container">
    <book-view
      v-for="(book, index) in books"
      :key="index"
      :book-id="book.id"
      :title="book.title"
    />
  </div>
</template>

<script>
import { getBooks } from "@/api/books";
import BookView from "./views/BookView";

export default {
  name: "Books",
  components: {
    BookView
  },
  data() {
    return {
      books: []
    }
  },
  mounted() {
    this.loadBooks();
  },
  methods: {
    loadBooks() {
      getBooks().then(
        response => {
          this.books = response.data.results;
        }
      )
    }
  }
}
</script>

<style scoped>

</style>
