<template>
	<div class="nav-bar flex-h topic-border-top">
	    <div class="nav-bar-item flex1 flex-h flex-hc flex-vc" v-for="item in list">
	    	<a :class="'flex-v flex-vc topic-base-font ' + item['active']" :href="item['hash']" >
	    		<icon v-if="item['active'] === 'active'" :name="item['actIcon']" :scale="3.2"></icon>
	    		<icon v-else :name="item['defIcon']" :scale="3.2"></icon>
	    		<span class="nav-bar-title">{{item['title']}}</span>
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
					hash : '/home' ,
					defIcon : 'home' ,		// 默认状态图标
					actIcon : 'home-ac',	// 激活状态图标
					active : location.pathname.indexOf("/home") >= 0 ? 'active' : ''
				} , {
					title : '资讯' ,
					alias : 'consultation' ,
					hash : '/consultation' ,
					defIcon : 'consultation' ,
					actIcon : 'consultation-ac' ,
					active : location.pathname.indexOf("/consultation") >= 0 ? 'active' : ''
				} , {
					title : '购物车' ,
					alias : 'shopcar' ,
					hash  : '/shopcar' ,
					defIcon : 'shopcar' ,
					actIcon : 'shopcar-ac' ,
					active : location.pathname.indexOf("/shopcar") >= 0 ? 'active' : ''
				} , {
					title : '个人' ,
					alias : 'personal' ,
					hash  : '/personal' ,
					defIcon : 'personal' ,
					actIcon : 'personal-ac' ,
					active : location.pathname.indexOf("/personal") >= 0 ? 'active' : ''
				}]
			}
		} ,
		mounted(){
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
  background-color : #fbfbfb ;
}

.nav-bar-item {

}

.nav-bar-title{
	font-size : .4rem ;
	letter-spacing : .01rem ;
}

</style>

