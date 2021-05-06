import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'
import Hello from './Hello.vue'
import VueRouter from 'vue-router'
Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
    { path: '/', component: Hello },
    { path: '/Home', component: Home }
]
  
const router = new VueRouter({
    mode: 'history',
    routes // (缩写) 相当于 routes: routes
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
