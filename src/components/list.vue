<template>
	<div>
		<div v-for="item in list" :data="item">
			<a class="item-con" @click="onClick"> 
				<div class="item-con-thumb">
					<div class="con-thumb" ></div>
				</div>
				<div class="item-con-info">
					<div class="info-title">{{item['title']}}</div>
					<div class="info-des">{{item['describeInfo']}}</div>
				</div>
			</a>
		</div>
	</div>
</template>

<script>
	
	export default {
		props : [] ,
		data (){
			return {
				list : [{
					thumbnail : '' ,
					title : 'ListItem1' ,
					describeInfo : 'ListItem Component1' ,
					onClick : function(){}
				} , {
					thumbnail : '' ,
					title : 'ListItem2' ,
					describeInfo : 'ListItem Component2' ,
					onClick : function(){}
				} , {
					thumbnail : '' ,
					title : 'ListItem3' ,
					describeInfo : 'ListItem Component3' ,
					onClick : function(){}
				}]
			}
		} ,
		components : {} ,
		mounted(){
			console.log("mounted");
		}
	}


</script>

<style scoped>

.item-con {
	overflow: hidden ;
	position: relative;
	border-bottom: 1px solid #ccc ;
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
	margin-top: 10px;
	width: 100% ;
}

.item-con-info .info-des{
	width: 100% ;
	font-size: .35rem ;
	margin-top:10px ;
	word-break:keep-all;
	/* white-space:nowrap; */
	overflow:hidden ;
	text-overflow:ellipsis;
}




</style>