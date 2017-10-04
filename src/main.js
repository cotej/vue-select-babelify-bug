var Vue = require('vue')

var VueSelect = require('vue-select')
Vue.component('v-select', VueSelect)

var Hello = require('./Hello.vue')
Vue.component('hello', Hello)

new Vue({
  el: '#app',
  data: {}
})