var Vue = require('vue')

var VueSelect = require('vue-select')
Vue.component('v-select', VueSelect)

new Vue({
  el: '#app',
  data: {
    foo: 'bar'
  }
})