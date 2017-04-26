<template>
	<touch :tap="_tap">
		<div class="item-cover" :id="data['id']"></div>
		<div class="item-con-thumb">
			<div class="con-thumb" ></div>
		</div>
		<div class="item-con-info">
			<div class="info-title">{{data['title']}}</div>
			<div class="info-des">{{data['describeInfo']}}</div>
		</div>
	</touch>
</template>

<script >
	import touch from "./touch" ;
	export default {
		props : {
			data : {
				type : Object ,
				default : {}
			} ,
			tap : {
				type : Function ,
				default : () => {}
			}
		} ,
		data(){
			return {

			}
		} ,
		components : { touch } ,
		methods : {
			_tap(){
				this.tap(this.data);
			}
		} ,
		mounted(){
			console.log("list-item");
		}
	}
</script>

<style scoped>


.item-cover {
	position: absolute;
	z-index: 100 ;
	width: 100% ;
	height: 2.5rem ;
}

.item-con-thumb {
	height: 2.5rem ;
	width: 2.5rem ;
	max-height: 150px;
	max-width: 150px;
	position: absolute;
	left: 0 ;
	top: 0 ;
	padding: 10px ;
}

.con-thumb{
	width: 100% ;
	height: 100% ;
	background-repeat: no-repeat;
	background-size: cover ;
}

.item-con-info{
	margin-left: 2.55763rem ;
	height: 2.5rem ;
	max-height: 150px;
}

.item-con-info .info-title{
	font-weight: 700 ;
	font-size: .65rem ;
	padding-top: 10px;
	width: 100% ;
}

.item-con-info .info-des{
	width: 100% ;
	font-size: .45rem ;
	margin-top:10px ;
	word-break:keep-all;
	/* white-space:nowrap; */
	overflow:hidden ;
	text-overflow:ellipsis;
}

</style>