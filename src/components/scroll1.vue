<template>
	<div class="scroll-con" @touchstart.prevent.stop="_touchStart($event)" @touchmove.stop.prevent="_touchMove($event)" @touchend.stop.prevent="_touchEnd($event)">
		<div class="scroll-info" :style="{ transform: 'translate3d(0, ' + top + 'px, 0)' }">
			<div>1</div>
			<div>2</div>
			<div>3</div>
			<div>4</div>
			<div>5</div>
			<div>6</div>
			<div>7</div>
		</div>
	</div>
</template>

<script >
	export default {
		props : {

		} ,
		data(){
			return {
				top : 0 ,
				startX : 0 ,
				startY : 0 ,
				tempY : 0 ,
				moveY : 0 ,
				loadMoreTime : 0 ,
				loadMoreFlag : true ,
				touchStartTime : 0 ,
				touchEndTime : 0
			}
		} ,
		components : {} ,
		methods : {
			_touchStart(ev){
				this.startX = ev.targetTouches[0].pageX ;
				this.startY = ev.targetTouches[0].pageY ;
				// 开始滚动的距离. this.$el 表示根元素
				this.startScroll = this.$el.scrollTop || 0 ;
			} ,
			_touchMove(ev){
				let endY = ev.targetTouches[0].pageY ;
				let diff = ev.targetTouches[0].pageY - this.tempY || this.startY
				console.log(ev.targetTouches[0].pageY - this.tempY);
				diff > 0 ? this.top -= Math.pow(diff, 0.8) 
						 : this.top -= Math.pow(Math.abs(diff) , 0.8) ;

				this.tempY = ev.targetTouches[0].pageY ;

			} , 
			_touchEnd(ev){
				let endX = ev.changedTouches[0].pageX ,
					endY = ev.changedTouches[0].pageY ;


				this.tempY = 0 ;
			} ,
			loadMoreFun(){
				console.log("loadMoreFun");
			}
		} ,
		mounted(){
			console.log("scroll");
		}
	}

</script>

<style scoped>
.scroll-con {
	overflow: hidden ;
	-webkit-overflow-scrolling: touch ;
	
	/*test*/
	background-color : lightgreen ;
	position: fixed;
	height: 100% ;
	width: 100% ;

}

.scroll-info {
	height: auto ;
	width: 100% ;
}

.scroll-info div {
	height: 200px ;
	border-bottom: 3px solid #ccc ;
}

</style>