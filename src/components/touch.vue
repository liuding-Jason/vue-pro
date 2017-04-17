<template>
	<div class="touch-con" @touchStart="_touchStart" @touchEnd="_touchEnd">
		<h1>touch</h1>

	</div>
</template>

<script >
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

			}
		} ,
		methods : {
			_touchStart(ev) {
				console.log("touchStart");
			} ,
			_touchEnd(ev) {
				console.log("touchEnd");
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
	height: 100px ;
	border:1px solid #ccc ;
	background-color: red ;
}

</style>
