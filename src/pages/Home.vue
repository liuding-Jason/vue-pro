<template>
	<div>
		<carousel :data="carouselData" :setting="carouselSetting" />
	</div>
</template>

<script>
	import carousel from "../components/carousel.vue" ;
	export default {
		props : {
			title : {
				type : String ,
				default : "主页" 
			}
		} ,
		data(){
			return {

				// TODO test datas
				carouselData : [{
					title : "1" ,
					imgUrl : "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495619323753&di=b96be9551d93ddbabaa3e81295696af0&imgtype=0&src=http%3A%2F%2Fpic2.ooopic.com%2F13%2F24%2F51%2F04b1OOOPIC33.jpg"
				} , {
					title : "2" ,
					imgUrl : "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495619323744&di=e96fd18f7132f30accbd5f56ea3ba74c&imgtype=0&src=http%3A%2F%2Fpic2.ooopic.com%2F12%2F09%2F64%2F46bOOOPICf5_1024.jpg"
				} , {
					title : "3" ,
					imgUrl : "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495619323758&di=9efb34dfd71d8752573a07c08405600f&imgtype=0&src=http%3A%2F%2Fpic2.ooopic.com%2F13%2F58%2F40%2F86bOOOPIC48_1024.jpg"
				}] ,
				carouselSetting : {}
			}
		} ,
		components : {
			carousel
		} ,
		mounted(){
			console.log("Home");
		}

	}
</script>

<style scoped>
	

</style>