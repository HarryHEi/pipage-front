<template>
  <el-button type="primary" @click="showSections">{{ title }}</el-button>
</template>

<script>
export default {
  name: "BookView",
  props: {
    bookId: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    showSections() {
      this.$router.push('/books/' + this.bookId + '/' + 'sections')
    }
  }
}
</script>

<style scoped>

</style>
