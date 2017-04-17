<template>
	<div>
		<toast :type="success" :message="提交成功" :delay="2000"></toast>
		<ul class="mod-stu">
			<li>
				<b class="mod-stu-name">名字</b>
				<span class="mod-stu-age">年龄</span>
				<i class="mod-stu-score"> 分数</i>
			</li>
			<li v-for="item in list" >
				<b class="mod-stu-name">{{item['name']}}</b>
				<span class="mod-stu-age">{{item['age']}}</span>
				<i class="mod-stu-score">{{item['score']}}</i>
			</li>
		</ul>
		<list :listData="mockList" :onClick="_onClick.bind(this)"></list>
	</div>
</template>

<script>
	import toast from "../components/toast.vue" ;
	import loading from "../components/loading.vue" ;
	import list from "../components/list.vue" ;
	import nodata from "../components/nodata.vue" ;
	import Conf from "../config.js" ;
	export default {
		data () {
			return {
				title : 'list' , 
				list : [
					{
						name : 'Jack' ,
						age	 : 15 ,
						score : 87
					} ,
					{
						name : 'Tom' ,
						age : 14 ,
						score : 90
					} ,
					{
						name : 'Rose' ,
						age : 16 ,
						score : 100
					}
				] ,
				mockList : [{
					id : 1 ,
					thumbnail : '' ,
					title : 'ListItem1' ,
					describeInfo : 'ListItem Component1'
				} , {
					id : 2 ,
					thumbnail : '' ,
					title : 'ListItem2' ,
					describeInfo : 'ListItem Component2' 
				} , {
					id : 3 ,
					thumbnail : '' ,
					title : 'ListItem3' ,
					describeInfo : 'ListItem Component3' 
				}]
			}
		} ,

		components : { loading , toast , list , nodata } ,

		methods : {
			hello : function(){
				console.log("hello list!");
			} ,
			judgeData : function(code = void 0 , message = ""){
				if(code * 1 !== 0){
					alert(message);
					return false ;
				}
				return true ;
			} ,
			_onClick :  (props) => {
				console.log(props);
			}
		} ,

		watch : {
			list : function(val){
				console.log("list value is changed!");
			}
		} ,

		mounted (){

			//this.$http.post('' , {})
			//.then(({code = void 0 ,data = {} , message = "请求失败！"}) => {
			//	if(!this.judgeDate(code , message)) return ;
			//	let {
			//		list = []
			//	} = data ;
			//	this.list = list ;
			//});

			this.hello();
			this.title = 'newList' ;
		}

	}
</script>

<style scoped>
	.mod-stu {
		list-style:none;
	} 

	.mod-stu li {
		border-bottom:1px solid #aaa ;
		height : 45px ;
		line-height : 45px ;
	}

	.mod-stu-name {
		display: inline-block ;
		text-align : center ;
		width : 33% ;
	}
	.mod-stu-age {
		display: inline-block ;
		text-align : center ;
		width : 30% ;
	} 
	.mod-stu-score {
		display: inline-block ;
		text-align : center ;
		width : 33% ;
	}

</style>
