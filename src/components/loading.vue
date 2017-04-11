
<template>
	<div class="load-con"  v-show={show}>
		<div class="load-bg">
			<span class="load-item load-item-1"></span>
			<span class="load-item load-item-2"></span>
			<span class="load-item load-item-3"></span>
			<span class="load-item load-item-4"></span>
			<span class="load-item load-item-5"></span>
			<span class="load-item load-item-6"></span>
			<span class="load-item load-item-7"></span>
			<span class="load-item load-item-8"></span>
			<span class="load-item load-item-9"></span>
			<span class="load-item load-item-10"></span>
			<span class="load-item load-item-11"></span>
			<span class="load-item load-item-12"></span>
		</div>
	</div>
</template>

<script>

	/*
	* loading component 
	* @fun:showLoading
	* @fun:hideLoading
	*/

	export default {
		props : [
			showFlag : Boolean ,
			delay : Number
		] ,
		data(){
			return {
				show : this.showFlag || true
			}
		} ,
		computed : {

		} ,
		methods : {
			showLoading(){
				this.show = true ;
			} ,
			hideLoading(){
				this.show = false ;
			}
		} ,
		mounted(){
			console.log(this.show);
			
			setTimeout(() => {
				this.hideLoading() ;
			} , 5000);	
		}
	}

</script>

<style scoped>
.load-con {
	height: 100% ;
	width: 100% ;
	background-color: rgba(255 , 255 , 255 , 0.5) ;
	position: fixed ;
	top: 0 ;
	left: 0 ;
	z-index: 100 ;
}

.load-bg {
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

.load-item {
	display: inline-block;
	height: 20px ;
	width: 7px ;
	border-radius: 7px ;
	background-color:  #B3B3B3;
	position:absolute;
}

@keyframes mymove
{
form{background-color: black}
to {background-color: #E6E6E6}
}

@-moz-keyframes mymove Firefox
{
form{background-color: black}
to {background-color: #E6E6E6}
}

@-webkit-keyframes mymove Safari 和 Chrome
{
form{background-color: black}
to {background-color: #E6E6E6}
}

@-o-keyframes mymove Opera
{
form{background-color: black}
to {background-color: #E6E6E6}
}

.load-item-1 {
	left: 36px ;
	top: 8px ;
	animation:mymove .55s linear 0s infinite;
	-webkit-animation:mymove .55s linear 0s infinite; /*Safari and Chrome*/
}

.load-item-2 {
	transform : rotate(30deg);
	-ms-transform : rotate(30deg); 	/* IE 9 */
	-moz-transform : rotate(30deg); 	/* Firefox */
	-webkit-transform : rotate(30deg); /* Safari 和 Chrome */
	-o-transform : rotate(30deg); 	/* Opera */
	left: 47px;
    top: 11px;
	animation:mymove .55s linear .05s infinite;
	-webkit-animation:mymove .55s linear .05s infinite; /*Safari and Chrome*/
}

.load-item-3 {
	transform : rotate(60deg);
	-ms-transform : rotate(60deg); 	/* IE 9 */
	-moz-transform : rotate(60deg); 	/* Firefox */
	-webkit-transform : rotate(60deg); /* Safari 和 Chrome */
	-o-transform : rotate(60deg); 	/* Opera */
	left: 54px;
    top: 19px;
	animation:mymove .55s linear .1s infinite;
	-webkit-animation:mymove .55s linear .1s infinite; /*Safari and Chrome*/
}

.load-item-4 {
	transform : rotate(90deg);
	-ms-transform : rotate(90deg); 	/* IE 9 */
	-moz-transform : rotate(90deg); 	/* Firefox */
	-webkit-transform : rotate(90deg); /* Safari 和 Chrome */
	-o-transform : rotate(90deg); 	/* Opera */
	left: 56px ;
	top: 29px ;
	animation:mymove .55s linear .15s infinite;
	-webkit-animation:mymove .55s linear .15s infinite; /*Safari and Chrome*/
}

.load-item-5 {
	transform : rotate(120deg);
	-ms-transform : rotate(120deg); 	/* IE 9 */
	-moz-transform : rotate(120deg); 	/* Firefox */
	-webkit-transform : rotate(120deg); /* Safari 和 Chrome */
	-o-transform : rotate(120deg); 	/* Opera */
	left: 54px;
    top: 40px;
	animation:mymove .55s linear .2s infinite;
	-webkit-animation:mymove .55s linear .2s infinite; /*Safari and Chrome*/
}

.load-item-6 {
	transform : rotate(150deg);
	-ms-transform : rotate(150deg); 	/* IE 9 */
	-moz-transform : rotate(150deg); 	/* Firefox */
	-webkit-transform : rotate(150deg); /* Safari 和 Chrome */
	-o-transform : rotate(150deg); 	/* Opera */
	left: 47px;
    top: 47px;
	animation:mymove .55s linear .25s infinite;
	-webkit-animation:mymove .55s linear .25s infinite; /*Safari and Chrome*/
}

.load-item-7 {
	transform : rotate(180deg);
	-ms-transform : rotate(180deg); 	/* IE 9 */
	-moz-transform : rotate(180deg); 	/* Firefox */
	-webkit-transform : rotate(180deg); /* Safari 和 Chrome */
	-o-transform : rotate(180deg); 	/* Opera */
	left: 36px;
    top: 50px;
	animation:mymove .55s linear .3s infinite;
	-webkit-animation:mymove .55s linear .3s infinite; /*Safari and Chrome*/
}

.load-item-8 {
	transform : rotate(210deg);
	-ms-transform : rotate(210deg); 	/* IE 9 */
	-moz-transform : rotate(210deg); 	/* Firefox */
	-webkit-transform : rotate(210deg); /* Safari 和 Chrome */
	-o-transform : rotate(210deg); 	/* Opera */
	left: 24px;
    top: 48px;
	animation:mymove .55s linear .35s infinite;
	-webkit-animation:mymove .55s linear .35s infinite; /*Safari and Chrome*/
}

.load-item-9 {
	transform : rotate(240deg);
	-ms-transform : rotate(240deg); 	/* IE 9 */
	-moz-transform : rotate(240deg); 	/* Firefox */
	-webkit-transform : rotate(240deg); /* Safari 和 Chrome */
	-o-transform : rotate(240deg); 	/* Opera */
	left: 16px;
    top: 40px;
	animation:mymove .55s linear .4s infinite;
	-webkit-animation:mymove .55s linear .4s infinite; /*Safari and Chrome*/
}

.load-item-10 {
	transform : rotate(270deg);
	-ms-transform : rotate(270deg); 	/* IE 9 */
	-moz-transform : rotate(270deg); 	/* Firefox */
	-webkit-transform : rotate(270deg); /* Safari 和 Chrome */
	-o-transform : rotate(270deg); 	/* Opera */
	left: 13px;
    top: 29px;
	animation:mymove .55s linear .45s infinite;
	-webkit-animation:mymove .55s linear .45s infinite; /*Safari and Chrome*/
}

.load-item-11 {
	transform : rotate(300deg);
	-ms-transform : rotate(300deg); 	/* IE 9 */
	-moz-transform : rotate(300deg); 	/* Firefox */
	-webkit-transform : rotate(300deg); /* Safari 和 Chrome */
	-o-transform : rotate(300deg); 	/* Opera */
	left: 16px;
    top: 18px;
	animation:mymove .55s linear .5s infinite;
	-webkit-animation:mymove .55s linear .5s infinite; /*Safari and Chrome*/
}

.load-item-12 {
	transform : rotate(330deg);
	-ms-transform : rotate(330deg); 	/* IE 9 */
	-moz-transform : rotate(330deg); 	/* Firefox */
	-webkit-transform : rotate(330deg); /* Safari 和 Chrome */
	-o-transform : rotate(330deg); 	/* Opera */
	left: 24px;
    top: 10px;
	animation:mymove .55s linear .55s infinite;
	-webkit-animation:mymove .55s linear .55s infinite; /*Safari and Chrome*/
}

</style>