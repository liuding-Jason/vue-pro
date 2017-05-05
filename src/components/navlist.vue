<template>
	<div class="nav-bar flex-h">
	    <div class="nav-bar-item flex1 flex-h flex-hc flex-vc" v-for="item in list">
	    	<a href="item['hash']">
	    		<icon></icon>
	    		<span>{{item['title']}}</span>
	    	</a>
	    </div>
  	</div>
</template>

<script>
	export default {
		props : {
		} ,
		data(){
			return {
				list : [{
					title : '主页' ,
					alias : 'home' ,
					hash : '#/home' ,
					defIcon : '' ,	// 默认状态图标
					actIcon : ''	// 激活状态图标
				} , {
					title : '资讯' ,
					alias : 'consultation' ,
					hash : '#/Consultation' ,
					defIcon : '' ,
					actIcon : ''
				} , {
					title : '发现' ,
					alias : 'find' ,
					hash  : '#/find' ,
					defIcon : '' ,
					actIcon : ''
				} , {
					title : '个人' ,
					alias : 'personal' ,
					hash  : '#/personal' ,
					defIcon : '' ,
					actIcon : ''
				}]
			}
		} ,
		mounted(){
			console.log("nav");
		}
	}
</script>

<style scoped>
.nav-bar{
  position: fixed;
  bottom: 0 ;
  left: 0 ;
  z-index: 100 ;
  height: 2rem ;
  width: 100% ;
  background-color: red ;
}

.nav-bar-item {

}

</style>

