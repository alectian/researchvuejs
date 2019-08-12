// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

var myData = {
  a: 1
}

/* eslint-disable no-new */
var app = new Vue({
  /*
    用于指定一个页面中已存在的DOM元素来挂载Vue实例
    挂载之后，可通过app.$el来访问该元素,
    vue提供了很多常用的实例属性与方法
    都以$开头
  */
  el: '#app',
  components: { App },
  template: '<App/>',
  data: myData
})

console.log(app.$el)

/*
  除了在vue实例内部显示生命数据外，
  也可以指向一个已有变量，
  并且他们之间默认建立了双向数据绑定，
  当修改其中任意一个时，另一个也会一起变化
*/
app.a = 2
console.log(myData.a)
myData.a = 3
console.log(app.a)
