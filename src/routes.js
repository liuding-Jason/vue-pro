
import Home from "./pages/home.vue" ;
import List from "./pages/List.vue" ;
import Msite from "./pages/msite/index.vue" ;
import Nodata from "./components/nodata.vue" ;
import Scroll from "./components/scroll.vue" ;
import Cover from "./components/cover.vue";
import Loading from "./components/loading.vue";

export default {
  mode: 'history',
  base: __dirname,
  routes: [
  	{ path : '/' , redirect : '/home' } ,			// 默认路由
    { path : '/msite/' , component : Msite } ,
    { path : '/home' , component : Home } ,
    { path : '/consultation' , component : List } ,
    { path : '/shopcar' , component : Nodata } ,
    { path : '/personal' , component : Scroll } ,
  ]
};


/* 子路由嵌套
{ 
  path: '/home' , 
  component: Home , 
  children : [{
    path : "/home/title" ,
    component : Title
  } , {
    path : "/home/header" ,
    component : Header
  }] }
*/