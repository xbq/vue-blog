<template>
  <div id="app">
    <AddBlog/>
    <showBlogs></showBlogs>
  </div>
</template>

<script>
import AddBlog from './components/AddBlog.vue'
import showBlogs from './components/showBlogs.vue'
export default {
  name: 'app',
  components: {
    AddBlog,
    showBlogs
  }
}
</script>

<style>

</style>
