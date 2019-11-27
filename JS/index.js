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

