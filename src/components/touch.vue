<!-- 
	Touch Component : Only Tap and Press are supported by now .
	Problems : tap fun would delay 300ms when used in phone . How to deal with it ! 
 -->

<template>
	<div class="touch-con" @touchstart="_touchStart($event)" @touchmove="_touchMove($event)" @touchend="_touchEnd($event)">
		<div class="touch-child"> 

		</div>
	</div>
</template>

<script >

	// 延迟时间 
	const tapTime = 300 ;
	const pressTime = 1500 ;
	// 移动像素
	const tapDistance = 15 ;
	const pressDistance = 15 ;

	export default {
		props : {
			tap : {
				type : Function ,
				default : function(){}
			} ,
			doubleTap : {
				type : Function ,
				default : function(){}
			} ,
			press : {
				type : Function ,
				default : function(){}
			} ,
			swiperLeft : {
				type : Function ,
				default : function(){}
			} ,
			swiperRight : {
				type : Function ,
				default : function(){}
			} ,
			swiperUp : {
				type : Function ,
				default : function(){}
			}
		} ,
		data (){
			return {
				startX : 0 ,
				startY : 0 ,
				touchStartTime : 0 ,
				touchEndTime : 0 
			}
		} ,
		methods : {
			_touchStart(ev) {
				this.startX = ev.targetTouches[0].pageX ;
				this.startY = ev.targetTouches[0].pageY ;
				this.touchStartTime = new Date().getTime() ;
			} ,
			_touchMove(ev) {
				let endX = ev.targetTouches[0].pageX ,
					endY = ev.targetTouches[0].pageY ;
				console.log("touchMove");
			} ,
			_touchEnd(ev) {
				let endX = ev.changedTouches[0].pageX ,
					endY = ev.changedTouches[0].pageY ;
				this.touchEndTime = new Date().getTime() ;

				// tap 
				if(Math.abs(endX - this.startX) < tapDistance && Math.abs(endY - this.startY) < tapDistance && (this.touchEndTime - this.touchStartTime) < tapTime){
					this.tapFun();
					return ;
				}

				// press 
				if(Math.abs(endX - this.startX) < pressDistance && Math.abs(endY - this.startY) < pressDistance && (this.touchEndTime - this.touchStartTime) < pressTime){
					this.pressFun() ;
					return ;
				}	

				this.resetTime() ;
				console.log("touchEnd");
			} ,
			resetTime(){
				this.startX = 0 ;
				this.startY = 0 ;
				this.touchStartTime = 0 ;
				this.touchEndTime = 0 ;
			} ,
			tapFun(){
				//alert("tap");
				console.log("tap") ;
				this.tap();

			} ,
			pressFun(){
				//alert("press") ;
				this.press() ;
			}

		} ,
		mounted (){
			console.log(this);
			console.log("touch");
		}
	}

</script>

<style scoped>

.touch-con {
	position: relative ;
	overflow: hidden ;
}

.touch-child {
	height: auto ;
	width: 100% ;
	/*height: 100px ;
	background-color: green ;
	left: 0 ;
	top: 0 ;*/
}

</style>
