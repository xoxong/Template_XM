var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
var multer = require('multer');

app.use(express.static('img'));
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(multer({
	dest: '/tmp/'
}).array('image'));

app.get('/index.html', function(req, res) {
	res.sendFile(__dirname + "/" + "index.html");
})

app.post('/file_upload', function(req, res) {

	console.log(req.files[0]); // 上传的文件信息

	var des_file = __dirname + "/" + req.files[0].originalname;
	fs.readFile(req.files[0].path, function(err, data) {
		fs.writeFile(des_file, data, function(err) {
			if(err) {
				console.log(err);
			} else {
				response = {
					message: 'File uploaded successfully',
					filename: req.files[0].originalname
				};
			}
			console.log(response);
			res.end(JSON.stringify(response));
		});
	});
})

var server = app.listen(8888, function() {.

	var host = server.address().address
	var port = server.address().port

	console.log("应用实例，访问地址为 http://%s:%s", host, port)

})

var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '931623824',
	database: 'xmibear'
});

connection.connect();

var addsql = 'delete from websites where id=6';
var addSqlParams = ['菜鸟移动站', 'https://c.runoob.com', 6];

//查
connection.query(sql, function(err, result) {
	if(err) {
		console.log('[select error]-', err.message);
		return;
	}

	console.log('-----------------------------------select-----------------------');
	console.log(result);
	console.log("----------------------------------------------------------\n\n");

})
//增
connection.query(addsql, function(err, result) {
	if(err) {
		console.log('[DELETE ERROR] - ', err.message);
		return;
	}
	console.log('--------------------------DELETE----------------------------');
	console.log('DELETE affectedRows', result.affectedRows);
	console.log('-----------------------------------------------------------------\n\n');
});

connection.end();

// file name :test.js
var express = require('express');
var app = express();
var bodyParse = require('body-parser')
var cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(bodyParse.urlencoded({
	extended: false
}));

// 处理根目录的get请求
app.get('/', function(req, res) {
	res.sendfile('index.html');
	console.log('main page is required ');
});

// 处理/login的get请求
app.get('/add', function(req, res) {
	res.sendfile('add.html');
	console.log('add page is required ');
});

// 处理/login的post请求
app.post('/login', function(req, res) {
	name = req.body.name;
	pwd = req.body.pwd;
	console.log(name + '--' + pwd);
	res.status(200).send(name + '--' + pwd);
});

// 监听3000端口
var server = app.listen(3000);