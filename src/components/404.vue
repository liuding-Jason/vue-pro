<template>
	<div class="no-page-con flex flex-vc flex-hc">
		<span>404</span>
	</div>
</template>

<script type="text/javascript">
	export default {
		data(){
			return {

			}
		},
		mounted(){
			// TODO test
			//console.log("404");
		}
	}
</script>

<style scoped>
.no-page-con {
	width: 100% ;
	height: 100% ;
}

.no-page-con span{
	font-size: 2rem ;
	font-weight: 600 ;
	letter-spacing: 5px;
	-webkit-transform: translate(0 , -50%);
  	-moz-transform:translate(0 , -50%);
  	transform: translate(0 , -50%);
}
</style>