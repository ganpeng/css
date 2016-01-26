;!(function() {
	var Utilis = function() {};
	/**
	 * [setLs 本地存储]
	 * @param {[String]} key  [存储的key]
	 * @param {[String]} json [存储的value]
	 */
	Utilis.prototype.setLs = function(key ,json) {
		window.localStorage.setItem(key, JSON.stringify(json));
	};
	/**
	 * [getLs 获取本地存储]
	 * @param  {[String]} key [需要获取的key]
	 * @return {[String]}     [返回key的值]
	 */
	Utilis.prototype.getLs = function(key) {
		var str = window.localStorage.getItem(key);
		if (str !== '' && str !== null) {
			return JSON.parse(str);
		} else {
			return false;
		}
	};
	/**
	 * [offsetDate 过去指定时间与当前时间之间的偏移]
	 * @param  {[date]} UTCTime [过去的某个时间]
	 * @return {[string]}         [返回的时间的偏移量]
	 */
	Utilis.prototype.offsetDate = function(UTCTime) {
		if (UTCTime == "" || UTCTime == undefined)
			return "";
		var now = new Date();
		var date = new Date(UTCTime);

		var offsetMS = parseInt((now.getTime() - date.getTime()) / 1000 / 60);
		if (offsetMS < 5)
			return "刚刚";
		else if (offsetMS < 60)
			return offsetMS + "分钟前";
		else if (now.pattern("yyyy-MM-dd") == date.pattern("yyyy-MM-dd"))
			return date.pattern("HH:mm");
		else if (now.pattern("yyyy") == date.pattern("yyyy"))
			return date.pattern("M月d日")
		else
			return date.pattern("yyyy年M月d日");
	};
	/**
	 * [showNumbers 判断一个数值，如果超过10000，则显示num + '万']
	 * @param  {[Number]} num [数值]
	 * @return {[String]}     [返回数值对应的字符串值]
	 */
	Utilis.prototype.showNumbers = function(num) {
		if(!num)
			return 0;
		if(num >= 10000){
			num = parseInt(num / 10000) + '万';
		}
		return num;
	}
	/**
	 * [cutStr 截取指定长度的字符串]
	 * @param  {[String]} str [需要截取的字符串]
	 * @param  {[Number]} len [需要截取的字符串的长度]
	 * @return {[String]}     [返回截取之后的字符串]
	 */
	Utilis.prototype.cutStr = function(str, number) {
		var length = str.length;
		var tmp = str.substr(0, number);
		if (str.length > number) {
		tmp += "…";
		}
		return tmp;
	}

	/**
	 * [replaceAll 替换全部匹配到的字符串]
	 * @param  {[String]} s1 [被替换的字符串]
	 * @param  {[String]} s2 [替换字符串]
	 * @return {[String]}    [替换之后的字符串]
	 */
	Utilis.prototype.replaceAll = function(str,s1, s2) {
		return str.replace(new RegExp(s1, 'gm'), s2);
	}
	/**
	 * [trim 清除空格]
	 * @return {[String]} [清除空格之后得到的字符串]
	 */
	Utilis.prototype.trim = function(str) {
		var reExtraSpace = /^\s*(.*?)\s+$/;
		return str.replace(reExtraSpace, '$1');
	}
	/**
	 * [ltrim 清除左边空格]
	 * @return {[String]} [清除左边空格后得到的字符串]
	 */
	Utilis.prototype.ltrim = function(str) {
		var reExtraSpace = /^(\s*| *)/;
		return str.replace(reExtraSpace, "");
	}
	/**
	 * [rtrim 清除右边空格]
	 * @return {[String]} [清除右边空格得到的字符串]
	 */
	Utilis.prototype.rtrim = function(str) {
		var reExtraSpace = /(\s*| *)$/;
		return str.replace(reExtraSpace, "");
	}
	/**
	 * [startWith 判断是否以某个字符串开头]
	 * @param  {[String} str [要判断的字符串]
	 * @param  {[String]} s   [要判断的子字符串]
	 * @return {[Bollean]}  [是以该字符串开头则返回True,否则返回False]
	 */
	Utilis.prototype.startWith = function(str, s) {
		return str.indexOf(s) === 0;
	}
	/**
	 * [endWith 判断是否以某个字符串开头]
	 * @param  {[String} str [要判断的字符串]
	 * @param  {[String]} s   [要判断的子字符串]
	 * @return {[Bollean]}  [是以该字符串结尾则返回True,否则返回False]
	 */
	Utilis.prototype.endWith = function(str, s) {
		var d = str.length - s.length;
		return (d >= 0 && str.lastIndexOf(s) === d)
	}
	/**
	 * [htmlEncode 转移html标签]
	 * @param  {[String]} text [需要转移的html字符串]
	 * @return {[String]}      [转换完成之后的字符串]
	 */
	Utilis.prototype.htmlEncode = function(text) {
		return text.replace(/&/g ,'&').replace(/\"/g, '"').replace(/\</g, '<').replace(/\>/g, '>');
	}
	/**
	 * [isDigit 判断一个值是否为数字]
	 * @param  {[String]}  value [需要判断的字符串]
	 * @return {Boolean}       [是返回true,否返回false]
	 */
	Utilis.prototype.isDigit = function(value) {
		var patrn = /^[0-9]*$/;
		if (value == "" || patrn.exec(value) == null) {
			return false;
		} else {
			return true;
		}
	}
	/**
	 * [setCookie 将cookie的名称name, 值value,过期时间Hour,存储到document.cookie中]
	 * @param {[String]} name  [cookie name]
	 * @param {[String]} value [cookie name 对应的值]
	 * @param {[Number]} Hours [过期时间]
	 */
	Utilis.prototype.setCookie = function(name, value, Hours) {
	    var d = new Date();
	    var offset = 8;
	    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
	    var nd = utc + (3600000 * offset);
	    var exp = new Date(nd);
	    exp.setTime(exp.getTime() + Hours * 60 * 60 * 1000);
	    console.log(exp.toGMTString());
	    document.cookie = name + "=" + escape(value) + ";path=/;expires=" + exp.toGMTString() + ";domain=360doc.com;"
	}
	/**
	 * [getCookie 获取客户端的cookie值]
	 * @param  {[String]} name [cookie的key]
	 * @return {[String]}      [key所对应的值]
	 */
	Utilis.prototype.getCookie = function(name) {
		var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
		if (arr !== null) {
			return unescape(arr[2]);
		}
		return null;
	}
	/**
	 * [addBookmark 添加收藏夹]
	 */
	Utilis.prototype.addBookmark = function(){
	    var ctrl = (navigator.userAgent.toLowerCase()).indexOf('mac') != -1 ? 'Command/Cmd': 'CTRL';
	    try{
	        if (document.all) { //IE类浏览器
	            try {
	                window.external.toString(); //360浏览器不支持window.external，无法收藏
	                window.alert("国内开发的360浏览器等不支持主动加入收藏。\n您可以尝试通过浏览器菜单栏 或快捷键 ctrl+D 试试。");
	            }
	            catch (e){
	                try{
	                    window.external.addFavorite(window.location, document.title);
	                }
	                catch (e){
	                    window.external.addToFavoritesBar(window.location, document.title);  //IE8
	                }
	            }
	        }
	        else if (window.sidebar) { //firfox等浏览器
	            window.sidebar.addPanel(document.title, window.location, "");
	        }
	        else {
	            alert('您可以尝试通过快捷键' + ctrl + ' + D 加入到收藏夹~');
	        }
	    }
	    catch (e){
	        window.alert("因为IE浏览器存在bug，添加收藏失败！\n解决办法：在注册表中查找\n HKEY_CLASSES_ROOT\\TypeLib\\{EAB22AC0-30C1-11CF-A7EB-0000C05BAE0B}\\1.1\\0\\win32 \n将 C:\\WINDOWS\\system32\\shdocvw.dll 改为 C:\\WINDOWS\\system32\\ieframe.dll ");
	    }
	};
	/**
	 * [setHomepage 设置首页]
	 */
	Utilis.prototype.setHomepage = function() {
	    if (document.all) {
	        document.body.style.behavior = 'url(#default#homepage)';
	        document.body.setHomePage('http://w3cboy.com')
	    } else if (window.sidebar) {
	        if (window.netscape) {
	            try {
	                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect")
	            } catch(e) {
	                alert("该操作被浏览器拒绝，如果想启用该功能，请在地址栏内输入 about:config,然后将项 signed.applets.codebase_principal_support 值该为true")
	                }
	        }
	        var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
	        prefs.setCharPref('browser.startup.homepage', 'http://w3cboy.com')
	    }
	};
	/**
	 * [loadStyle 动态加载样式表]
	 * @param  {[String]} url [需要加载的样式表的路径地址]
	 * @return {[undefined]}     []
	 */
	Utilis.prototype.loadStyle = function(url) {
		try {
			document.createStyleSheet(url);
		} catch(e) {
			var cssLink = document.createElement('link');
			var head = document.getElementsByTagName('head')[0];
			cssLink.rel = 'stylesheet';
			cssLink.type = 'text/css';
			cssLink.href = url;
			head.appendChild(cssLink);
		}
	};
	/**
	 * [byId 返回按ID检索的元素对象]
	 * @param  {[String]} id [元素的id]
	 * @return {[Object]}    [Dom对象]
	 */
	Utilis.prototype.byId = function(id) {
		return !id ? null : document.getElementById(id);
	};
	/**
	 * [formatCss 格式化css代码]
	 * @param  {[String]} s [要格式化得css代码]
	 * @return {[String]}   [格式化后的css代码]
	 */
	Utilis.prototype.formatCss = function(s){//格式化代码
	    s = s.replace(/\s*([\{\}\:\;\,])\s*/g, "$1");
	    s = s.replace(/;\s*;/g, ";"); //清除连续分号
	    s = s.replace(/\,[\s\.\#\d]*{/g, "{");
	    s = s.replace(/([^\s])\{([^\s])/g, "$1 {\n\t$2");
	    s = s.replace(/([^\s])\}([^\n]*)/g, "$1\n}\n$2");
	    s = s.replace(/([^\s]);([^\s\}])/g, "$1;\n\t$2");
	    return s;
	};	
	/**
	 * [compressCss 压缩css代码]
	 * @param  {[String]} s [要压缩的css代码]
	 * @return {[String]}   [压缩完成的css代码]
	 */
	Utilis.prototype.compressCss = function(s) {//压缩代码
	    s = s.replace(/\/\*(.|\n)*?\*\//g, ""); //删除注释
	    s = s.replace(/\s*([\{\}\:\;\,])\s*/g, "$1");
	    s = s.replace(/\,[\s\.\#\d]*\{/g, "{"); //容错处理
	    s = s.replace(/;\s*;/g, ";"); //清除连续分号
	    s = s.match(/^\s*(\S+(\s+\S+)*)\s*$/); //去掉首尾空白
	    return (s == null) ? "" : s[1];
	};
	/**
	 * [getPageHeight 获取页面的高度]
	 * @return {[Number]} [得到页面高度]
	 */
	Utilis.prototype.getPageHeight = function(){
	    var g = document, a = g.body, f = g.documentElement, d = g.compatMode == "BackCompat"
	                    ? a
	                    : g.documentElement;
	    return Math.max(f.scrollHeight, a.scrollHeight, d.clientHeight);
	};
	/**
	 * [getPageWidth 获取页面的宽度]
	 * @return {[Number]} [得到的页面的宽度]
	 */
	Utilis.prototype.getPageWidth = function(){
	    var g = document, a = g.body, f = g.documentElement, d = g.compatMode == "BackCompat"
	                    ? a
	                    : g.documentElement;
	    return Math.max(f.scrollWidth, a.scrollWidth, d.clientWidth);
	};
	/**
	 * [getPageScrollLeft 获取页面的scrollLeft值]
	 * @return {[Number]} [得到的scrollLeft的值]
	 */
	Utilis.prototype.getPageScrollLeft = function(){
	    var a = document;
	    return a.documentElement.scrollLeft || a.body.scrollLeft;
	};
	/**
	 * [getPageScrollTop 获取页面的scrollTop的值]
	 * @return {[Number]} [得到的scrollTop的值]
	 */
	Utilis.prototype.getPageScrollTop = function(){
	    var a = document;
	    return a.documentElement.scrollTop || a.body.scrollTop;
	};
	/**
	 * [getPageViewWidth 获取页面的可视宽度]
	 * @return {[Number]} []
	 */
	Utilis.prototype.getPageViewWidth = function(){
	    var d = document, a = d.compatMode == "BackCompat"
	                    ? d.body
	                    : d.documentElement;
	    return a.clientWidth;
	};
	/**
	 * [getPageViewHeight 获取页面的可是高度]
	 * @return {[Number]} []
	 */
	Utilis.prototype.getPageViewHeight = function() {
	    var d = document, a = d.compatMode == "BackCompat"
	                    ? d.body
	                    : d.documentElement;
	    return a.clientHeight;
	};
	/**
	 * [removeUrlPrefix 去掉url的前缀]
	 * @param  {[String]} a [带前缀的url]
	 * @return {[String]}   [不带前缀的url]
	 */
	Utilis.prototype.removeUrlPrefix = function(a){
	    a=a.replace(/：/g,":").replace(/．/g,".").replace(/／/g,"/");
	    while(trim(a).toLowerCase().indexOf("http://")==0){
	        a=trim(a.replace(/http:\/\//i,""));
	    }
	    return a;
	};
	/**
	 * [uniqueId 获取随机数时间戳]
	 * @return {[Number]} []
	 */
	Utilis.prototype.uniqueId = function(){
	    var a=Math.random,b=parseInt;
	    return Number(new Date()).toString()+b(10*a())+b(10*a())+b(10*a());
	};
	/**
	 * [chgCase 全半角转化]
	 * @param  {[String]} sStr  [要转化的字符串]
	 * @param  {[Number]} iCase [转化参数,0:全角到半角，1:半角到全角]
	 * @return {[String]}       [转化后的字符串]
	 */
	Utilis.prototype.chgCase = function(sStr,iCase){
		//iCase: 0全到半，1半到全，其他不转化
	    if(typeof sStr != "string" || sStr.length <= 0 || !(iCase === 0 || iCase == 1)){
	        return sStr;
	    }
	    var i,oRs=[],iCode;
	    if(iCase){/*半->全*/
	        for(i=0; i<sStr.length;i+=1){ 
	            iCode = sStr.charCodeAt(i);
	            if(iCode == 32){
	                iCode = 12288;                                
	            }else if(iCode < 127){
	                iCode += 65248;
	            }
	                oRs.push(String.fromCharCode(iCode)); 
	            }                
	    }else{/*全->半*/
	        for(i=0; i<sStr.length;i+=1){ 
	            iCode = sStr.charCodeAt(i);
	            if(iCode == 12288){
	                iCode = 32;
	            }else if(iCode > 65280 && iCode < 65375){
	                iCode -= 65248;                                
	            }
	                oRs.push(String.fromCharCode(iCode)); 
	         }                
	    }                
	    return oRs.join("");                
	};
	/**
	 * [checkKey 检查是否为键盘的有效输入]
	 * @param  {[Number]} iKey [description]
	 * @return {[Boolean]}      [有效值：true,无效值：false]
	 */
	Utilis.prototype.checkKey = function(iKey){
	    if(iKey == 32 || iKey == 229){return true;}/*空格和异常*/
	    if(iKey>47 && iKey < 58){return true;}/*数字*/
	    if(iKey>64 && iKey < 91){return true;}/*字母*/
	    if(iKey>95 && iKey < 108){return true;}/*数字键盘1*/
	    if(iKey>108 && iKey < 112){return true;}/*数字键盘2*/
	    if(iKey>185 && iKey < 193){return true;}/*符号1*/
	    if(iKey>218 && iKey < 223){return true;}/*符号2*/
	    return false;
	};
	/**
	 * [getScrollXY 获取网页的scrollLeft和scrollTop值]
	 * @return {[Object]} [x:scrollLeft,y:scrollTop]
	 */
	Utilis.prototype.getScrollXY = function() {
	    return document.body.scrollTop ? {
	        x: document.body.scrollLeft,
	        y: document.body.scrollTop
	    }: {
	        x: document.documentElement.scrollLeft,
	        y: document.documentElement.scrollTop
	    }
	};
	/**
	 * [timeFormat 时间个性化输出]
	 * @param  {[Date]} time [时间值]
	 * @return {[String]}      [个性化输出的时间字符串]
	 *  1、< 60s, 显示为“刚刚”
	 *  2、>= 1min && < 60 min, 显示与当前时间差“XX分钟前”
	 *  3、>= 60min && < 1day, 显示与当前时间差“今天 XX:XX”
	 *	4、>= 1day && < 1year, 显示日期“XX月XX日 XX:XX”
	 *	5、>= 1year, 显示具体日期“XXXX年XX月XX日 XX:XX”
	 */
	Utilis.prototype.timeFormat = function(time){
	    var date = new Date(time),
	        curDate = new Date(),
	        year = date.getFullYear(),
	        month = date.getMonth() + 10,
	        day = date.getDate(),
	        hour = date.getHours(),
	        minute = date.getMinutes(),
	        curYear = curDate.getFullYear(),
	        curHour = curDate.getHours(),
	        timeStr;
	 
	    if(year < curYear){
	        timeStr = year +'年'+ month +'月'+ day +'日 '+ hour +':'+ minute;
	    }else{
	        var pastTime = curDate - date,
	            pastH = pastTime/3600000;
	 
	        if(pastH > curHour){
	              timeStr = month +'月'+ day +'日 '+ hour +':'+ minute;
	        }else if(pastH >= 1){
	              timeStr = '今天 ' + hour +':'+ minute +'分';
	        }else{
	              var pastM = curDate.getMinutes() - minute;
	              if(pastM > 1){
	                timeStr = pastM +'分钟前';
	              }else{
	                timeStr = '刚刚';
	              }
	        }
	    }
	    return timeStr;
	};
	/**
	 * [backTop 页面返回顶部的通用方法]
	 * @param  {[DOM节点]} btnId [触发返回顶部事件的按钮]
	 * @return {[undefined]}       [description]
	 */
	Utilis.prototype.backTop = function(btnId) {
	    var btn = document.getElementById(btnId);
	    var d = document.documentElement;
	    var b = document.body;
	    window.onscroll = set;
	    btn.style.display = "none";
	    btn.onclick = function() {
	        btn.style.display = "none";
	        window.onscroll = null;
	        this.timer = setInterval(function() {
	            d.scrollTop -= Math.ceil((d.scrollTop + b.scrollTop) * 0.1);
	            b.scrollTop -= Math.ceil((d.scrollTop + b.scrollTop) * 0.1);
	            if ((d.scrollTop + b.scrollTop) == 0) clearInterval(btn.timer, window.onscroll = set);
	            }, 10);
	    };
	    function set() {
	        btn.style.display = (d.scrollTop + b.scrollTop > 100) ? 'block': "none"
	    }
	};
	/**
	 * [openWindow 打开一个新窗口的通用方法]
	 * @param  {[String]} url        [新窗口对应的资源路径]
	 * @param  {[String]} windowName [新窗口的名字]
	 * @param  {[Number]} width      [新窗口的宽度]
	 * @param  {[Number]} height     [新窗口的高度]
	 * @return {[type]}            [description]
	 */
	Utilis.prototype.openWindow = function(url,windowName,width,height){
	    var x = parseInt(screen.width / 2.0) - (width / 2.0); 
	    var y = parseInt(screen.height / 2.0) - (height / 2.0);
	    var isMSIE= (navigator.appName == "Microsoft Internet Explorer");
	    if (isMSIE) {
	        var p = "resizable=1,location=no,scrollbars=no,width=";
	        p = p+width;
	           p = p+",height=";
	           p = p+height;
	        p = p+",left=";
	        p = p+x;
	        p = p+",top=";
	        p = p+y;
	        retval = window.open(url, windowName, p);
	    } else {
	        var win = window.open(url, "ZyiisPopup", "top=" + y + ",left=" + x + ",scrollbars=" + scrollbars + ",dialog=yes,modal=yes,width=" + width + ",height=" + height + ",resizable=no" );
	        eval("try { win.resizeTo(width, height); } catch(e) { }");
	        win.focus();
	    }
	};
	/**
	 * [getHtmlString 提取页面代码中的所有网址]
	 * @return {[String]} []
	 */
	Utilis.prototype.getHtmlString = function() {
		var aa = document.documentElement.outerHTML.match(/(url\(|src=|href=)[\"\']*([^\"\'\(\)\<\>\[\] ]+)[\"\'\)]*|(http:\/\/[\w\-\.]+[^\"\'\(\)\<\>\[\] ]+)/ig).join("\r\n").replace(/^(src=|href=|url\()[\"\']*|[\"\'\>\) ]*$/igm,"");
		return aa;
	};
	/**
	 * [transform 将数值金额转换成大写的形式]
	 * @param  {[String]} tranvalue [数值字符串，比如 : '134.56']
	 * @return {[String]}           [返回转换之后的字符串：比如 : '壹佰叁拾肆元伍角陆分']
	 */
	Utilis.prototype.transform = function(tranvalue) {
		//拆分整数与小数
		function splits(tranvalue) {
		    var value = new Array('', '');
		    temp = tranvalue.split(".");
		    for (var i = 0; i < temp.length; i++) {
		        value = temp;
		    }
		    return value;
		}

	    try {
	        var i = 1;
	        var dw2 = new Array("", "万", "亿"); //大单位
	        var dw1 = new Array("拾", "佰", "仟"); //小单位
	        var dw = new Array("零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"); //整数部分用
	        //以下是小写转换成大写显示在合计大写的文本框中     
	        //分离整数与小数
	        var source = splits(tranvalue);
	        var num = source[0];
	        var dig = source[1];
	        //转换整数部分
	        var k1 = 0; //计小单位
	        var k2 = 0; //计大单位
	        var sum = 0;
	        var str = "";
	        var len = source[0].length; //整数的长度
	        for (i = 1; i <= len; i++) {
	              var n = source[0].charAt(len - i); //取得某个位数上的数字
	              var bn = 0;
	              if (len - i - 1 >= 0) {
	                bn = source[0].charAt(len - i - 1); //取得某个位数前一位上的数字
	              }
	              sum = sum + Number(n);
	              if (sum != 0) {
	                str = dw[Number(n)].concat(str); //取得该数字对应的大写数字，并插入到str字符串的前面
	                if (n == '0') sum = 0;
	              }
	              if (len - i - 1 >= 0) { //在数字范围内
	                if (k1 != 3) { //加小单位
	                      if (bn != 0) {
	                        str = dw1[k1].concat(str);
	                      }
	                      k1++;
	                } else { //不加小单位，加大单位
	                      k1 = 0;
	                      var temp = str.charAt(0);
	                      if (temp == "万" || temp == "亿") //若大单位前没有数字则舍去大单位
	                      str = str.substr(1, str.length - 1);
	                      str = dw2[k2].concat(str);
	                      sum = 0;
	                }
	              }
	              if (k1 == 3){ //小单位到千则大单位进一
	                k2++;
	              }
	        }
	        //转换小数部分
	        var strdig = "";
	        if (dig != "") {
	              var n = dig.charAt(0);
	              if (n != 0) {
	                strdig += dw[Number(n)] + "角"; //加数字
	              }
	              var n = dig.charAt(1);
	              if (n != 0) {
	                strdig += dw[Number(n)] + "分"; //加数字
	              }
	        }
	        str += "元" + strdig;
	    } catch(e) {
	        return "0元";
	    }
	    return str;
	};
	/**
	 * [winResize 窗口变化resize的实现]
	 * @return {[unfefined]} []
	 */
	Utilis.prototype.winResize = function() {
	    var fn = function(){
	            var w = document.documentElement ? document.documentElement.clientWidth : document.body.clientWidth
	                    ,r = 1255;
	            if(w < r){
	                    //当窗体的宽度小于1255的时候执行相应的操作
	                    console.log('<1255');
	            }else{
	                    //当窗体的宽度大于1255的时候执行相应的操作
	                    console.log('>1255');
	            }
	    }
	    if(window.addEventListener){
	            window.addEventListener('resize', function(){ fn(); }, false);
	    }else if(window.attachEvent){
	            window.attachEvent('onresize', function(){ fn(); });
	    }
	    fn();
	};
	/**
	 * [base64_decode 实现base64的编码]
	 * @type {[String]}
	 */
	Utilis.prototype.base64_decode = function(data){
	    var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	    var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,ac = 0,dec = "",tmp_arr = [];
	    if (!data) { return data; }
	    data += '';
	    do { 
	            h1 = b64.indexOf(data.charAt(i++));
	            h2 = b64.indexOf(data.charAt(i++));
	            h3 = b64.indexOf(data.charAt(i++));
	            h4 = b64.indexOf(data.charAt(i++));
	            bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;
	            o1 = bits >> 16 & 0xff;
	            o2 = bits >> 8 & 0xff;
	            o3 = bits & 0xff;
	            if (h3 == 64) {
	                    tmp_arr[ac++] = String.fromCharCode(o1);
	            } else if (h4 == 64) {
	                    tmp_arr[ac++] = String.fromCharCode(o1, o2);
	            } else {
	                    tmp_arr[ac++] = String.fromCharCode(o1, o2, o3);
	            }
	    } while (i < data.length);
	    dec = tmp_arr.join('');
	    dec = this.utf8_decode(dec);
	    return dec;
	};
	/**
	 * [utf8_decode 实现utf-8的编码]
	 * @param  {[String]} str_data []
	 * @return {[type]}          [description]
	 */
	Utilis.prototype.utf8_decode = function(str_data){
	    var tmp_arr = [],i = 0,ac = 0,c1 = 0,c2 = 0,c3 = 0;str_data += '';
	    while (i < str_data.length) {
	            c1 = str_data.charCodeAt(i);
	            if (c1 < 128) {
	                    tmp_arr[ac++] = String.fromCharCode(c1);
	                    i++;
	            } else if (c1 > 191 && c1 < 224) {       
	                    c2 = str_data.charCodeAt(i + 1);
	                    tmp_arr[ac++] = String.fromCharCode(((c1 & 31) << 6) | (c2 & 63));
	                    i += 2;
	            } else {
	                    c2 = str_data.charCodeAt(i + 1);
	                    c3 = str_data.charCodeAt(i + 2);
	                    tmp_arr[ac++] = String.fromCharCode(((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
	                    i += 3;
	            }
	    } 
	    return tmp_arr.join('');
	};
	return O = {
		Utilis: Utilis
	};
})();