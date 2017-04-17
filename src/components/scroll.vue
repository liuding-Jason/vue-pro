<template>
	<div class="scroll-con" @touchstart="_touchStart($event)" @touchmove="_touchMove($event)" @touchend="_touchEnd($event)" >
		

	</div>
</template>

<script >
	export default {
		props : {

		} ,
		data(){
			return {
				startX : 0 ,
				startY : 0 ,
				touchStartTime : 0 ,
				touchEndTime : 0
			}
		} ,
		components : {} ,
		methods : {
			_touchStart(ev) {
				this.startX = ev.targetTouches[0].pageX ;
				this.startY = ev.targetTouches[0].pageY ;
				this.touchStartTime = new Date().getTime() ;

				console.log("touchStart") ;
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

			}
		} ,
		mounted(){
			console.log("scroll");
		}
	}

</script>

<style scoped>
.scroll-con {
	overflow: auto ;
	
	/*test*/
	background-color : lightgreen ;
	position: fixed;
	height: 100% ;
	width: 100% ;

}

</style>