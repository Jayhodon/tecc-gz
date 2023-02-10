//外连跳转提示
if (typeof String.prototype.startsWith != 'function') { //判断当前字符串是否以str开始 先判断是否存在function是避免和js原生方法冲突，自定义方法的效率不如原生的高
	String.prototype.startsWith = function(str) {
		return this.slice(0, str.length) == str;
	};
}
if (typeof String.prototype.endsWith != 'function') { //判断当前字符串是否以str结束
	String.prototype.endsWith = function(str) {
		return this.slice(-str.length) == str;
	};
}
$("a").click(function() {
	var thisSrc = $(this).attr('href');
	if (thisSrc != null && thisSrc.indexOf(document.domain) < 0 && !thisSrc.startWith('/') && !thisSrc.startWith('..') &&
		thisSrc.split("?")[0].indexOf("gov.cn") < 0) {
		if (thisSrc.startWith('www.') || thisSrc.startWith('http')) {
			$(this).attr({
				"href": "/ippc/xhtml/loading.html?url=" + thisSrc,
				"target": "_blank"
			});
		}
	}
});

//搜索
function searchs() {
	var ssval = $('.SearchTxt').val();
	if (ssval == "") {
		alert("请输入搜索关键字！");
	} else {
		var values = encodeURIComponent(ssval, "utf-8");
		window.location="/siteapp/webpage/page/web/search/search.jsp?queryString=" + values
		//window.open("/siteapp/webpage/page/web/search/search.jsp?keyword=" + values);
		
	}
}

$(function() {
	var swiper = new Swiper('.swiper-container', {
		slidesPerView: "auto",
		spaceBetween: 0,
	});


	
	$(".SearchBtn").click(function() {
		searchs();
	});
	
	//头部菜单当前位置对照
	//头部菜单当前位置对照
	 try {
		var str = $(".curmb").text();
	 	var str1 = str.split(">")[1];
	 	if ($.trim(str1) != '') {
	 		$(".header_nav li").each(function() {
	 			if ($(this).text().search($.trim(str1)) > -1) {
	 				$(this).addClass("on").siblings().removeClass("on");
	 			}
				
	 		});
			$(".mainnav li").each(function() {
			if ($(this).text().search($.trim(str1)) > -1) {
				$(this).addClass("on").siblings().removeClass("on");
			}
			});
	 	}else {
		} 
	 } catch (e) {}
});
