<template>
	<div class="nodata-con flex flex-vc flex-hc">
		<div>	
			<div class="nodata-img">
				<span>
					<icon name="nodata" :scale="6"></icon>
				</span>
			</div>
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

.nodata-con {
	width: 100% ;
	height: 100% ;
}

.nodata-con>div{
	-webkit-transform: translate(0 , -50%);
  	-moz-transform:translate(0 , -50%);
  	transform: translate(0 , -50%);
}

.nodata-img {
	text-align: center;
}

.nodata-img span {
	display: inline-block ;
	height: 65px ;
	width: 65px ;
}

.nodata-content {
	width: 100% ;
	text-align: center;
	font-size: 13px ;
	margin-top: 8px ;
}

	
</style>