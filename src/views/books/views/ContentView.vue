<template>
  <div class="content-container">
    <div class="content-body">
      <div class="content-title">{{ title }}</div>
      <div
        v-for="(line, index) in content.split('\n')"
        :key="index"
        class="content-line"
      >
        {{ line }}
      </div>
    </div>
    <el-button class="content-next" type="text" @click="goNext">下一章</el-button>
  </div>
</template>

<script>
import { getBookSectionInfo, getBookNextSection, getBookSectionContent } from "@/api/books";

export default {
  name: "ContentView",
  data() {
    return {
      bookId: '',
      sectionId: '',
      title: '',
      next: '',
      content: ''
    }
  },
  created() {
    this.bookId = this.$route.params.bookId
    this.sectionId = this.$route.params.sectionId
  },
  mounted() {
    this.loadContent();
    this.loadSectionInfo();
    this.loadNext();
  },
  methods: {
    loadContent() {
      getBookSectionContent(this.sectionId).then(
        response => {
          if (response.data.length > 0) {
            this.content = response.data[0]['body']
          }
        }
      )
    },
    loadSectionInfo() {
      getBookSectionInfo(this.sectionId).then(
        response => {
          this.title = response.data.title;
        }
      )
    },
    loadNext() {
      getBookNextSection(this.sectionId).then(
        response => {
          this.next = response.data.id;
        }
      )
    },
    goNext() {
      this.$router.push(
        '/books/' + this.bookId + '/sections/' + this.next
      )
    }
  }
}
</script>

<style scoped>
.content-body {
  margin: 20px;
  white-space: pre-wrap;
}
.content-title {
  margin: 0 auto;
  font-size: 1.5em;
  text-align: center;
}
.content-line {
  line-height: 25px;
  padding-top: 15px;
}
.content-next {
  font-size: 1.5em;
  margin: 0px 40px 20px 20px;
  float: right;
}
</style>
