$(function(){
	$(".xb_home_nav li").click(function(){
		$(".xb_home_nav_content[data-menuName="+$(this).attr("data-menu")+"]").fadeIn(300);
		$(".xb_home_nav_content[data-menuName="+$(this).attr("data-menu")+"]").siblings().fadeOut(300);
		
	})
})
