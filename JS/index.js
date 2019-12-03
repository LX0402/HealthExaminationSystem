/*导航栏*/
$(".loginBefore").hide()
$("#my").hide();
$(".forget").hide()

/*轮播图*/
$("#myCarousel").carousel('cycle');
$("#myCarousel-second").carousel('cycle');

$('.btn[type="submit"]').click(function(e) {
    e.preventDefault();
});
var delay = 5000;
var itemCount = 5;
var area = $("#roll");
var speed = 3;
area.html(area.html() + area.html());

setInterval(async function() {
    await area.animate( {scrollTop:area.scrollTop() + area.height()}, 1000 / speed);
    if(area.scrollTop() >= area.height() * itemCount) {
        area.scrollTop(0);
    }
}, delay);

/*-------------------------------------------------*/

/*预约*/
$("#appointment").hide()
$(".dropdown-menu").hide()
$(document).ready(function(){
    $(".appointment").click(function(){
        $("#appointment").show();
    });
    $(".iconfont").click(function(){
        $("#appointment").hide();
    });
    $("#startTime").click(function(){
        $(".dropdown-menu").hide();
    });
});
function fnAppointment() {
    var age = document.getElementById("age")
    var time = document.getElementById("startTime")
    var oError = document.getElementById("error_box")
    var isError = true;
    
    if (age.value.length > 3 || age.value.length < 0) {
        oError.innerHTML = "年龄有误"
        isError = false;
        return;
    }
    if (time.value.length == 3) {
        oError.innerHTML = "请输入时间"
        isError = false;
        return;
    }
    window.alert("预约成功")
    $("#appointment").hide()
}

/*-------------------------------------------------*/

/*登录*/
$("#login").hide()
$(document).ready(function(){
    $(".login").click(function(){
        $("#login").show();
        $(".forget").show();
    });
    $(".iconfont").click(function(){
        $("#login").hide();
    });
});
$(document).ready(function(){
    $(".register").click(function(){
        $("#register").show();
    });
});

function fnLogin() {
    var name = document.getElementById("name")
    var pass = document.getElementById("pass")
    var oError = document.getElementById("error_box")
    var isError = true;
  
    if((name != /^(((1[3456789][0-9]{1})|(15[0-9]{1}))+\d{8})$/)&&(pass != /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/)){
        oError.innerHTML = "账号输入不正确"
        isError = false;
    }
    if (pass.value.length > 20 || pass.value.length < 6) {
        oError.innerHTML = "密码请输入6-20位字符"
        isError = false;
        return;
    }
    $("#login").hide();
    $(".loginBefore").show();
    $(".right").hide();
    $(".loginAfter").hide();  
  
/*
    //这里使用url，到时候将所有url提取到一个js或者公用类中，最好将url用拼接的方式（官网地址+接口地址）
    var url = "http://139.9.204.172/service/rest/service.NoLoginService/collection/login";
    //这里定义params,这里的密码不需要进行加密处理，因为我后台自己搞了加密解密比对方法。
    var params = {
        phone:name,
        password:pass
    }
    debugger;
    //在这里使用Ajax请求
    $.postExtend(url, params, function(data){
        debugger;
        console.log(data);
        if(data.code == 0){
           console.log("登录成功！")
                                        
        }else{
            console.log("登录失败！")
        }
    });
*/
    
}

/*-------------------------------------------------*/

/*注册*/
$("#register").hide()
$(document).ready(function(){
    $(".register").click(function(){
        $("#register").show();
    });
    $(".iconfont").click(function(){
        $("#register").hide();
    });
});

function fnregister() {
    var phone = document.getElementById("tel")
    var pass = document.getElementById("pass1")
    var oError = document.getElementById("error_box1")
    var isError = true;

    if(phone != /^(((1[3456789][0-9]{1})|(15[0-9]{1}))+\d{8})$/){
        oError.innerHTML = "账号输入不正确"
        isError = false;
    }

    if (pass.value.length > 20 || pass.value.length < 6) {
        oError.innerHTML = "密码请输入6-20位字符"
        isError = false;
        return;
    }
    $("#register").hide();
    $(".loginBefore").show();
    $(".right").hide();
    $(".loginAfter").hide();  
/*
    //这里使用url，到时候将所有url提取到一个js或者公用类中，最好将url用拼接的方式（官网地址+接口地址）
    var url = "http://139.9.204.172/service/rest/service.NoLoginService/collection/register";
    //这里定义params,这里的密码不需要进行加密处理，因为我后台自己搞了加密解密比对方法。
    var params = {
        gender:(".usex").val,
        password:pass,
        phone:phone
    }
    debugger;
    //在这里使用Ajax请求
    $.postExtend(url, params, function(data){
        debugger;
        console.log(data);
        if(data.code == 0){
           console.log("登录成功！")
                                      
        }else{
            console.log("登录失败！")
        }
    });
*/
}

/*-------------------------------------------------*/

/*忘记密码*/

/*-------------------------------------------------*/

/*图片容器*/
$(function() {
    $('#toright').hover(function() {
        $("#toleft").hide()
    }, function() {
        $("#toleft").show()
    })
    $('#toleft').hover(function() {
        $("#toright").hide()
    }, function() {
        $("#toright").show()
    })
})

var t;
var index = 0;
//自动播放
t = setInterval(play, 3000)

function play() {
    index++;
    if (index > 4) {
        index = 0
    }
    $("#lunbobox ul li").eq(index).css({
        "background": "#999",
        "border": "1px solid #ffffff"
    }).siblings().css({
        "background": "#cccccc",
        "border": ""
    })

    $(".lunbo a ").eq(index).fadeIn(1000).siblings().fadeOut(1000);
};

$("#lunbobox ul li").click(function() {//点击鼠标 图片切换

    //添加 移除样式
    //$(this).addClass("lito").siblings().removeClass("lito"); //给当前鼠标移动到的li增加样式 且其余兄弟元素移除样式   可以在样式中 用hover 来对li 实现
    $(this).css({
        "background": "#999",
        "border": "1px solid #ffffff"
    }).siblings().css({
        "background": "#cccccc"
    })
    var index = $(this).index(); //获取索引 图片索引与按钮的索引是一一对应的

    $(".lunbo a ").eq(index).fadeIn(1000).siblings().fadeOut(1000); // siblings  找到 兄弟节点(不包括自己）
});

$("#toleft").click(function() {//上一张、下一张切换
    index--;
    if (index <= 0) //判断index<0的情况为：开始点击#toright  index=0时  再点击 #toleft 为负数了 会出错
    {
        index = 4
    }
    console.log(index);
    $("#lunbobox ul li").eq(index).css({
        "background": "#999",
        "border": "1px solid #ffffff"
    }).siblings().css({
        "background": "#cccccc"
    })

    $(".lunbo a ").eq(index).fadeIn(1000).siblings().fadeOut(1000); // siblings  找到 兄弟节点(不包括自己）必须要写，$("#imgbox a ")获取到的是一个数组集合 。所以可以用index来控制切换
}); 

$("#toright").click(function() {
    index++;
    if (index > 4) {
        index = 0
    }
    console.log(index);
    $(this).css({
        "opacity": "0.5"
    })
    $("#lunbobox ul li").eq(index).css({
        "background": "#999",
        "border": "1px solid #ffffff"
    }).siblings().css({
        "background": "#cccccc"
    })
    $(".lunbo a ").eq(index).fadeIn(1000).siblings().fadeOut(1000); // siblings  找到 兄弟节点(不包括自己）
});
$("#toleft,#toright").hover(function() {
        $(this).css({
            "color": "black"
        })
    },
    function() {
        $(this).css({
            "opacity": "0.3",
            "color": ""
        })
    })

$("#lunbobox ul li,.lunbo a img,#toright,#toleft ").hover(//鼠标移进  移出
    function() {//鼠标移进
        $('#toright,#toleft').show()
        clearInterval(t);

    },
    function() {//鼠标移开
        t = setInterval(play, 3000)

        function play() {
            index++;
            if (index > 4) {
                index = 0
            }
            $("#lunbobox ul li").eq(index).css({
                "background": "#999",
                "border": "1px solid #ffffff"
            }).siblings().css({
                "background": "#cccccc"
            })
            $(".lunbo a ").eq(index).fadeIn(1000).siblings().fadeOut(1000);
        }
})

/*-------------------------------------------------*/

/*套餐信息*/
$(".newOne").hide()
$(".newTwo").hide()
$(".newThird").hide()
$(".newFour").hide()
$(".newFive").hide()

$(document).ready(function(){
    $(".comboOne").mouseover(function (){
        $(".newOne").show();
        $("#lunbobox").hide();
    }).mouseout(function (){
        $(".newOne").hide();
        $("#lunbobox").show();
    });
});

$(".comboTwo").mouseover(function (){
    $(".newTwo").show();
}).mouseout(function (){
    $(".newTwo").hide();
});
$(".comboThird").mouseover(function (){
    $(".newThird").show();
}).mouseout(function (){
    $(".newThird").hide();
});
$(".comboFour").mouseover(function (){
    $(".newFour").show();
}).mouseout(function (){
    $(".newFour").hide();
});
$(".comboFive").mouseover(function (){
    $(".newFive").show();
}).mouseout(function (){
    $(".newFive").hide();
});

$(".newOne").mouseover(function (){
    $(".newOne").show();
}).mouseout(function (){
    $(".newOne").hide();
});
$(".newTwo").mouseover(function (){
    $(".newTwo").show();
}).mouseout(function (){
    $(".newTwo").hide();
});
$(".newThird").mouseover(function (){
    $(".newThird").show();
}).mouseout(function (){
    $(".newThird").hide();
});
$(".newFour").mouseover(function (){
    $(".newFour").show();
}).mouseout(function (){
    $(".newFour").hide();
});
$(".newFive").mouseover(function (){
    $(".newFive").show();
}).mouseout(function (){
    $(".newFive").hide();
});

/*-------------------------------------------------*/

/*我的*/
$(function () {
    $("#btn").click(function () {
        var $sea=$('#txt').val();
        //先隐藏全部，再把符合筛选条件的值显示
        $('table tbody tr').hide().filter(':contains('+$sea+')').show();
    });
});
$(document).ready(function(){
    $(".my").click(function(){
        $("#my").show();
        $("#myCarousel").hide()
        $("#firstScreen").hide()
        $("#introduce").hide()
        $("#contact").hide()
        
    });
    $("#txt").click(function(){
        $(".ico").hide()
    });
});
