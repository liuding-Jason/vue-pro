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
		components : {listItem} ,
		mounted(){
			console.log("mounted");
		}
	}


</script>

<style scoped>





</style>