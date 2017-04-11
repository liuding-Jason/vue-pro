
<!--
	Toast Component
	@type : success  failed info 
	@content : 提交成功
	@delay : 200 
 -->

<template>
	<div class="toast-con">
		<div class="toast-con-top"><span ></span></div>
		<div class="toast-con-message">{{message || "提示信息"}}</div>
	</div>
</template>

<script >
	export default {
		props : ["type" , "message"] ,
		data(){
			return {
				iconBg : require("../lib/success.png")
			}
		} ,
		methods : {
			showToast(){

			} ,
			hideToast(){

			}
		} ,
		components : {

		} ,
		mounted(){
			console.log(this.iconBg) ;
		}

	}

</script>

<style scoped>

.toast-con {
	position: absolute;
	top: 50%;
	left: 50% ;
	height: 76px;
	width: 76px ;
	z-index: 900 ;
	border-radius: 15px;
	background-color: rgba(0 , 0 , 0 , 0.5) ;
	-webkit-transform: translate(-50%, -50%);
	-moz-transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
	-o-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
}

.toast-con-top {
	height: 40px ;
	text-align: center;
}

.toast-con-top span{
	display: inline-block ;
	height: 30px ;
	width: 30px ;
	margin-top: 10px ;
	background-image: url(../lib/success.png) ;
	background-repeat: no-repeat ;
	background-size: cover ;
}

.toast-con-message {
	height : 36px ;
	line-height : 36px;
	font-size : 13px ;
	color : #eee ;
	text-align : center ;
	padding : 0 3px ;
	white-space : nowrap ;
    overflow : hidden ;
    text-overflow : ellipsis ;
}

</style>