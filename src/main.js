import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App.vue'
import Routes from './routes'

Vue.config.productionTip = false
Vue.use(VueResource);
Vue.use(VueRouter);
//自定义指令
// Vue.directive('rainbow', {
//     bind(el) {
//         el.style.color = '#' + Math.random().toString(16).slice(2, 8);
//     }
// })

//自定义指令   //v-theme:column="'wide'"  其中theme为自定义指令  column为arg  'wide'为value
// Vue.directive('theme', {
//     bind(el, binding) {
//         if (binding.arg == 'column') {
//             el.style.padding = '20px';
//             el.style.background = '#a60'
//         }

//         if (binding.value == 'wide') {
//             el.style.maxWidth = '1000px';
//         }
//     }
// })

// //自定义过滤器
// Vue.filter('to-uppercase', function(value) {
//     return value.toUpperCase();
// })

// Vue.filter('snippet', function(value) {
//     return value.slice(0, 20) + '...';
// });

//创建路由
const router = new VueRouter({
    routes: Routes,
    mode: "history"
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')