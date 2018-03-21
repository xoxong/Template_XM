//固定导航
window.onload=function(){
    var upward=document.getElementById("upward");
    H = 100,
 
    window.onscroll = function()
    {
    	//document.documentElement.scrollTop 获取滚动条位置
        var s = document.body.scrollTop || document.documentElement.scrollTop
        if(s>H) {
			/*调用css样式动画下滑*/
            upward.style="display: block;"
        } else {
            upward.style=""  
        }
        
    }
    
    //返回顶部动画样式
//  $(".upward ul li").hover(function(){
//		$(this).stop().animate({"right":"0px"},500);
//	},function(){
//		$(this).stop().animate({"right":"-50px","color":"black"},500);
//		
//	});
	
}

//调回顶部
function upward(){
	// 在500毫秒内平滑滚动到页面顶部
	$('body').animate( {scrollTop: 0}, 1500); 
}
