<template>
  <div v-theme:column="'wide'" id="show-blogs">
    <h1>博客总览</h1>
    <input type="text" placeholder="请输入关键字搜索" v-model="keyword">
    <div class="single-blog" v-for="(blog,index) in filterBlogs" :key="index">
      <router-link v-bind:to="'/blog/'+blog.id">
        <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
      </router-link>
      <p>{{blog.body|snippet|toUppercase}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: [],
      keyword: ""
    };
  },
  created() {
    this.$http.get("https://jsonplaceholder.typicode.com/posts").then(data => {
      this.blogs = data.body.slice(0, 10);
    });
  },
  computed: {
    filterBlogs: function() {
      return this.blogs.filter(blog => {
        return blog.title.match(this.keyword);
      });
    }
  },
  filters: {
    toUppercase: value => {
      return value.toUpperCase();
    },
    snippet: value => {
      return value.slice(0, 20) + "...";
    }
  },
  directives: {
    rainbow: {
      bind: el => {
        el.style.color =
          // "#" +
          // Math.random()
          //   .toString(16)
          //   .slice(2, 8); //比较高级的实现方法，随机数转为16进制，然后截取小数点后的6位，从索引为2到索引为8的部分
          `rgb(${Math.round(Math.random() * 255)},${Math.round(
            Math.random() * 255
          )},${Math.round(Math.random() * 255)})`;
      }
    },
    theme: {
      bind: (el, binding) => {
        if (binding.arg == "column") {
          el.style.padding = "20px";
          el.style.background = "#a60";
        }

        if (binding.value == "wide") {
          el.style.maxWidth = "1000px";
        }
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background-color: antiquewhite;
}
</style>
