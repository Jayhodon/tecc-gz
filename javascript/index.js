//政务动态
$(function() {
	$(".fwzl_tab").slide({
		mainCell: ".bd>ul",
		effect: "leftLoop",
		vis: 4,
		startFun: function() {
			arguments[4].find('li').eq(arguments[0] + 1).addClass('on').siblings('li').removeClass('on')
		},
	}); 
	$(".header_nav li").first().addClass("on");
	$(".zwdt_tpxw").slide({
			titCell: ".hd ul",
			mainCell: ".bd ul",
			effect: "fold",
			delayTime: 800,
			interTime: 7000,
			autoPlay: true,
			autoPage: true
		})
		.find(".hd ul li").empty();
	$(".tpxw").slide({
				titCell: ".hd ul",
				mainCell: ".bd ul",
				effect: "fold",
				delayTime: 800,
				interTime: 4000,
				autoPlay: true,
				autoPage: true
			})
			.find(".hd ul li").empty();
	$(".common_tab").slide({
		targetCell: ".more a"
	});
	$(".index_zt").slide({
		mainCell: ".bd ul",
		autoPage: true,
		effect: "leftLoop",
		autoPlay: true,
		vis: 4
	});
	
	$(".piclink a[href='javascript:return false;']").removeAttr("target");
	
	
	/*飘窗*/
	if($('#ad1').html().trim() !=='') {
		$('#ad1').css('display', 'block');
	}
	
 $(".syhfbox").slide({
 				titCell: ".hd ul",
 				mainCell: ".bd ul",
 				effect: "fold",
 				delayTime: 800,
 				interTime: 4000,
 				autoPlay: true,
 				autoPage: true
 			}).find(".hd ul li").empty();
	
})

