import common from './../src/css/style.css'
// import './../src/css/style.css'
// document.write('来自main.js的问候！come on')
//axios占用的端口不能和本地的服务器端口一样
import axios from 'axios';

// import Vuex from 'vuex'
// import mystore from './store'

import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import App from './App.vue'
//Vue.prototype上面没有挂载$ajax,为了使用方便赋予其值
Vue.prototype.$ajax = axios;
console.log(Vue.prototype.$ajax);
// axios.get('/userInfo',{params:{}}).then((returnData)=>{
// 				})
//这回mock/router.json便起作用了(其实就是将url变了一个形式而已)
axios.get('/user/getInfo',{params:{}}).then(function(response){
    		console.log(response);
    	})

//Vue.$ajax = Vue.prototype.$ajax;
Vue.use(VueRouter)
const router = new VueRouter({
	routes
	//routes是一个数组
})

new Vue({
  el: '#app',
  router:router,
  render: h => h(App)
})

//axios 是一个基于Promise用于浏览器和nodejs的HTTP客户端，它的特点是：
//从浏览器中创建 XMLHttpRequest
//json-server 后端开启一个服务器

