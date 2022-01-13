import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

/* Components */
import HeaderNav from './Components/HeaderNav/HeaderNav.vue'
import SidebarNav from './Components/SidebarNav/SidebarNav.vue'
import MainContent from './Components/MainContent/MainContent.vue'
import ProductGrid from './Components/MainContent/ProductGrid.vue'

/* Boostrap */
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

/* Vue Router */
Vue.use(VueRouter)
const routes = [
  { path: "/", redirect: '/product-grid/1', component: ProductGrid },
  { path: "/product-grid/:id", name: "product-grid", component: ProductGrid },
]

const router = new VueRouter({
  routes,
  mode: "history"
})

/* Call components */
Vue.component('header-nav', HeaderNav)
Vue.component('sidebar-nav', SidebarNav)
Vue.component('main-content', MainContent)
Vue.component('product-grid', ProductGrid)

/* Filters */

Vue.filter('truncate', function (text, length, clamp) {
  clamp = clamp || '...';
  var node = document.createElement('div');
  node.innerHTML = text;
  var content = node.textContent;
  return content.length > length ? content.slice(0, length) + clamp : content;
})

Vue.filter('clp', function (value) {
  if (!value) return ''
  value = value.toLocaleString('es-CL')
  return "$"+value;
})

/* VUE */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
