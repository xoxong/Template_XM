//按钮手动切换效果

window.onload=function(){
	
	var list=document.getElementById("list");
	var prev=document.getElementById("prev");
	var next=document.getElementById("next");
	var contern=document.getElementById("contern")
	//getElementsByTagName指定标签合
	var buttons=document.getElementById("buttons").getElementsByTagName("li");	
	var index=1
	var timer;
	
	function animates(a){
		// //获取的是style.left，是相对左边获取距离，所以第一张图后style.left都为负值，
        //且style.left获取的是字符串，需要用parseInt()取整转化为数字。
//      var newlift=parseInt(list.style.left)+a;
        var newlift=parseInt($("#list").css("left"))+a;
        $("#list").css("left",newlift+"px");
        //偏移量判断
        if(newlift>-750){
//      	list.style.left=-2400+'px';	
        	$("#list").css("left","-3000px")
        }
        if(newlift<-3000){
//      	list.style.left=-600+'px';	
        	$("#list").css("left","-750px")
        	
        }
	}
	
	
	//小圆圈跟随
	function buttonShow(){
	//清除样式
	for (var i=0;i<buttons.length;i++ ){
		if(buttons[i].className=='on'){
			buttons[i].className='';
		}
		
	}
		buttons[index-1].className='on';
	}
	
	//点击圆圈
	for(var i=0;i<buttons.length;i++){
		//立即执行函数
		(function(i){
			buttons[i].onclick=function(){
				var chilckindex=parseInt(this.getAttribute('index'));
				var offset=750*(index-chilckindex);
				animates(offset);
				index=chilckindex;
				buttonShow();
			}
		})(i)
	}
	
	
	//两个按钮
	prev.onclick=function(){
		index-=1;
		if(index<1){
			index=4;
		}
		buttonShow();
		animates(750);	
	}
	next.onclick=function(){
		index+=1;
		if(index>4){
			index=1;
		}
		buttonShow();
		animates(-750);
	}
	
	
	//定时器自动播放
//	play();
	
	//停止
	contern.onmouseover=stop;
	contern.onmouseout=play;
		
}

//自动播放
//对于定时器，有必要说明一下setInterval()跟setTimeout的区别了。
//简单来说，setInterval()执行多次，setTimeout()只执行一次。
function play(){
	timer=setInterval(function (){
		next.onclick();
	},1500)
}


//鼠标悬停
function stop(){
	clearInterval(timer);
}


