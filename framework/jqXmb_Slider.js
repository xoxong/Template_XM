$(function(){
	function animates(imgae_width){
				var newlift=parseInt($(".slider_image").css("left"))+a;
		       	$(".slider_image").css("left",newlift+"px");
		        //偏移量判断
		        if(newlift>-600){
		//      	list.style.left=-2400+'px';	
		        	$(".slider_image").css("left","-2400px")
		        }
		        if(newlift<-2400){
		//      	list.style.left=-600+'px';	
		        	$(".slider_image").css("left","-600px")
        	
       			 }

			}
			
			//left right button 左右按钮绑定事件
			$(".slider_left").on('click',function(){
				animates();
			})
			$(".slider_right").on('click',function(){
				animates();
			})
})		
