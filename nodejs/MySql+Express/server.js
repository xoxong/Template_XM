  
  //路由演示
//route_express();
  
  //路由演示
  function route_express(){
  	var express=require('express');
  	var jqery=require('jquery');
  	var app=express();
  	
  	//主頁 get
  	app.get('/',function(req,res){
  		console.log("主頁GET請求");
  		res.send("hello get");
  	})
  	
  	//主頁 post請求
  	app.post('/',function(req,res){
  		console.log("主頁post請求");
  		res.send("hello post");
  	})
  	
  	//刪除頁面
  	app.get('/del_user',function(req,res){
  		console.log("del_user get 響應要求");
  		res.send("刪除頁面");
  	})
  	
  	//用戶頁面請求
  	app.get('/list_user',function(req,res){
  		console.log("list_user get 響應要求");
  		res.send("用戶頁面請求");
  	})
  	
  	var server=app.listen(8081,function(){
  		var host=server.address().address
  		var port=server.address().port
  		console.log("应用实例，访问地址为 http://%s:%s", host, port);
  	})
  	
  }
  
  
  //表單提價 
  from_submit();
  //表單提價 
  function from_submit(){
  var express = require('express');
	var app = express();
	var bodyParser = require('body-parser');
	//創建編碼解析
	var urlencodedParser = bodyParser.urlencoded({ extended: false })
	
	app.use(express.static('public'));
	
	app.get('/form_index.html',function(req,res){
		res.sendFile(__dirname+"/"+form_index.html);
	})
	
	app.post('/process_post', urlencodedParser, function (req, res) {
 
   		// 输出 JSON 格式
	   var response = {
	       "names":req.body.names,
	       "passwords":req.body.passwords
	   };
	    //加入數據庫
	   mysql_connec(req.body.names,req.body.passwords);
	   console.log(response);
	 	 res.send("1");
	   res.end();
	   
	})
	
	
	
	var server = app.listen(8888, function () {
	var host = server.address().address
	var port = server.address().port
	console.log("应用实例，访问地址为 http://%s:%s", host, port)
	})
	
  }
  
  
  
  
  
  
  //數據庫鏈接方法
//mysql_connec();
  
  //數據庫鏈接方法
  function mysql_connec(name,pas) {

	//鏈接數據庫
	var mysql = require("mysql");
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '931623824',
		database: 'xmibear'
	})

	connection.connect();

	//查詢語句
//	var selectSql = "select * from formtable";
//	connection.query(selectSql, function(err, res) {
//		if(err) {
//			console.log('[select error]-', err.message);
//			return;
//		}
//		console.log("\n\n----------查詢語句-----------------------\n");
//		console.log(res);
//		console.log("\n----------查詢語句ENDENDNEDNED-----------");
//
//	})

	//插入數據
	var addSql = "insert into formtable(id,name,password) values(0,?,?)";
	var addParmas = [name, pas];
	connection.query(addSql, addParmas, function(err, res) {
		if(err) {
			console.log("[insert error]-", err.message);
			return;
		}
		console.log("\n\n----------插入數據-----------------------\n");
		console.log(res);
		console.log("\n----------插入數據ENDENDNEDNED-----------");

	})

	//更新數據
//	var upSql = "update formtable set name=?,password=? where id=?";
//	var upParmas = ["劉王婆", "55555", 1];
//	connection.query(upSql, upParmas, function(err, res) {
//		if(err) {
//			console.log("[updata error]-", err.message);
//			return;
//		}
//		console.log("\n\n----------更新數據-----------------------\n");
//		console.log(res);
//		console.log("\n----------更新數據ENDENDNEDNED-----------");
//	})

	//刪除數據
//	var delSql = "delete from formtable where name='小劉'";
//	connection.query(delSql, function(err, res) {
//		if(err) {
//			console.log('[DELETE ERROR] - ', err.message);
//			return;
//		}
//		console.log("\n\n----------刪除數據-----------------------\n");
//		console.log(res);
//		console.log("\n----------刪除數據ENDENDNEDNED-----------");
//	})
	connection.end();

}