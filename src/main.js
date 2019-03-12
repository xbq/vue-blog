import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueResource);

//自定义指令
Vue.directive('rainbow', {
    bind(el) {
        el.style.color = '#' + Math.random().toString(16).slice(2, 8);
    }
})

//自定义指令
Vue.directive('theme', {
    bind(el, binding) {
        if (binding.arg == 'column') {
            el.style.padding = '20px';
            el.style.background = '#a60'
        }

        if (binding.value == 'wide') {
            el.style.maxWidth = '1000px';
        }
    }
})

//v-theme:column="'wide'"  其中theme为自定义指令  column为arg  'wide'为value
new Vue({
    render: h => h(App),
}).$mount('#app')