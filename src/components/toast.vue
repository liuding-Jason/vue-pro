
<!--
	Toast Component
	@type : success faild info warn
	@content : 提交成功
	@delay : 1000

	problem : 怎么暴露给父组件设置子组件的状态 
 -->

<template>
	<transition name="toast-fade">
		<div class="toast-con" v-show="show">
			<div class="toast-con-top">
				<icon :name="type" :scale="4"></icon>
			</div>
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
			init(){
				this.$on(ToastShow , (data) => {
					this.showToast() ;
				})

				this.$on(ToastHide , (data) => {
					this.hideToast() ;
				})

			} ,
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
			// 初始化
			this.init() ;
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
	-webkit-transform: translate(-50%, -85%) ;
	-moz-transform: translate(-50%, -85%) ;
	-ms-transform: translate(-50%, -85%) ;
	-o-transform: translate(-50%, -85%) ;
	transform: translate(-50%, -85%) ;
}

.toast-con-top {
	height: 40px ;
	line-height: 40px;
	text-align: center ;
	position: relative;
	top: 10px;
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
	font-weight: 700 ;
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