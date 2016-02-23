var express = require('express');
var app = express();
var http = require('http').Server(app);
var fs = require('fs');
var database ={};
fs.readdir('./public/image',function(err,files){
	for (var i = 0; i < files.length; i++) {
		fs.stat('./public/image/'+files[i],(function(i){
			return function(err,stats){
				var mtime = stats.ctime;
				var key = mtime.getFullYear()+'-'+mtime.getMonth()+'-'+mtime.getDate();
				if (!database[key]) {database[key] =[];}
				database[key].push(files[i]);
				console.log(database);
			// console.log(stats.mtime);
			}
		})(i)
		);
	}
});
app.use(express.static('public'));
//我们的目标:把 shenqi={}
//变成
// var shenqi ={
// 	1231:[{time:早上3点,src:'a.jpg'},{time:中午,src:'b.jpg'},]
// } ;

//让public这个文件可以通过 / 直接访问
// var database=[
// 	{name:'闹够了没有',          geshou:'赖伟峰',    duration:'03:58',    src:'./music/1.mp3'},
// 	{name:'短点',                geshou:'张敬轩',    duration:'04:26',    src:'./music/2.mp3'},
// 	{name:'听',                  geshou:'张杰',      duration:'05:09',    src:'./music/3.mp3'},
// 	{name:'燃烧翅膀',            geshou:'徐梵溪',    duration:'03:48',    src:'./music/4.mp3'},
// 	{name:'遇见',                geshou:'孙燕姿',    duration:'03:30',    src:'./music/5.mp3'},
// 	{name:'一首情歌',            geshou:'任重',      duration:'04:29',    src:'./music/6.mp3'},
// 	{name:'一肩之隔',            geshou:'秦岚',      duration:'04:12',    src:'./music/7.mp3'},
// 	{name:'默',                  geshou:'那英',      duration:'05:25',    src:'./music/8.mp3'},
// 	{name:'不将就',              geshou:'李荣浩',    duration:'05:13',    src:'./music/9.mp3'},
// 	{name:'约定的永恒',          geshou:'樊凡',      duration:'03:55',    src:'./music/10.mp3'},
// 	{name:'有一种勇气叫做放弃',  geshou:'丁当',      duration:'04:05',    src:'./music/11.mp3'}
// ];

var pics = {
	1448035200000:['image/1.png','image/2.png','image/3.png'],
	1448121600000:['image/4.png','image/5.png','image/6.png'],
	1448208000000:['image/7.png','image/8.png','image/9.png'],
 	1448294400000:['image/10.png','image/11.png','image/12.png'],
 	1448380800000:['image/13.png','image/14.png','image/15.png']
};

// var database ={
// 	'2015-10-27':['1.png','5.png'],
// 	'2015-10-26':['2.png','4.png']
// }


 //先写一个函数1 判断是否存在重复的
//再写一个函数2 所有的重复的只保留一个 返回去掉了几个
//while(1){2.根据2的结果在玩数组里添加随机值}

// app.get('/data',function(req,res) {
// 	res.sendFile(__dirname + '/login.html');
// 	var dict = {};
// 	var i=0;
// 	while(i<3) {
// 		var r= Math.floor(Math.random()*10);
// 		if (!dict[r]) {dict[r]=true; i++;}
// 	}
// 	var data=[];
// 	for(var j in dict){
// 		data.push(database[j]);
// 	}
// 	res.json(data);
// });
app.get('/',function(req,res) {
	res.sendFile(__dirname + '/index.html');
});
app.get('/daypicture',function(req,res) {
	if (database[req.query.d]) {
		res.json(database[req.query.d]);
	}else{
		res.send('none');
	}
});
// res.json -> {[]}  {}  []  [{}]
// res.send ->14 '我是中国人'
// res.sendfile()文件

app.get('/image',function(req,res) {
	for (var kk in pics) {
		if (req.query.time==kk) {
			res.json(pics[kk]);
		}
	}
});
// app.get('/ttt',function(req,res) {
// 	console.log(req.query.a,req.query.b);
// var heihei =['image/1.jpg','image/2.jpg','image/3.jpg'];
// 	res.json(heihei);
// });

http.listen(80,function(){
	console.log('listen on *:80');
});
//上面这些代码实质上做了些什么事
//所谓的web服务器软件,就是让电脑上的某个文件夹变成公开的
// 任何人都可以通过ip地址请求这个文件夹里的内容
// 前提是请求的时候要描述清楚双方交流的语言(采用http协议)
// for (var i = 0; i < 12; i++) {
// 	console.log(i);
// }
//node.js 就是一个应用程序  和浏览器和qq和sublime一样
//浏览器能干嘛 能上网 能解析js代码
//node.js 解析js代码

//可以把node.js理解为系统性的应用程序
//他让我们的操作系统从现在开始可以解析node.js代码

//node.js 在自己的运行环境中添加了很多特定的API
//比如对文件操作 对网络请求的操作
//对时间的操作等等

//--------------数据存储和逻辑操作------------
//浏览器   window setInterval setTimeout document.
//node     http file 

//客户端 服务器 这种模式有神魔好处
//网络的好处
//服务器模式服务范围是无限的

//浏览器根据url发起http请求
//服务器()根据请求内容作出回应


//js发起网络请求








//在页面输入   localhost:3000
//什么是服务器
//什么是url
//什么是http协议
//怎么访问服务器上的数据
//node.js是什么
//为什么需要服务器

//当我们在浏览器中输入http://ww.baidu.com的时候
//究竟发生了什么
//ajax是什么
//使用ajax有什么好处
//利用ajax和node.js可以做什么
//例子


//------------------------------------
// 计算机网络


// 互联网的硬件基础(路由 isp 猫)
// 上网(通过浏览器打开网页)的原理
// (tcp/ip http 数据包 ip地址 域名)
// 客户端出发 到 服务器去根据统一资源定位符去请求一个资源(信息)

// url(统一资源定位符)
// http://developer.mozilla.org/zh-CN/docs/

// 网页 网站














