<template>
	<div @click="_onClick">
		<div class="item-con" v-for="item in listData" :data="item">
			<div class="item-cover" :id="item['id']"></div> 
			<div class="item-con-thumb">
				<div class="con-thumb" ></div>
			</div>
			<div class="item-con-info">
				<div class="info-title">{{item['title']}}</div>
				<div class="info-des">{{item['describeInfo']}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	
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
		components : {} ,
		methods : {
			_onClick (ev){
				let id = ev.target.getAttribute("id") ;
				let tProps = {} ;
				this.listData.map((item , infdex) => {
					let {id , title , describeInfo} = item ;
					if(id * 1 === item['id'] * 1){
						// 这里返回的是计算属性
						// return item 行不通
						return tProps = {id , title , describeInfo} ;
					}
				});
				this.onClick(tProps);
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
	margin-top: 10px;
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