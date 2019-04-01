<template>
  <div id="app">
    <BlogHeader></BlogHeader>  
    <router-view></router-view>
  </div>
</template>

<script>
import BlogHeader from './components/BlogHeader.vue'
export default {
  name: 'app',
  components: {
    BlogHeader
  }
}
</script>

<style>

</style>
