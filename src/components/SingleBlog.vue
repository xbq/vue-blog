<template>
  <div id="single-blog">
    <h2>{{blog.title}}</h2>
    <div id="preview">
      {{blog.body}}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id:this.$route.params.id,
      blog: {},
      authors: ["xbq", "hs"]
    };
  },
  created(){
    this.$http.get('https://jsonplaceholder.typicode.com/posts/'+this.id).then(res=>{
      console.log(res);
      this.blog=res.body;
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#single-blog{
  margin:20px auto;
  max-width:1200px;
  padding:20px;
  background-color: #eee;
  border:1px dotted #aaa
}

h3{
  margin-top: 10px;
}
</style>
