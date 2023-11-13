$(function () {
  console.log("load00");
  tableSlideInit();
});

// 表格滑动 联动 卡片
function tableSlideInit() {
  //   $(".differ-main").on("touchstart", function (e) {});

  $(".differ-main").on("touchmove", function (e) {
    var _touch = e.originalEvent.changedTouches[0];
    var _x = _touch.pageX;
    console.log(_x, "xxx");
    $(".differ-main").scrollLeft($(this).scrollLeft())
    $(".console-main").scrollLeft($(this).scrollLeft())
  });

  $(".console-main").on("touchmove", function (e) {
    var _touch = e.originalEvent.changedTouches[0];
    var _x = _touch.pageX;
    console.log(_x, "xxx");
    $(".differ-main").scrollLeft($(this).scrollLeft())
  });


  //   $(".differ-main").on("touchend", function (e) {});
}

function test() {
  $(".differ-main").css("border", "1px solid red");
  $(".differ-main").animate({
    scrollLeft: "600px",
  });
}
