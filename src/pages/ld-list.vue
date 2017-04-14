<template>
	<div>
		<list-item v-for="item in list" :data="item" ></list-item>
		
	</div>
</template>

<script>
	import listItem from "./ld-listItem.vue" ;

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