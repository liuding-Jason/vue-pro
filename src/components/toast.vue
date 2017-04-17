
<!--
	Toast Component
	@type : success faild info warn
	@content : 提交成功
	@delay : 1000 
 -->

<template>
	<transition name="toast-fade">
		<div class="toast-con" v-show="show">
			<div class="toast-con-top"><span :style="{height: '100%'}" ></span></div>
			<div class="toast-con-message">{{message || "提示信息"}}</div>
		</div>
	</transition>
</template>

<script >
	export default {
		props : {
			type : {
				type : String ,
				default : "success" 
			} ,
			message : {
				type : String ,
				default : "提交成功"
			} ,
			delay : {
				type : Number ,
				default : 1000
			}
		} ,
		data(){
			return {
				show : true
			}
		} ,
		methods : {
			showToast(){
				this.show = true ;
			} ,
			hideToast(){
				this.show = false ;
			}
		} ,
		components : {

		} ,
		mounted(){
			console.log("type : %s , message : %s" , this.type , this.message);

			setTimeout(() => {
				this.hideToast() ;
			} , this.delay);
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
	-webkit-transform: translate(-50%, -55%) ;
	-moz-transform: translate(-50%, -55%) ;
	-ms-transform: translate(-50%, -55%) ;
	-o-transform: translate(-50%, -55%) ;
	transform: translate(-50%, -55%) ;
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
	background-repeat: no-repeat ;
	background-size: cover ;
}

.toast-con-top span.success {
	background-color: #92D341 ;
	/* background-image: url(../lib/success.png) ; */
}

.toast-con-top span.faild {
	background-color: #F88043 ;
	/* background-image: url(); */
}

.toast-con-top span.info {
	background-color: #058FDA ;
	/* background-image: url(); */
}

.toast-con-top span.warn {
	background-color: #E1C615 ;
}

.toast-con-message {
	height : 36px ;
	line-height : 36px;
	font-size : 13px ;
	color : #fff ;
	text-align : center ;
	padding : 0 3px ;
	white-space : nowrap ;
    overflow : hidden ;
    text-overflow : ellipsis ;
}

.toast-fade-enter-active, .toast-fade-leave-active {
  transition: opacity .3s
}
.toast-fade-enter, .toast-fade-leave-active {
  opacity: 0
}


</style>