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
	Utilis.prototype.setCookie = function (name, value, Hours) {
	    var d = new Date();
	    var offset = 8;
	    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
	    var nd = utc + (3600000 * offset);
	    var exp = new Date(nd);
	    exp.setTime(exp.getTime() + Hours * 60 * 60 * 1000);
	    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
	}
	return O = {
		Utilis: Utilis
	};
})();