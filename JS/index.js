/*导航栏*/
$(".loginBefore").hide()
$("#medicalRecord").hide();

/*退出登录*/
function fnLogOut(){
    localStorage.setItem('jsessionid','');
    $(".loginBefore").hide()
    $(".loginAfter").show()  
}

/*-------------------------------------------------*/

/*轮播图01*/
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
$(document).ready(function(){
    $('#appointment').datetimepicker({
        format: 'YYYY-MM-DD',
        locale: moment.locale('zh-cn')
    });
    $(".appointment").click(function(){
        $("#appointment").show();
    });
    $(".iconfont").click(function(){
        $("#appointment").hide();
    });
    
});
function fnAppointment() {
    var province = document.getElementById("province")
    var time = document.getElementById("startTime")
    var oError = document.getElementById("error_box")
    var isError = true;
    var params = {
        medicalId:province.value,
        reservationTime:time.value
    }
    if(province.value == null){
        oError.innerHTML = "请选择预约套餐"
        isError = false;
        return;
    }
    if (time.value.length == 3) {
        oError.innerHTML = "请输入时间"
        isError = false;
        return;
    }
    //在这里使用Ajax请求
    $.postExtend(createReservationRecordUrl, params, function(data){
        console.log(data.data);
        if(data.code == 0){
            window.alert("预约成功")
            $("#appointment").hide()
        }else{
            //仅用于测试
            window.alert(data.message);
            //清空form表单
            $('#appointment').clearForm();
            //在登录框上显示错误信息
            oError.innerHTML = data.message;
        }
    });
}

/*-------------------------------------------------*/

/*登录*/
$("#login").hide()
$(document).ready(function(){
    $(".login").click(function(){
        $("#login").show();
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
  
    if(!/^1[34578]\d{9}$/.test(name.value)){
        oError.innerHTML = "账号输入不正确"
        isError = false;
        return;
    }
    if (pass.value.length > 11 || pass.value.length < 6) {
        oError.innerHTML = "密码请输入6-11位字符"
        isError = false;
        return;
    }
    //这里定义params,这里的密码不需要进行加密处理，因为我后台自己搞了加密解密比对方法。
    var params = {
        phone:name.value,
        password:pass.value
    }
    //在这里使用Ajax请求
    $.postExtend(loginUrl, params, function(data){
        console.log(data.data);
        if(data.code == 0){
            //使用sessionStorage存储jsession数据
            var dataParams = JSON.parse(data.data);
            console.log("登录数据 Jsessionid = " + dataParams.jsessionid);
            localStorage .setItem('jsessionid',dataParams.jsessionid);
            //这些操作可以使用一个函数总结起来。
            $("#login").hide();
            $(".loginBefore").show();
            $(".loginAfter").hide();
            //这里可以弄一个提醒登录成功，然后等 一秒或者点击登录成功得时候再跳页面。
            console.log("登录成功！")    
            //仅用于测试
            window.alert("登录成功！");
        }else{
            //这里也需要跳登录失败。
            console.log("登录失败！")
            //仅用于测试
            window.alert("登录失败！");
            //在登录框上显示错误信息
            oError.innerHTML = data.message;
        }
    });

    
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
    $(".login").click(function(){
        $("#login").show();
        $("#register").hide();
    });
});

function fnregister() {
    var phone = document.getElementById("tel")
    var pass = document.getElementById("pass1")
    var oError = document.getElementById("error_box1")
    var isError = true;

/*  这里得校验方式需要修改修改
    后台得校验方式为：账号需要电话号码、密码需要6-11位字母与数字组成*/
    if(!/^(((1[3456789][0-9]{1})|(15[0-9]{1}))+\d{8})$/.test(phone.value)){
        oError.innerHTML = "账号输入不正确"
        isError = false;
        return;
    }

    if (pass.value.length > 11 || pass.value.length < 6) {
        oError.innerHTML = "密码请输入6-11位字符"
        isError = false;
        return;
    }

    //这里定义params,这里的密码不需要进行加密处理，因为我后台自己搞了加密解密比对方法。
    var params = {
        //注册时默认选择男性
        gender:"Male",
        password:pass.value,
        phone:phone.value
    }
    //在这里使用Ajax请求
    $.postExtend(registerUrl, params, function(data){
        if(data.code == 0){
            var dataParams = JSON.parse(data.data);
            console.log("注册数据 Jsessionid = " + dataParams.jsessionid);
            localStorage .setItem('jsessionid',dataParams.jsessionid);
            //隐藏部分操作
           $("#register").hide();
           $(".loginBefore").show();
           $(".right").hide();
           $(".loginAfter").hide();  
           window.alert("注册成功！")
        }else{
            window.alert("登录失败！" + data.message)
        }
    });

}

/*-------------------------------------------------*/

/*个人信息*/
$("#personalInfo").hide();
$(document).ready(function(){
    /* 加载个人信息资料到form表单中 */
    $(".personalInfo").click(function(){
        $.postExtend(getPersonalInfoUrl,{}, function(data){
            if(data.code == 0){
                //将获取到的数据解析成对象
                var dataParams = JSON.parse(data.data);
                console.log(dataParams)
                //将对象数据加载到fomr表单中,对应得基本条件：name与对象中的字段一致。详情研究请到 util.js 中查看源码。
                $('#personalInfo').loadJson(dataParams);
                $("#personalInfo").show();
            }else{
                window.alert(data.message)
            }
        });
    });
    /* 隐藏form表单 */
    $(".iconfont").click(function(){
        $("#personalInfo").hide();
    });
});

/* 保存用户资料 */
function savePersonalInfo(){
    var info = $('#personalInfo').serializeObject();
    console.log(info);
    $.postExtend(updateUserInfoUrl,info,function(data){
        console.log(data);
        if(data.code == 0){
            $("#personalInfo").hide();
            window.alert(data.message);
        }else{
            window.alert(data.message)
        }
    });
}



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

/*-------------------------------------------------*/

/*轮播图02*/
$("#myCarousela").carousel('cycle');
$("#myCarousela-second").carousel('cycle');

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


//进入网页调用该接口获取套餐信息
$(
    function(){
        //获取H5存储的session值
        var jessionid= localStorage.getItem('jsessionid');
        console.log(jessionid)
        //判断用户是否登录
        if(jessionid != null && jessionid != ''){
            var params = { jessionid:jessionid }
            $.postExtend(getUserBySessionIdUrl,params,function(data){
                console.log(data);
                if(data.code == 0){
                    var dataParams = JSON.parse(data.data);
                    //修改H5存储的数据
                    localStorage .setItem('jsessionid',dataParams.jsessionid);
                    //初始页面时没有该内容，如何进行隐藏。
                    $(document).ready(function(){
                        $("#login").hide();
                        $(".loginBefore").show();
                        $(".loginAfter").hide();
                      });
                }else if(data.code == 7 ){
                    //修改H5存储数据
                    localStorage .setItem('jsessionid','');
                    window.alert(data.message);
                }else{
                    //修改H5存储数据
                    sessionStorage.setItem('jsessionid','');
                }
            });

            /* 获取并加载数据 */
            $.postExtend(queryReservationRecordUrl,{},function(data){
                if(data.code == 0){
                    var json = JSON.parse(data.data);
                    json.forEach(function(itemCount,index){
                        console.log(itemCount);
                        // 像表格中添加数据
                        $("#tableContent").append("<tr> "+
                            "<td>"+itemCount.userName+"</td>"+
                            "<td>"+itemCount.medicalName+"</td>"+
                            "<td>"+itemCount.meidicalContent+"</td>"+
                            "<td>"+itemCount.meaning+"</td>"+
                            "<td>"+itemCount.reservationTime+"</td>"+
                            "</tr>"
                        );
                    });
                }else{
                    window.alert(data.message)
                }
            });

        }

        $.postExtend(getAllMedicalItemsUrl,{},function(data){
            if(data.code == 0 ){
                var json = JSON.parse(data.data);
                json.forEach(function(itemCount,index){
                    console.log(itemCount);
                    /*加载导航栏数据*/
                    $("#sideNavUl").append("<li class='combo'>"+itemCount.medicalName+"<span class='iconfont fr'>&#xe63d;</span> </li>");
                    //加载图片(如果后台没有给出图片，你就要使用默认图片)
                    if(index == 0 ){
                        //第一个添加active类
                        $("#lunboBox").append("<div class='item active'>"+
                                                    "<div class='contentDiv' style='width: 1010px; height: 550px; background-size: 100% 100%; background-repeat: no-repeat; background-image: url("+myUrl+"/service/rest/tk.File/"+itemCount.showImg+");'>"+
                                                            "<div class='verbalContent'>"+itemCount.medicalName+"</div>"+
                                                    "</div>"+
                                                "</div>");
                    }else{
                        $("#lunboBox").append("<div class='item'>"+
                                                    "<div class='contentDiv' style='width: 1010px; height: 550px; background-size: 100% 100%; background-repeat: no-repeat; background-image: url("+myUrl+"/service/rest/tk.File/"+itemCount.showImg+");'>"+
                                                            "<div class='verbalContent'>"+itemCount.medicalName+"</div>"+
                                                    "</div>"+
                                                "</div>");
                    }

                    //添加点
                    if(index == 0 ){
                        //第一个添加active类
                        $("#myCarousela ol").append("<li data-target='#myCarousela' data-slide-to='"+index+"' class='active'></li>");
                    }else{
                        $("#myCarousela ol").append("<li data-target='#myCarousela' data-slide-to='"+index+"'></li>");
                    }
                    
                    /*对应显示*/
                    $("#myCarousela").carousel('cycle');

                    $("#sideNavUl").find("li").mouseover(function () {
                        $(this).addClass("active").siblings().removeClass("active");
                        var index = $(this).index();
                        $("#myCarousela").carousel(index)
                    })

                    // 加载预约套餐form表单中的套餐下拉款
                    $("#province").append("<option value='"+itemCount.id+"'>"+itemCount.medicalName+"</option>");
                });

                //计算导航栏个数
                console.log(json.length);
                console.log($(".sideNav").height());
                var i = $(".sideNav").height() / json.length;
                console.log(i);
                $(".combo").css({height:i});
                //错误内容，需求：导航栏文字居中对齐
                $("#sideNavUl li").attr("line-height",i);
                 
            }else{
                console.log("获取数据失败！");
            }
        });

       

    }
)

/*-------------------------------------------------*/

/*体检记录*/
$(function () {
    $("#btn").click(function () {
        var $sea=$('#txt').val();
        //先隐藏全部，再把符合筛选条件的值显示
        $('table tbody tr').hide().filter(':contains('+$sea+')').show();
    });
});
$(document).ready(function(){

    /* 导航栏预约记录点击事件 */
    $(".medicalRecord").click(function(){
        $("#medicalRecord").show();
        $("#myCarousel").hide()
        $("#firstScreen").hide()
        $("#introduce").hide()
        $("#contact").hide()
    });
    /* 导航栏产品点击时间 */
    $(".firstScreen").click(function(){
        $("#medicalRecord").hide();
        $("#myCarousel").show()
        $("#firstScreen").show()
        $("#introduce").show()
        $("#contact").show()
    });
    /* 导航栏首页点击时间 */
    $(".main").click(function(){
        $("#medicalRecord").hide();
        $("#myCarousel").show()
        $("#firstScreen").show()
        $("#introduce").show()
        $("#contact").show()
    });
    $("#txt").click(function(){
        $(".ico").hide()
    });
});