window.onload = function(){
	var showii = document.getElementById('showimages');
	showii.onmousedown = function(e){
		e.preventDefault();
	}; 
var today1 = document.getElementById('today11');
today1.onclick = function(){
	window.location.reload();
};
var ajax = function(aa){
	var req = new XMLHttpRequest();
	req.open('get',aa.url);
	req.send();
	req.onreadystatechange = function(){
		if (this.readyState == this.DONE&&this.status==200) {
			aa.onsuccess(this.response); 
		}
	};
};
var date2string = function(){
	return date.getFullYear()+'-'+date.getMonth()+'-'+date.getDate();
};
var showzuo =document.getElementById('showzuo');
var showyou = document.getElementById('showyou');
var qingqiudangqiantupian = function(){
	ajax({
		url:'http://localhost/daypicture?d='+date2string(),
		onsuccess : function(data){
				daytimeshow.innerHTML='';
			if (data!=='none') {
				data= JSON.parse(data);
				for (var i = 0; i < data.length; i++) {
					var els = document.createElement('div');
					els.setAttribute('class','tupian');
					el = document.createElement('img');
					el.src = 'image/'+data[i];
					el.style.width ='90px';
					el.style.height ='90px';
					els.appendChild(el);
					daytimeshow.appendChild(els);
					var tupian = document.getElementsByClassName('tupian');
					for (var i = 0; i < tupian.length; i++) {
						tupian[i].index = i;
						tupian[i].onclick = function(){
							showimages.style.display = 'block';
							showimage.innerHTML = this.innerHTML;
							showimage.firstElementChild.style.width='200px';
							showimage.firstElementChild.style.height='200px';
							showimage.firstElementChild.style.left='50%';
							showimage.firstElementChild.style.marginLeft='100px';
							showimage.firstElementChild.style.top='50%';
							showimage.firstElementChild.style.marginTop='100px';
							var haha =this;
							showzuo.onclick = function(){
								if (haha.previousElementSibling) {
									showimage.innerHTML=haha.previousElementSibling.innerHTML ;
									haha=haha.previousElementSibling;
								}else{
									haha = tupian[tupian.length-1];
									showimage.innerHTML=tupian[tupian.length-1].innerHTML ;
								}
								showimage.firstElementChild.style.width='200px';
								showimage.firstElementChild.style.height='200px';
								showimage.firstElementChild.style.left='50%';
								showimage.firstElementChild.style.marginLeft='100px';
								showimage.firstElementChild.style.top='50%';
								showimage.firstElementChild.style.marginTop='100px';
							};
							showyou.onclick = function(){
								if (haha.nextElementSibling) {
									showimage.innerHTML=haha.nextElementSibling.innerHTML;
									haha=haha.nextElementSibling;
								}else{
									haha = tupian[0];
									showimage.innerHTML=tupian[0].innerHTML ;
								}
								showimage.firstElementChild.style.width='200px';
								showimage.firstElementChild.style.height='200px';
								showimage.firstElementChild.style.left='50%';
								showimage.firstElementChild.style.marginLeft='100px';
								showimage.firstElementChild.style.top='50%';
								showimage.firstElementChild.style.marginTop='100px';
							};
						}
					}
				}
			}
			document.getElementById('close').onclick = function(){
				showimages.style.display = 'none';
			};
		}
	})
};
// var hei = document.getElementsByClassName('hei');
// var d = new Date();
// var hh = d.getHours();
// var mm = d.getMinutes();
// if (hh.length<2) {hh='0'+hh;}
// if (mm.length<2) {mm='0'+mm;}
// if (Number(hh)<12) {second.innerHTML ='上午'+hh+':'+mm;};
// if (Number(hh)>12) {second.innerHTML ='下午'+(hh-12)+':'+mm;};
// dazi1.innerHTML = d.getDate();
// var xingqi = d.getDay();
// var xq;
// if (xingqi==1) {xq='一';}
// if (xingqi==2) {xq='二';}
// if (xingqi==3) {xq='三';}
// if (xingqi==4) {xq='四';}
// if (xingqi==5) {xq='五';}
// if (xingqi==6) {xq='六';}
// if (xingqi==0) {xq='日';}
// dazi2.innerHTML =d.getFullYear()+"年"+(d.getMonth()+1)+"月"+d.getDate()+"日"+"星期"+xq;
// riqi.innerHTML =d.getFullYear()+"年"+(d.getMonth()+1)+"月"+d.getDate()+"日";
// zhou.innerHTML = "星期"+xq;
// var pre = hei[d.getDate()-1],index;
// pre.setAttribute('id','now');
// for (var i = 0; i < hei.length; i++) {
// 	hei[i].onclick = function(){
// 		var ii = this.innerHTML;
// 		if (ii.length<2) {ii = '0'+ii;}
// 		d.setDate(ii);
// 		index = this;
// 		onDatechange(d,index,ii);
// 	};
// }
// var onDatechange = function(i,j,k){
// 	j.setAttribute('id','now');
// 	pre.removeAttribute('id');
// 	pre = j;
// 	xingqi = i.getDay();
// 	if (xingqi==1) {xq='一';}
// 	if (xingqi==2) {xq='二';}
// 	if (xingqi==3) {xq='三';}
// 	if (xingqi==4) {xq='四';}
// 	if (xingqi==5) {xq='五';}
// 	if (xingqi==6) {xq='六';}
// 	if (xingqi==0) {xq='日';}
// 	dazi1.innerHTML = k;
// 	dazi2.innerHTML = i.getFullYear()+"年"+(i.getMonth()+1)+"月"+k+"日"+"星期"+xq;
// 	riqi.innerHTML = i.getFullYear()+"年"+(i.getMonth()+1)+"月"+k+"日";
// 	zhou.innerHTML = "星期"+xq;

// };

var quan1 = document.getElementById('quan1');
for (var i = 1; i <=24; i++) {
		var heixian=document.createElement('div');
		heixian.setAttribute('class','heixian');
		heixian.style.top=(i-1)*50+100+'px';
		quan1.appendChild(heixian);
		var shijian=document.createElement('div');
		shijian.innerHTML=i;
		shijian.style.position='absolute';
		shijian.style.top='-10px';
		shijian.style.left='-20px';
		shijian.style.color='#A7A7A7';
		shijian.style.fontSize='14px';
		shijian.style.fontWeight='bold';
		heixian.appendChild(shijian);
		var huixian=document.createElement('div');
		huixian.setAttribute('class','huixian');
		huixian.style.top=(i-1)*50+75+'px';
		quan1.appendChild(huixian);
	};



var date = new Date();
var abc = date.getDate();
var bcd = date.getMonth();
var cde = date.getFullYear();
var ddd = new Date();
var meiyuetianshu=[31,28,31,30,31,30,31,31,30,31,30,31];
if (date.getFullYear()%4==0&&date.getFullYear()%100!=0||date.getFullYear()%400==0) {
	 meiyuetianshu=[31,29,31,30,31,30,31,31,30,31,30,31]; 	
}
//给他一个div class='aaaa aa aaa' 给他的一个字符串'a'
//aaaa aa aaa a ;
var addClass = function(el,s){
	var tmp =el.getAttribute('class').split(' ');
	var dict = {};
	for (var i = 0; i < tmp.length; i++) {
		dict[tmp[i]] = true;
	}
	if (!dict[s]) {
		el.setAttribute('class',el.getAttribute('class')+' '+s);
	}
};
var removeClass = function(el,s){
	var tmp =el.getAttribute('class').split(' ');
	var dict = {};
	for (var i = 0; i < tmp.length; i++) {
		dict[tmp[i]] = true;
	}
	delete dict[s];
	var ns ='';
	for(var name in dict){
		ns += ' '+name;
	}
	el.setAttribute('class',ns);
};



var xq = ['日','一','二','三','四','五','六'];
var isrunnian = function(year){
	if(year%4==0&&year%100!=0||year%400==0){
		return true;
	}
	return false;
};
var previousDay = function(){
	var currentyear = date.getFullYear(),
	    currentmonth = date.getMonth(),
	    currentdate = date.getDate(),
	    targetyear,targetmonth,targetdate;
	targetdate = currentdate-1;
	if (targetdate == 0) {
		targetyear = currentyear;
		targetmonth = currentmonth-1;
		if (targetmonth == -1) {
			targetyear = currentyear-1;	
			targetmonth=11;
		}
		if (targetmonth==1 ) {
			if(isrunnian(targetyear)){
				meiyuetianshu[1]=29;
			}
		}
		targetdate = meiyuetianshu[targetmonth];	
	}else{
		targetmonth = currentmonth;
		targetyear = currentyear;
	}
	date = new Date(targetyear,targetmonth,targetdate);
};
var shangyige;
var nt =document.getElementsByClassName('now-time'); 
var onDatechange = function(){
	var xx = date.getDate();
	var bcd1 = date.getMonth();
	var cde1 = date.getFullYear();
	if (date.getDay()==0||date.getDay()==6) {
		shijianzhou.style.background = '#ccc';
		if (abc==xx&&bcd==bcd1&&cde==cde1){
		shijianzhou.style.background = 'white';
		}
	}else{
		shijianzhou.style.background = 'white';
	}
	if (abc==xx&&bcd==bcd1&&cde==cde1){nt[0].style.display='block';today1.style.color='#CBCBCB';}else{nt[0].style.display='none';today1.style.color='#FF3B30';}
	var el=document.getElementById('d'+xx);
	if (shangyige) {removeClass(shangyige,'dianhou');}
	 addClass(el,'dianhou');
	 shangyige=el;
	var ii =date.getDate();
	if (ii<10) {ii='0'+ii};
	dazi1.innerHTML = ii;
	var ss=date.getFullYear()+" 年 "+(date.getMonth()+1)+" 月 "+ii+" 日 "+"星期"+xq[date.getDay()];
	dazi2.innerHTML =ss; 
	riqi.innerHTML = ss.slice(0,-3);
	zhou.innerHTML = ss.slice(-3);
//一行代码不要让编辑器出现横向滚动条
//一行代码的长度暴涨打印到纸上不换行
	qingqiudangqiantupian();
};
var shuzi = document.getElementsByClassName('shuzi');
var huarili =function(){
for (var i = 0; i < shuzi.length; i++) {
	removeClass(shuzi[i],'dianhou');
	removeClass(shuzi[i],'dianhou1');
};
	shangyige=null;
	var i =0;
	var tmp = date.getDate();
	date.setDate(1);
	var xingqi =date.getDay();
	date.setDate(tmp);
	l=(xingqi==0)?6:xingqi-1;
	if (date.getMonth()-1==-1) {
		shangyuetianshu =31;
	}else{
		var shangyuetianshu = meiyuetianshu[date.getMonth()-1];
	}
	for(;i<l;i++){
		shuzi[i].innerHTML = shangyuetianshu-l+i+1;
		shuzi[i].style.color = '#ccc';
		shuzi[i].removeAttribute('id');
		shuzi[i].setAttribute('pr','true');
		shuzi[i].removeAttribute('nx');
		removeClass(shuzi[i],'dianhou');
	}
	for(;i<meiyuetianshu[date.getMonth()]+l;i++) {
		if ( i-l+1 ==ddd.getDate()&&date.getMonth()==ddd.getMonth()&&date.getFullYear()==ddd.getFullYear()) {
			addClass(shuzi[i],'dianhou1');
		}else{
			removeClass(shuzi[i],'dianhou1');
		}
		removeClass(shuzi[i],'dianhou');
		shuzi[i].innerHTML = i-l+1;
		shuzi[i].removeAttribute('id');
		shuzi[i].setAttribute('id','d'+( i-l+1));
		shuzi[i].style.color = 'black';
		shuzi[i].removeAttribute('pr');
		shuzi[i].removeAttribute('nx');	
	}
	var D=i;
	for (;i<42;i++){
		shuzi[i].innerHTML = i-D+1;
		shuzi[i].style.color = '#ccc';
		shuzi[i].removeAttribute('id');
		shuzi[i].removeAttribute('pr');
		shuzi[i].setAttribute('nx','true');
		removeClass(shuzi[i],'dianhou');
	}
	if (42-D>=7&&42-D<14) {
		for (var i = 0; i <shuzi.length; i++) {
			shuzi[i].style.height ='36px';
			shuzi[i].style.lineHeight ='36px';
		}
		for (var j = 0; j < 7; j++) {
			shuzi[shuzi.length-1-j].style.display='none';
		}
	}
	if (42-D==14) {
		for (var i = 0; i <shuzi.length; i++) {
			shuzi[i].style.height ='44px';
			shuzi[i].style.lineHeight ='44px';
		}
		for (var j = 0; j < 14; j++) {
			shuzi[shuzi.length-1-j].style.display='none';
		}
	}

	if (42-D<7) {
		for (var i = 0; i <shuzi.length; i++) {
			shuzi[i].style.height ='31px';
			shuzi[i].style.lineHeight ='31px';
		}
		for (var k = 0; k < 7; k++) {
			shuzi[shuzi.length-1-k].style.display='block';		
		}
	}
};
huarili();
onDatechange();
for (var i = 0; i < shuzi.length; i++) {
	shuzi[i].onclick = function(){
		// if (this.innerHTML!=ddd.getDate()||date.getMonth()!=ddd.getMonth()||date.getFullYear()!=ddd.getFullYear()) {
		// 	removeClass(shuzi,'dianhou1');		
		// }
		if (this.innerHTML==ddd.getDate()&&date.getMonth()==ddd.getMonth()&&date.getFullYear()==ddd.getFullYear()) {
			addClass(this,'dianhou1');		
		}
		var a = date.getFullYear();
		var b = date.getMonth();
		var c = date.getDate();
		var x,y,z;
		if (this.hasAttribute('id')) {
			date.setDate(this.innerHTML);
			onDatechange();
		}
		else if (this.hasAttribute('pr')) {
			//根据a,b,c得到逻辑正确的x,y,z
			if (b-1>=0) {x=a; y=b-1;}
			else{
				x=a-1; 
				if (x%4==0&&x%100!=0||x%400==0) {
	 				meiyuetianshu[1]=29;	
				}else{
	 				meiyuetianshu[1]=28;	
				}
				y=11;
			}
			z=this.innerHTML;
			date = new Date(x,y,z);
			huarili();
			onDatechange();
		}else if (this.hasAttribute('nx')) {
			if (b+1<12) {x=a; y=b+1;}
			else{
				x=a+1;
				if (x%4==0&&x%100!=0||x%400==0) {
	 				meiyuetianshu[1]=29;	
				}else{
	 				meiyuetianshu[1]=28;	
				}
				y=0;
			}
			z=this.innerHTML;
			date = new Date(x,y,z);
			huarili();
			onDatechange();
		}
	};
}
kuo.onclick = function(){
	previousDay();
	huarili();
	onDatechange();//这个函数专门用来更新页面显示
} 
kuo.onmousedown = function(e){
	e.preventDefault();
};
var nextDay = function(){
	var currentyear = date.getFullYear();
	var currentmonth = date.getMonth();
	var currentdate = date.getDate();
	var targetyear,targetmonth,targetdate;
	targetdate = currentdate+1;
	if (targetdate == meiyuetianshu[currentmonth]+1) {
		targetyear = currentyear;
		targetmonth = currentmonth+1;
		if (targetmonth == 12) {
			targetyear = currentyear+1;	
			targetmonth=0;
		}
		if (targetmonth == 1) {
			if(isrunnian(targetyear)){
				meiyuetianshu[1]=29;
			}
		}
		targetdate = 1;	
	}else{
		targetmonth = currentmonth;
		targetyear = currentyear;
	}
	date = new Date(targetyear,targetmonth,targetdate);
};
hao.onclick = function(){
	nextDay();
	huarili();
	onDatechange();
}
hao.onmousedown = function(e){
	e.preventDefault();
};


var hongxian = document.getElementById('hongxian');
var second = document.getElementById('second');
setInterval( function(){
	var nndd = new Date();
	var hahaha = nndd.getTime();
	var nndd1 = new Date(cde,bcd,abc,0,0,0);
	var nd2 = nndd1.getTime();
	hongxian.style.top = (hahaha-nd2)/(24*60*60*1000)*1250+'px';
	second.innerHTML=nndd.getHours()+':'+nndd.getMinutes();
},100);



























}
