;!(function() {
	var Utilis = function() {};
	Utilis.prototype.setLs = function(key ,json) {
		window.localStorage.setItem(key, JSON.stringify(json));
	};
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
	},
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

	return window.Utilis;
})();