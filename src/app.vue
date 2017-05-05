<template>
  <transition name="path-fade" mode="out-in">
    <!-- 路由匹配到的组件将渲染在这里 -->
    <div>
      <router-view></router-view>
      <nav-list ></nav-list>
    </div>
  </transition>
</template>

<script>

  import SetDpr from "./util/dpr" ;
  import navList from "./components/navlist.vue" ;
  export default {
    name : 'app',
    data(){
      return {
        'title' : 'Vue Demo'
      }
    } ,
    components: {
      navList
    } ,
    methods : {
      init(){
        console.log("project init finish") ;
      } ,
      add(num1 , num2){
        return num1 + num2 ;
      }
    } ,
    mounted (){
      console.log("init");
      new SetDpr().set() ;
    }
  }
</script>

<style>
.path-fade-enter-active, .path-fade-leave-active {
      transition: opacity .3s;
  }
.path-fade-enter, .path-fade-leave {
    opacity: 0;
}
</style>