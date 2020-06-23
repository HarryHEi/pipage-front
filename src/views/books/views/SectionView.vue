<template>
  <div class="section-container">
    <div
      v-for="(section, index) in sections"
      :key="index"
      class="section-item"
    >
      <el-button type="text" @click="showContent(section)">{{ section.title }}</el-button>
    </div>
  </div>
</template>

<script>
import { getBookSections } from "@/api/books";

export default {
  name: "SectionView",
  data() {
    return {
      bookId: '',
      sections: []
    }
  },
  created() {
    this.bookId = this.$route.params.bookId
  },
  mounted() {
    this.loadSections();
  },
  methods: {
    loadSections() {
      getBookSections().then(
        response => {
          this.sections = response.data
        }
      )
    },
    showContent(section) {
      this.$router.push('/books/' + this.bookId + '/sections/' + section.id)
    }
  }
}
</script>

<style scoped>
.section-container {
  margin: 20px;
}
.section-item {
}
</style>
