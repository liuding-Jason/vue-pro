<template>
	<div class="scroll-con" @scroll.stop.prevent="_onScroll($event)">
		<div class="scroll-content">
			<div>1</div>
			<div>2</div>
			<div>3</div>
			<div>4</div>
			<div>5</div>
			<div>6</div>
			<div>7</div>
		</div>
		<div class="scroll-icon">
			<span></span>
		</div>
	</div>
</template>

<script>
	export default {
		props : {
			infinite : {
				type : Number ,
				default : 10
			} ,
			loadFinish : {
				type : Function ,
				default : function(){}
			}
		} ,
		data(){
			return {
				tempScrollTop : 0 ,
				delay : 300 ,   // loadmore delay time
				loadfalg : true , // loadmore flag
				loadtime : 0.    // loadmore time
			}
		} ,
		methods : {
			_onScroll(ev){
				// scrollHeight -- 滚动内容的高度
				// offsetHeight -- 滚动区域的高度
				// scrollTop    -- 可滚动的距离

				// el.WebKitOverflowScrolling = 'auto';
				// el.scrollTop = 500;
				// el.WebKitOverflowScrolling = 'touch';

				// 去掉上滚触发
				if(ev.target.scrollTop < this.tempScrollTop + 10){
					this.tempScrollTop = ev.target.scrollTop ;
					return ;
				}
				let diff = ev.target.scrollHeight - ev.target.offsetHeight - ev.target.scrollTop ;
				let infiniteDis = this.infinite / 100 * ev.target.scrollTop ;
				this.tempScrollTop = ev.target.scrollTop ;

				if(diff < infiniteDis && this.loadfalg){
					this.loadmore() ;
				}
			} ,
			loadmore(){
				// 防止重复加载
				this.loadfalg = false ;
				this.loadtime = setTimeout(() => {
					this.loadfalg = true ;
				} , this.delay);

				console.log("loadmore");
			} ,

		} ,
		mounted (){
			// TODO test
			console.log("scroll");
		}
	}	

</script>

<style scoped>
.scroll-con {
	-webkit-overflow-scrolling : touch ;
	overflow-y: auto ;

	/*test*/
	background-color: lightgreen ;
	position: relative;
	height: 100% ;
	width: 100%;
}

.scroll-content {

}

.scroll-content div {
	height: 200px;
	border-bottom: 3px solid #ccc ;
}

</style>