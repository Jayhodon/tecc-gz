(function($){
    $.fn.tabs = function(){
        $(this).each(function(index,el){
            var that = $(el);
            $(el).find(".tab a").eq(0).addClass('active');
            var target = $(el).find(".tab").eq(0).attr('data-target');
            $(target).siblings().hide();
            $(el).on('mouseover mouseout','.tab',function(){
                $(el).find('.tab a').removeClass('active');
                $(this).find("a").addClass('active');
                var target = $(this).attr('data-target');
                $(target).siblings().hide().end().show();
            });
        });
    }
})(jQuery);

$(function(){
    // var url = "http://search.gd.gov.cn/search/local/122";
    // $("#search_btn").on("click",function(){
    //     var s_keyword = $("#search_text").val();
    //     if(s_keyword==""){
    //         window.open(url);
    //     }else{
    //         window.open(url + "?keywords=" + s_keyword + "&order=0");
    //     }
    // });
    
    // $("#search_text").focus(function(){
    //     document.onkeydown = function (e) {
    //         if (!e) e = window.event;
    //         if ((e.keyCode || e.which) == 13) {
    //             $("#header_btn_search").trigger("click");
    //         }
    //     }
    // });
    // $("#search_text").blur(function(){
    //     document.onkeydown = function (e) {
    //         if (!e) e = window.event;
    //         if ((e.keyCode || e.which) == 13) {
                
    //         }
    //     }
    // });

    $(".nav_tem").hover(function(){
        $(this).addClass("active");
        $(this).find(".nav_sublist").addClass("active")
    },function(){
        $(this).removeClass("active");
        $(this).find(".nav_sublist").removeClass("active")
    });

    $('#news1_tab').tabs();
    $('#i_tab').tabs();
    // $('#news3_tab').tabs();
    // $('#xxgk_tab').tabs();

    //时政要闻
    $.ajax({
        url : 'http'+'://app.gd.gov.cn/xxts/pushinfo_json.php?s=12&d=1',
        dataType : "jsonp",
        jsonp : "pushInfoJsonpCallBack",
        jsonpCallback:"pushInfoJsonpCallBack",
        success : function(data) {
			for(var i=0; i<8; i++){
                if($("#szyw_list1").length>0){
                    $("#szyw_list1").append("<li><h3><a href='"+data[i].link+"' title='"+ data[i].title + "'>"+data[i].title+"</a></h3><span>" + data[i].pubDate + "<span></li>");	
                };
				if($("#szyw_list2").length>0){
                    $("#szyw_list2").append("<li><a href='"+data[i].link+"' title='"+ data[i].title + "'>"+data[i].title+"</a></li>");	
                };
			}
		}
    });

    var slider1 = $('#slider1').bxSlider({
        auto: true,
        controls: false,
        onSliderLoad:function(){
            $(".slider1_wrap .bx-controls-direction a").click(function(){
                slider1.goToNextSlide();
                slider1.startAuto();
            })
        }
    });

    $(".zt_list li:nth-child(3n)").css({
        "margin-right": 0
    });

    $(".bot_link_tem").hover(function(){
        $(this).addClass("active");
        $(this).siblings(".bot_link_tem").removeClass("active")
    },function(){
        $(this).removeClass("active");
    });

    var font_l = 18,
        font_m = 16,
        font_s = 14;
    $("#font_l").on("click", function(){
        $(".article_con p").css({
            "fontSize": font_l + "px"
        })
    });
    $("#font_m").on("click", function(){
        $(".article_con p").css({
            "fontSize": font_m + "px"
        })
    });
    $("#font_s").on("click", function(){
        $(".article_con p").css({
            "fontSize": font_s + "px"
        })
    });


    //外连跳转提示
    if (typeof String.prototype.startsWith != 'function'){ //判断当前字符串是否以str开始 先判断是否存在function是避免和js原生方法冲突，自定义方法的效率不如原生的高
        String.prototype.startsWith = function(str) {
            return this.slice(0, str.length) == str;
        };
    }　　　　
    if (typeof String.prototype.endsWith != 'function') {  //判断当前字符串是否以str结束
        String.prototype.endsWith = function(str) {
            return this.slice(-str.length) == str;
        };
    }

    $("a").not(".selflink").click(function(event){
        var thisSrc = $(this).attr('href');
        if(thisSrc!=null&&thisSrc.indexOf(document.domain)<0 && thisSrc.startsWith('http://') || thisSrc.startsWith('https://') ){
            var msg = "您访问的链接即将离开“广东省市场监督管理局网站”，是否继续？";
            if(confirm(msg) == false){
                return false
            }else{
                event.preventDefault();
                window.open(thisSrc);
            }
            // $(this).attr({
            // 	"href" : "/loading.html?url="+encodeURIComponent(thisSrc),
            // 	"target" : "_blank"
            // });
        }
    });  

    $(".fix_img").before("<div class='close_btn'>关闭窗口</div>");
    $(".close_btn").click(function () {
        $(this).parent().hide();
    });

})