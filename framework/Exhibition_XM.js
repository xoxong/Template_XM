//1.--------------------------窗口震动 shock(震动)
function shock_xy(n){
		//moveBy() 方法可相对窗口的当前坐标把它移动指定的像素。
		window.moveBy(0,-5);
		if(self.moveBy){
			for (var i=10;i>0;i--) {
				for (var j=n;j>0;j--) {
					self.moveBy(0,i);
					self.moveBy(i,0);
					self.moveBy(0,-i);
					self.moveBy(-i,0);
				}}}}
	
	function shock_x(n){	
		if(self.moveBy){
			for (var i=10;i>0;i--) {
				for (var j=n;j>0;j--) {
					self.moveBy(i,0);
					self.moveBy(-i,0);
				}}}}
	
	function shock_y(n){
		if(self.moveBy){
			for (var i=10;i>0;i--) {
				for (var j=n;j>0;j--) {
					self.moveBy(0,i);
					self.moveBy(0,-i);
				}}}}

//2.自动选择文本框/编辑框中的文字
	function select_txt(){
		if(document.getElementById("text1").focus){
			document.getElementById("text1").select();
		}
	}
	function select_textarea(){
		if(document.getElementById("textarea1").focus){
			document.getElementById("textarea1").select();
		}
	}
			
//3.多级联动菜单
	var arr_x3=new Array();
	arr_x3["数码设备"]=new Array("数码相机","打印机");
	arr_x3["家用电器"]=new Array("电视机","电冰箱");
	arr_x3["礼品工艺"]=new Array("鲜花","彩带");
	function removeinfo_x3(classMenu){
		//清空下拉框所有选项
		for (var i=0;i<classMenu.options.length;i++) {
			classMenu.options[i]=null;
		}
	}
	function changeMenu_x3(classList,classMenu){
		removeinfo_x3(classMenu);
		for (var i=0;i<classList.length;i++) {
			//Option 第一个是显示的文本，第二个是value值
			classMenu[i]=new Option(classList[i],classList[i]);
		}
	}
	
//4.可以输入文字的下拉菜单
	//在下拉菜单中添加新的选项
	//var name_x4=form_x4.select_x4;
	function add_x4(opt){
		//opt表示可选项的数目
		//options 集合可返回包含 <select> 元素中所有 <option> 的一个数组。
		//fromCharCod----函数用于从一些Unicode字符值中返回一个字符串   event.keyCode---按键的Unicode
		form_x4.select_x4.options[opt]=new Option(form_x4.select_x4.options[opt])?
		form_x4.select_x4.options[opt].innerText+String.fromCharCode(event.keyCode):
		String.fromCharCode((event.keyCode),ok)
		form_x4.select_x4.selectedIndex=opt;
	}
	//当用户按下退格时，删除文字，按下空格时，添加空格符号
	function edit_x4(opt){
		if (form_x4.select_x4.options[opt]) {
			if(event.keyCode==8){
				var str=form_x4.select_x4.options[opt].innerText;
				var len=str.length;
				form_x4.select_x4.options[opt].innerText=str.substring(0,len-1);
				if (form_x4.select_x4.options[opt].innerText=="") {
					form_x4.select_x4.remove(opt);
					form_x4.select_x4.selectedIndex=1;
				};
			}
		if(event.keyCode==32){
			form_x4.select_x4.options[opt].innerHTML="";
		}
		}
	}
	
//7.显示长日期格式的系统日期
	function fun_x7(){
		document.getElementById("td_x7");
		var now=new Date();
		var year=now.getYear();
		var month=now.getMonth()+1;
		var date=now.getDate();
		var day=now.getDay();
		var hour=now.getHours();
		var minu=now.getMinutes();
		var sec=now.getSeconds();
		var week;
		if(month<10) month="0"+month;
		if(hour<10) hour="0"+hour;
		if(minu<10) minu="0"+minu;
		if(sec<10) sec="0"+sec;
		var arr_week=new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六");
		week=arr_week[day];
		var time="";
		time=year+"年"+month+"月"+date+"日"+week +hour+":"+minu+":"+sec;
		td_x7.value=time;
		var time=setTimeout("fun_x7()",200);
	}
	window.onload=fun_x7();
	
//9.使用tolocalestring方法获取本地时间
 	function fun_x9(){
 		var now=new Date();
 		var hours=now.getHours();
 		if(hours<25)
 		document.getElementById("input_x9").value=now.toLocaleString();
		//		var time=setTimeout("fun_x8()",200);
 	}
 	window.onload=fun_x9();

//10.退出页面时显示停留时间
	var begnow=new Date();
	function outtime_x10(){
		var endnow=new Date();
		var minutes=(endnow.getMinutes()-begnow.getMinutes());
		var seconds=(endnow.getSeconds()-begnow.getSeconds());
		var time=(seconds+(minutes*60));
		alert("您在本页停留了"+time+"秒");
	}

//11.显示用户在页面的停留时间
	var second_x11=0;
	var minute_x11=0;
	var hour_x11=0;
	window.setTimeout("fun_x11();",1000);
	function fun_x11(){

		second_x11++;
		if(second_x11==60){
			second_x11=0;minute_x11+=1;
		}
		if(minute_x11==60){
			minute_x11=0;hour_x11+=1;
		}
		document.getElementById("input_x11").value=hour_x11+"时"+minute_x11+"分"+second_x11+"秒";
		window.setTimeout("fun_x11();",1000);
	}

//12.使用document的lastModified属性显示文档最后修改时间
	function fun_x12(){
		document.getElementById("input_x12").value="上一次的修改时间:"+document.lastModified;
	}
	window.onload=fun_x12();

//13.判断指定年份是否是闰年
	function fun_x13(){
		//var now = new Date();
		//var years = now.getFullYear(document.getElementById("text_x13").value);
		//var str;
		var years = document.getElementById("text_x13").value;
		var result = (years % 4 == 0 && years % 100 !== 0) || (years % 400 == 0) ? years + "是闰年" : years + "不是闰年";
		document.getElementById("text2_x13").value=result;
	}

//14.返回两个时间的间隔小时
	function fun_x14(){
		var begin=new Date(document.getElementById("text_x14").value);
		var end=new Date(document.getElementById("text2_x14").value);
		var res=begin.getTime()-end.getTime();
		var day=Math.abs(Math.round(res/(1000*60*60)));
		document.getElementById("text3_x14").value=day;
	}

//15.计时器
	function getdate_x15(){
		var now=new Date();
		var se=Math.floor(now.getTime()/1000)-Math.floor(document.getElementById("hidetext").value/1000);
		var mse=now.getTime()-document.getElementById("hidetext").value;
		document.getElementById("text_x15").value=se;//显示秒
		document.getElementById("text2_x15").value=mse%1000;//显示毫秒
		time_x15=window.setTimeout('getdate_x15()',100);
	}
	//使隐藏表单的值等于当前时间
	function getdateq_x15(){
		var now=new Date();
		document.getElementById("hidetext").value=now.getTime();
		getdate_x15();
	}
	function sstop_x15(){
		window.clearTimeout(time_x15);
	}

//16.五颜六色的字体颜色
		var tname="欢迎来到小熊的俱乐部啊";
		document.getElementById("a_x16").innerHTML=tname;
		var tlen=tname.length;
		var col=new Array("#FFCC00","#3333FF","#FFCC00","#FF0000","#FFC0C0","#CC33FF","#C3D5F6");
		var ic=0;
		function fun2_x16(){
			var strname="";
			for(var i=0;i<tlen;++i){
				strname=strname+"<font color="+col[ic]+">"+tname.substring(i,i+1)+"</font>";
				ic=ic+1;
				if(ic==col.length)ic=0;
			}
			document.getElementById("a_x16").innerHTML=strname;
			setTimeout("fun2_x16()",200);
		}
		fun2_x16();

//17.追逐点亮的文字
	document.getElementById("a_x17").innerHTML=tname;
	var act=0;
	function fun_x17(){
		++act;
		act=(act>tlen-1)?0:act;
		act=(act<0)?(tlen-1):act;
		document.getElementById("a_x17").innerHTML=tname.substring(0,act)+"<font color='red'>"+tname.substring(act,act+1)+"</font>"+tname.substring(act+1,tlen);
	}
	setInterval("fun_x17()",200);

//18.单击将本页加入收藏夹
	function add_x18(){
		try{
			window.external.AddFavorite("http://www.1024books.com","1024小书柜");
		}catch(e){
			try{
				window.sidebar.addPanel("1024小书柜","http://www.1024books.com","");
			}catch (e){
				alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加");
			}

		}
		return false;
	}


//19.页首页尾切换
	function fun_x19(){
		//跳转到页首
		document.body.scrollTop=0;
		//跳转到页尾
		//document.body.scrollTop=document.body.scrollHeight;
	}

//20.页面动画效果：下雪
	function fun_x20(){
		var drop=new Array();
		var xx=new Array();
		var yy=new Array();
		var mv=new Array();
		var snowsym="*";
		var howmany=15;
		var speed=50;
		var drops=howmany;
		var angle=6;
		var movex=-speed/angle;
		var count=0;
		for(var i=0;i<drops;i++){
			document.write('<div id="drop'+i+'" style="position:absolute;" >'+snowsym+'</div>');
			drop[i]=eval("document.all['drop"+i+"'].style");
			var maxx=document.body.clientWidth-40;
			var maxy=document.body.clientHeight-40;
			xx[i]=Math.random()*maxx;
			yy[i]=-100-Math.random()*maxy;
			drop[i].left=xx[i];
			drop[i].top=yy[i];
			mv[i](Math.random()*5)+speed/16;
			drop[i].fontSize(Math.random()*10)+10;
			drop[i].color='#FFFFFF';
		}
		function fun2_x20(){
			for(var move=0;move<drops;move++){
				xx[move]+=movex;
				yy[move]+=mv[move];
				if(xx[move]<0){
					xx[move]==maxx+10;
				}
				if(yy[move]>maxy){
					yy[move]=10;
				}
				drop[move].left=xx[move];
				drop[move].top=yy[move]+document.body.scrollTop;
			}
			setTimeout('fun2_x20()',1);
		}
	}
	//fun_x20();

//21.显示鼠标坐标
		function fun_x21(){
			var x,y;
			if(document.all){
				x=window.event.clientX;
				y=window.event.clientY;
			}
			document.getElementById("input_x21").value=x+":"+y;
		}
		document.onmousemove=fun_x21();