//打开页面时自动播放
$("#myCarousel").carousel('cycle');
$("#myCarousel-second").carousel('cycle');

//本页执行
$('.btn[type="submit"]').click(function(e) {
    e.preventDefault();
});
//停留时间
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
/*
function login(){
    Modal.dialog({id:"dialog_login",title:"登录",url:"../HealthExaminationSystem/login.html",width:1200,height:800});
}*/

var myAlert = document.getElementById("alert"); 
var reg = document.getElementById("content").getElementsByTagName("li>a")[0]; 
var mClose = document.getElementById("close"); 
reg.onclick = function(){ 
    myAlert.style.display = "block"; 
    myAlert.style.position = "absolute"; 
    myAlert.style.top = "50%"; 
    myAlert.style.left = "50%"; 
    myAlert.style.marginTop = "-75px"; 
    myAlert.style.marginLeft = "-150px"; 
    mybg = document.createElement("li"); 
    mybg.setAttribute("id","mybg"); 
    mybg.style.background = "#000"; 
    mybg.style.width = "100%"; 
    mybg.style.height = "100%"; 
    mybg.style.position = "absolute"; 
    mybg.style.top = "0"; 
    mybg.style.left = "0"; 
    mybg.style.zIndex = "500"; 
    mybg.style.opacity = "0.3"; 
    mybg.style.filter = "Alpha(opacity=30)"; 
    document.body.appendChild(mybg); 
    
    document.body.style.overflow = "hidden"; 
} 

mClose.onclick = function(){ 
    myAlert.style.display = "none"; 
    mybg.style.display = "none"; 
}
