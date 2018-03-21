var http=require("http"); //自帶http模板，賦值給http變量

http.createServer(function(request,response){ //調用模板提供的函數
	
	//發送HTTP 頭部
	//HTTP 狀態值 200 OK
	//內容類型： text/plain
	response.writeHead(200,{'Content-Type':'text/plain'});
	
	//發送響應數據 "Hello World"
	response.end("Hello word\n");
}).listen(8888); //該方法會返回一個對象，這個對象有一個叫做listen方法，這個參數是指定http服務器監聽的端口號

//終端打印如下信息
console.log('Server runming at http://127.0.0.1:8888/');
