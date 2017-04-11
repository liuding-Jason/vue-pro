
<template>
	<div class="load-con">
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
		data(){
			return {}
		} ,
		mounted(){
			console.log("loading");
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
	height: 75px;
	width: 75px ;
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
	border-radius: 10px ;
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
	left: 34px ;
	top: 5px ;
	animation:mymove .2s linear 0s infinite;
	-webkit-animation:mymove .2s linear 0s infinite; /*Safari and Chrome*/
}

.load-item-2 {
	transform : rotate(30deg);
	-ms-transform : rotate(30deg); 	/* IE 9 */
	-moz-transform : rotate(30deg); 	/* Firefox */
	-webkit-transform : rotate(30deg); /* Safari 和 Chrome */
	-o-transform : rotate(30deg); 	/* Opera */
	left: 47px ;
	top: 8px ;
	animation:mymove .2s linear 0.5s infinite;
	-webkit-animation:mymove .2s linear 0.5s infinite; /*Safari and Chrome*/
}

.load-item-3 {
	transform : rotate(60deg);
	-ms-transform : rotate(60deg); 	/* IE 9 */
	-moz-transform : rotate(60deg); 	/* Firefox */
	-webkit-transform : rotate(60deg); /* Safari 和 Chrome */
	-o-transform : rotate(60deg); 	/* Opera */
	left: 57px ;
	top: 17px ;
	animation:mymove .2s linear 1s infinite;
	-webkit-animation:mymove .2s linear 1s infinite; /*Safari and Chrome*/
}

.load-item-4 {
	transform : rotate(90deg);
	-ms-transform : rotate(90deg); 	/* IE 9 */
	-moz-transform : rotate(90deg); 	/* Firefox */
	-webkit-transform : rotate(90deg); /* Safari 和 Chrome */
	-o-transform : rotate(90deg); 	/* Opera */
	left: 59px ;
	top: 30px ;
	animation:mymove .2s linear 1.5s infinite;
	-webkit-animation:mymove .2s linear 1.5s infinite; /*Safari and Chrome*/
}

.load-item-5 {
	transform : rotate(120deg);
	-ms-transform : rotate(120deg); 	/* IE 9 */
	-moz-transform : rotate(120deg); 	/* Firefox */
	-webkit-transform : rotate(120deg); /* Safari 和 Chrome */
	-o-transform : rotate(120deg); 	/* Opera */
	left: 57px ;
	top: 42px ;
	animation:mymove .2s linear 2s infinite;
	-webkit-animation:mymove .2s linear 2s infinite; /*Safari and Chrome*/
}

.load-item-6 {
	transform : rotate(150deg);
	-ms-transform : rotate(150deg); 	/* IE 9 */
	-moz-transform : rotate(150deg); 	/* Firefox */
	-webkit-transform : rotate(150deg); /* Safari 和 Chrome */
	-o-transform : rotate(150deg); 	/* Opera */
	left: 46px ;
	top: 50px ;
	animation:mymove .2s linear 2.5s infinite;
	-webkit-animation:mymove .2s linear 2.5s infinite; /*Safari and Chrome*/
}

.load-item-7 {
	transform : rotate(180deg);
	-ms-transform : rotate(180deg); 	/* IE 9 */
	-moz-transform : rotate(180deg); 	/* Firefox */
	-webkit-transform : rotate(180deg); /* Safari 和 Chrome */
	-o-transform : rotate(180deg); 	/* Opera */
	left: 34px ;
	top: 52px ;
	animation:mymove .2s linear 3s infinite;
	-webkit-animation:mymove .2s linear 3s infinite; /*Safari and Chrome*/
}

.load-item-8 {
	transform : rotate(210deg);
	-ms-transform : rotate(210deg); 	/* IE 9 */
	-moz-transform : rotate(210deg); 	/* Firefox */
	-webkit-transform : rotate(210deg); /* Safari 和 Chrome */
	-o-transform : rotate(210deg); 	/* Opera */
	left: 21px ;
	top: 50px ;
	animation:mymove .2s linear 3.5s infinite;
	-webkit-animation:mymove .2s linear 3.5s infinite; /*Safari and Chrome*/
}

.load-item-9 {
	transform : rotate(240deg);
	-ms-transform : rotate(240deg); 	/* IE 9 */
	-moz-transform : rotate(240deg); 	/* Firefox */
	-webkit-transform : rotate(240deg); /* Safari 和 Chrome */
	-o-transform : rotate(240deg); 	/* Opera */
	left: 13px ;
	top: 42px ;
	animation:mymove .2s linear 4s infinite;
	-webkit-animation:mymove .2s linear 4s infinite; /*Safari and Chrome*/
}

.load-item-10 {
	transform : rotate(270deg);
	-ms-transform : rotate(270deg); 	/* IE 9 */
	-moz-transform : rotate(270deg); 	/* Firefox */
	-webkit-transform : rotate(270deg); /* Safari 和 Chrome */
	-o-transform : rotate(270deg); 	/* Opera */
	left: 10px ;
	top: 30px ;
	animation:mymove .2s linear 4.5s infinite;
	-webkit-animation:mymove .2s linear 4.5s infinite; /*Safari and Chrome*/
}

.load-item-11 {
	transform : rotate(300deg);
	-ms-transform : rotate(300deg); 	/* IE 9 */
	-moz-transform : rotate(300deg); 	/* Firefox */
	-webkit-transform : rotate(300deg); /* Safari 和 Chrome */
	-o-transform : rotate(300deg); 	/* Opera */
	left: 12px ;
	top: 17px ;
	animation:mymove .2s linear 5s infinite;
	-webkit-animation:mymove .2s linear 5s infinite; /*Safari and Chrome*/
}

.load-item-12 {
	transform : rotate(330deg);
	-ms-transform : rotate(330deg); 	/* IE 9 */
	-moz-transform : rotate(330deg); 	/* Firefox */
	-webkit-transform : rotate(330deg); /* Safari 和 Chrome */
	-o-transform : rotate(330deg); 	/* Opera */
	left: 22px ;
	top: 8px ;
	animation:mymove .2s linear 5.5s infinite;
	-webkit-animation:mymove .2s linear 5.5s infinite; /*Safari and Chrome*/
}

</style>