<template>
	<div class="scroll-con" @touchstart="_touchStart($event)" @touchmove="_touchMove($event)" @touchend="_touchEnd($event)" >
		

	</div>
</template>

<script >
	export default {

		data(){
			return {

			}
		} ,
		components : {} ,
		methods : {
			_touchStart(){

			} ,
			_touchMove(){

			} ,
			_touchEnd(){

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
	background-color:green ;
}

</style>