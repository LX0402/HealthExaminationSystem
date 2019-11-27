
function fnforget() {
    var oUname = document.getElementById("uname")
    var oUpass = document.getElementById("upass")
    var oNpass = document.getElementById("npass")
    var oError = document.getElementById("error_box")
    var isError = true;
    if (oUname.value.length == 11 && oNpass.value.length == 18) {
        oError.innerHTML = "账号请输入手机号或身份证号";
        isError = false;
        return;
    }else for(var i=0;i<oUpass.value.charCodeAt(i);i++){
        if((oUpass.value.charCodeAt(i)<48)||(oUpass.value.charCodeAt(i)>57) && (oUpass.value.charCodeAt(i)<97)||(oUpass.value.charCodeAt(i)>122)){
            oError.innerHTML = "必须为字母跟数字组成";
            return;
        }
    }
    }
    if(oNpass.value != oUpass.value){
            oError.innerHTML = "必须与新密码一致";
            return;
    }
    if (oUpass.value.length > 20 || oUpass.value.length < 6) {
        oError.innerHTML = "密码请输入6-20位字符"
        isError = false;
        return;
    }
    window.alert("登录成功")
}