$(function(){
	var w = $("#cubeTransition").css("width");
	$("#cubeTransition").css("height",w);
	$(".slideunlock-label").css("left","0px");
setInterval(function(){
	var a = $(".slideunlock-label").css("left");
	var a = a.substring(3,-2);
//	if(a<=5){
//		console.log(5)
//		$(".slideunlock-label").css("background","url(img/slider19.png) no-repeat center");
//		$(".slideunlock-label").css("background-size","cover");
//		$(".slideunlock-label").css("background-position-x","0");
//	}
//	if(a>5 && a<=10){
//		console.log(10)
//		$(".slideunlock-label").css("background","url(img/slider11.png) no-repeat center");
//		$(".slideunlock-label").css("background-size","cover");
//		$(".slideunlock-label").css("background-position-x","0");
//	}
//	if(a>10 && a<=15){
//		console.log(15)
//		$(".slideunlock-label").css("background","url(img/slider10.png) no-repeat center");
//		$(".slideunlock-label").css("background-size","cover");
//		$(".slideunlock-label").css("background-position-x","0");
//	}
//	if(a>15 && a<=20){
//		console.log(10)
//		$(".slideunlock-label").css("background","url(img/slider9.png) no-repeat center");
//		$(".slideunlock-label").css("background-size","cover");
//		$(".slideunlock-label").css("background-position-x","0");
//	}
//	if(a>20 && a<=25){
//		console.log(10)
//		$(".slideunlock-label").css("background","url(img/slider8.png) no-repeat center");
//		$(".slideunlock-label").css("background-size","cover");
//		$(".slideunlock-label").css("background-position-x","0");
//	}
//	if(a>25 && a<=30){
//		console.log(10)
//		$(".slideunlock-label").css("background","url(img/slider7.png) no-repeat center");
//		$(".slideunlock-label").css("background-size","cover");
//		$(".slideunlock-label").css("background-position-x","0");
//	}
//	if(a>30 && a<=35){
//		console.log(10)
//		$(".slideunlock-label").css("background","url(img/slider6.png) no-repeat center");
//		$(".slideunlock-label").css("background-size","cover");
//		$(".slideunlock-label").css("background-position-x","0");
//	}
//	if(a>35 && a<=40){
//		console.log(10)
//		$(".slideunlock-label").css("background","url(img/slider5.png) no-repeat center");
//		$(".slideunlock-label").css("background-size","cover");
//		$(".slideunlock-label").css("background-position-x","0");
//	}
//	if(a>40 && a<=45){
//		console.log(10)
//		$(".slideunlock-label").css("background","url(img/slider4.png) no-repeat center");
//		$(".slideunlock-label").css("background-size","cover");
//		$(".slideunlock-label").css("background-position-x","0");
//	}
//	if(a>45 && a<=50){
//		console.log(10)
//		$(".slideunlock-label").css("background","url(img/slider3.png) no-repeat center");
//		$(".slideunlock-label").css("background-size","cover");
//		$(".slideunlock-label").css("background-position-x","0");
//	}
//	if(a>55 && a<=60){
//		console.log(15)
//		$(".slideunlock-label").css("background","url(img/slider2.png) no-repeat center");
//		$(".slideunlock-label").css("background-size","cover");
//		$(".slideunlock-label").css("background-position-x","0");
//	}
//	if(a>65 && a<=70){
//		console.log(10)
//		$(".slideunlock-label").css("background","url(img/slider1.png) no-repeat center");
//		$(".slideunlock-label").css("background-size","cover");
//		$(".slideunlock-label").css("background-position-x","0");
//	}
//	if(a>75 && a<=80){
//		console.log(10)
//		$(".slideunlock-label").css("background","url(img/slider19.png) no-repeat center");
//		$(".slideunlock-label").css("background-size","cover");
//		$(".slideunlock-label").css("background-position-x","0");
//	}
//	if(a>85 && a<=90){
//		console.log(10)
//		$(".slideunlock-label").css("background","url(img/slider18.png) no-repeat center");
//		$(".slideunlock-label").css("background-size","cover");
//		$(".slideunlock-label").css("background-position-x","0");
//	}
//	if(a>95 && a<=100){
//		console.log(10)
//		$(".slideunlock-label").css("background","url(img/slider17.png) no-repeat center");
//		$(".slideunlock-label").css("background-size","cover");
//		$(".slideunlock-label").css("background-position-x","0");
//	}
//	if(a>100 && a<=105){
//		console.log(10)
//		$(".slideunlock-label").css("background","url(img/slider16.png) no-repeat center");
//		$(".slideunlock-label").css("background-size","cover");
//		$(".slideunlock-label").css("background-position-x","0");
//	}
//	if(a>105 && a<=110){
//		console.log(10)
//		$(".slideunlock-label").css("background","url(img/slider15.png) no-repeat center");
//		$(".slideunlock-label").css("background-size","cover");
//		$(".slideunlock-label").css("background-position-x","0");
//	}
//	if(a>110 && a<=115){
//		console.log(10)
//		$(".slideunlock-label").css("background","url(img/slider14.png) no-repeat center");
//		$(".slideunlock-label").css("background-size","cover");
//		$(".slideunlock-label").css("background-position-x","0");
//	}
//	if(a>115 && a<=120){
//		console.log(10)
//		$(".slideunlock-label").css("background","url(img/slider13.png) no-repeat center");
//		$(".slideunlock-label").css("background-size","cover");
//		$(".slideunlock-label").css("background-position-x","0");
//	}
//	if(a>120 && a<=125){
//		console.log(15)
//		$(".slideunlock-label").css("background","url(img/slider12.png) no-repeat center");
//		$(".slideunlock-label").css("background-size","cover");
//		$(".slideunlock-label").css("background-position-x","0");
//	}
//	if(a>125 && a<=130){
//		console.log(10)
//		$(".slideunlock-label").css("background","url(img/slider11.png) no-repeat center");
//		$(".slideunlock-label").css("background-size","cover");
//		$(".slideunlock-label").css("background-position-x","0");
//	}
//	if(a>130 && a<=135){
//		console.log(10)
//		$(".slideunlock-label").css("background","url(img/slider10.png) no-repeat center");
//		$(".slideunlock-label").css("background-size","cover");
//		$(".slideunlock-label").css("background-position-x","0");
//	}
//	if(a>135 && a<=140){
//		console.log(10)
//		$(".slideunlock-label").css("background","url(img/slider9.png) no-repeat center");
//		$(".slideunlock-label").css("background-size","cover");
//		$(".slideunlock-label").css("background-position-x","0");
//	}
//	if(a>140 && a<=145){
//		console.log(10)
//		$(".slideunlock-label").css("background","url(img/slider8.png) no-repeat center");
//		$(".slideunlock-label").css("background-size","cover");
//		$(".slideunlock-label").css("background-position-x","0");
//	}
//	if(a>145 && a<=150){
//		console.log(10)
//		$(".slideunlock-label").css("background","url(img/slider7.png) no-repeat center");
//		$(".slideunlock-label").css("background-size","cover");
//		$(".slideunlock-label").css("background-position-x","0");
//	}
//	if(a>150 && a<=155){
//		console.log(10)
//		$(".slideunlock-label").css("background","url(img/slider6.png) no-repeat center");
//		$(".slideunlock-label").css("background-size","cover");
//		$(".slideunlock-label").css("background-position-x","0");
//	}
//	if(a>155 && a<=160){
//		console.log(15)
//		$(".slideunlock-label").css("background","url(img/slider5.png) no-repeat center");
//		$(".slideunlock-label").css("background-size","cover");
//		$(".slideunlock-label").css("background-position-x","0");
//	}
//	if(a>160 && a<=165){
//		console.log(10)
//		$(".slideunlock-label").css("background","url(img/slider4.png) no-repeat center");
//		$(".slideunlock-label").css("background-size","cover");
//		$(".slideunlock-label").css("background-position-x","0");
//	}
//	if(a>165 && a<=170){
//		console.log(10)
//		$(".slideunlock-label").css("background","url(img/slider3.png) no-repeat center");
//		$(".slideunlock-label").css("background-size","cover");
//		$(".slideunlock-label").css("background-position-x","0");
//	}
//	if(a>170 && a<=175){
//		console.log(10)
//		$(".slideunlock-label").css("background","url(img/slider2.png) no-repeat center");
//		$(".slideunlock-label").css("background-size","cover");
//		$(".slideunlock-label").css("background-position-x","0");
//	}
//	if(a>175 && a<=177){
//		console.log(10)
//		$(".slideunlock-label").css("background","url(img/slider1.png) no-repeat center");
//		$(".slideunlock-label").css("background-size","cover");
//		$(".slideunlock-label").css("background-position-x","0");
//	}
	if($(".slideunlock-label").css("left")=="0px"){
		$(".video2").css("display","block");
		$(".container,#cubeTransition,.footer").css("display","none")
		$(".video2 video")[0].play();
	}
//	if(a>5){
//		$(".slideunlock-label").css("left","177px");
//	}
},10);
//	var aud = document.getElementById("video");
//	aud.onended = function() {
//	    $(".video1").css("display","none");
//	    $(".container,#cubeTransition,.footer").css("display","block");
//	};
})
