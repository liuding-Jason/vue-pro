<template>
	<div>
		<div class="item-con" v-for="item in listData" :data="item">
			<list-item :data="item" :tap="_onClick"></list-item>
		</div>
	</div>
</template>
<script>
	import listItem from "./listItem" ; 
	export default {
		props : {
			listData :  {
				type : Array ,
				default : []
			} ,
			onClick : {
				type : Function ,
				default : () => {}
			}
		} ,
		data (){
			return {
			}
		} ,
		components : { listItem } ,
		methods : {
			_onClick (params){
				// console.log(ev.target) ;
				// let idNow = ev.target.getAttribute("id") ;
				// let tProps = {} ;
				// this.listData.map((item , infdex) => {
				// 	let {id , title , describeInfo} = item ;
				// 	if(idNow * 1 === id * 1){
				// 		// 这里返回的是计算属性
				// 		// return item 行不通
				// 		return tProps = {id , title , describeInfo} ;
				// 	}
				// });
				// this.onClick(tProps) ;
				this.onClick(params);
			}
		} ,
		mounted(){
			console.log("List") ;
		}
	}

</script>

<style scoped>

.item-con {
	overflow: hidden ;
	position: relative;
	border-bottom: 1px solid #ccc ;
	position: relative;
}

</style>