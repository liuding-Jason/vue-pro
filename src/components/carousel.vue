<template>
	<div class="carousel-con">
		<div class="carousel-img-con">
			<div class="carousel-img-item fixAuto" v-for="item in data" :data="item">
				<img :src="item['imgUrl']"  />
			</div>
		</div>
		<div class="carousel-controller-con" >
			<span class="topic-border" v-for="item in data"></span>
		</div>
	</div>
</template>

<script >
	export default {
		props : {
			data : {
				type : Array ,
				default : []
			} ,
			setting : {
				itemDefColor : "" || "#FFFFFF" ,
				itemActColor : "" || '#FF8E6B' ,
				during : 1500
			}
		} ,
		data(){
			return {

			}
		} ,
		methods : {
			hello(){
			}
		} ,
		mounted(){
			console.log("carousel") ;
		}
	}
</script>

<style scoped>
.carousel-con {
	overflow: hidden ;
	position: relative ;
}

.carousel-img-con {

}

/*.carousel-img-item:before{
	margin-top: 31.2%;
}*/

.carousel-img-item {
	
}

.carousel-img-item img{
	width: 100% ;
	float: left ;  /* 消除换行3像素的问题 */
}

.carousel-controller-con {
	position: absolute ;
	bottom: .2rem ;
	right: .3rem ;
	text-align: right ;
}

.carousel-controller-con span {
	display: inline-block ; 
	border-radius: 50% ;
	height: 14px ;
	width: 14px ;
	margin-right: 6px ; 
	background-color: #ffffff ;
	opacity: .8 ;
}

</style>