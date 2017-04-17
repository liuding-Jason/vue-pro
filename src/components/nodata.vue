<template>
	<div class="nodata-con flex flex-vc flex-hc">
		<div>	
			<div class="nodata-img"><span></span></div>
			<p class="nodata-content">{{content}}</p>	
		</div>
	</div>
</template>

<script >
	export default {
		props : {
			content : {
				type : String ,
				default : "暂无数据"
			}
		} ,
		data(){
			return {

			}
		} ,
		mounted(){
			// TODO test
			console.log("noDdata");
		}

	}

</script>

<style scoped>


.nodata-img {
	text-align: center;
}

.nodata-img span {
	display: inline-block ;
	height: 75px ;
	width: 75px ;
	background-color: rgba(0 , 0 , 0 , 0.5);
}

.nodata-content {
	width: 100% ;
	text-align: center;
	font-size: 13px ;
	margin-top: 10px ;
}

	
</style>