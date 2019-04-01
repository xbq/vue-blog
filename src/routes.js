import ShowBlogs from './components/showBlogs.vue'
import AddBlog from './components/AddBlog.vue'
import SingleBlog from './components/SingleBlog.vue'
export default [
    { path: '/', component: ShowBlogs },
    { path: '/add', component: AddBlog },
    { path: '/blog/:id', component: SingleBlog }
]