
import Vue from "vue" ;
import VueRouter from "vue-router" ;
import VueResource from "vue-resource" ;
import Icon from 'vue-svg-icon/Icon.vue';

import Router from "./routes" ;
import store from "./store"
import App  from "./app.vue" ; 

Vue.use(VueRouter) ;

// svg icon
Vue.component('icon', Icon);
//Icon.inject('right'); // SVG图片名字（无扩展名）


const app = new Vue({
	store ,
	router: new VueRouter(Router),
	render: h => h(App)
}).$mount('#app') ;
