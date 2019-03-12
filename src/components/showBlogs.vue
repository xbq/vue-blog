<template>
  <div v-theme:column="'wide'" id='show-blogs'>
    <h1>博客总览</h1>
    <div class='single-blog' v-for="(blog,index) in blogs" :key="index">
      <h2 v-rainbow>{{blog.title}}</h2>
      <p>{{blog.body}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      blogs:[]
    }
  },
  created(){
    this.$http.get("https://jsonplaceholder.typicode.com/posts")
    .then(data=>{
      this.blogs = data.body.slice(0,10)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #show-blogs{
    max-width: 800px;
    margin: 0 auto;
  }
  .single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background-color: antiquewhite
  }
</style>
