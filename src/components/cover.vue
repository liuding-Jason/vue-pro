<!--
	cover  
 -->

<template>
	<div class="cover-con">
		<slot></slot>
	</div>
</template>

<script >
	export default {
		data(){
			return {

			}
		}
	}
</script>

<style scoped>
.cover-con {
	position: relative ;
	height: 100% ;
	width: 100% ;

	overflow: hidden;
	
	background-color: rgba(0 , 0 , 0 , 0.5);
}

</style>