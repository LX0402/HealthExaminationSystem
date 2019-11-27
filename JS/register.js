function fnregister() {
    var oUname = document.getElementById("uname")
    var oUpass = document.getElementById("upass")
    var oUtel = document.getElementById("utel")
    var oError = document.getElementById("error_box")
    var isError = true;
    if (oUname.value.length == 11 && oUtel.value.length == 18) {
        oError.innerHTML = "账号请输入手机号或身份证号";
        isError = false;
        return;
    }else if((oUname.value.charCodeAt(i)<97) || (oUname.value.charCodeAt(i)>122)){
        oError.innerHTML = "必须为数字组成";
        return;
    }else for(var i=0;i<oUtel.value.charCodeAt(i);i++){
        if((oUtel.value.charCodeAt(i)<48)||(oUtel.value.charCodeAt(i)>57) && (oUtel.value.charCodeAt(i)<97)||(oUtel.value.charCodeAt(i)>122)){
            oError.innerHTML = "必须为字母跟数字组成";
        return;
    }
    }
    
    if (oUpass.value.length > 20 || oUpass.value.length < 6) {
        oError.innerHTML = "密码请输入6-20位字符"
        isError = false;
        return;
    }
    window.alert("登录成功")
}