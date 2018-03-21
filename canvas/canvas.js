
//首先，找到 <canvas> 元素:
var c=document.getElementById("myCanvas");
//getContext("2d") 对象是内建的 HTML5 对象，拥有多种绘制路径、矩形、圆形、字符以及添加图像的方法。
var cvr=c.getContext("2d");

//绘制红色矩形
cvr.fillStyle="#FF0000";
cvr.fillRect(0,0,150,75);

//画线
cvr.moveTo(0,0);
cvr.lineTo(300,300);
cvr.stroke();

//x	圆的中心的 x 坐标。
//y	圆的中心的 y 坐标。
//r	圆的半径。
//sAngle	起始角，以弧度计。（弧的圆形的三点钟位置是 0 度）。
//eAngle	结束角，以弧度计。
//counterclockwise	可选。规定应该逆时针还是顺时针绘图。False = 顺时针，true = 逆时针。
cvr.beginPath(); //方法在一个画布中开始子路径的一个新的集合
cvr.arc(95,95,50,0,2*Math.PI);
cvr.stroke();

//font - 定义字体
//fillText(text,x,y) - 在 canvas 上绘制实心的文本
//strokeText(text,x,y) - 在 canvas 上绘制空心的文本
cvr.font="30px Arial";
cvr.fillText("mibear",200,150);
cvr.strokeText("mibear",200,100);

//createLinearGradient(x,y,x1,y1) - 创建线条渐变
//createRadialGradient(x,y,r,x1,y1,r1) - 创建一个径向/圆渐变

//创建渐变
var grd=cvr.createRadialGradient(75,50,5,90,60,100);
grd.addColorStop(0,"red");
grd.addColorStop(1,"white");
//填渐变
cvr.fillStyle=grd;
ctx.fillRect(10,10,150,80);

// 图片


