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
    // console.log(_x, "xxx");
    // $(".differ-main").scrollLeft($(this).scrollLeft());
    $(".console-main").scrollLeft($(this).scrollLeft());
    var _this = this;
    $(".differ-main").each(function (i, item) {
      if ($(item) !== $(_this)) {
        $(item).scrollLeft($(_this).scrollLeft());
      } 
    });
  });

  $(".console-main").on("touchmove", function (e) {
    var _touch = e.originalEvent.changedTouches[0];
    var _x = _touch.pageX;
    // console.log(_x, "xxx");
    $(".differ-main").scrollLeft($(this).scrollLeft());
  });

  //   $(".differ-main").on("touchend", function (e) {});
}

// 移除比较项
function removeCard(e) {
  var remParent = $(e.target).parent();
  var removeIndex = remParent.data("index");
  console.log(e, "ee", removeIndex);
  remParent.remove();
  $(".differ-main .inner").each(function (i, item) {
    if ($(item).data("index") === removeIndex) {
      $(item).remove();
    }
  });
}

function test() {
  $(".differ-main").css("border", "1px solid red");
  //   $(".differ-main").animate({
  //     scrollLeft: "600px",
  //   });
  $(".differ-main").scrollLeft(500);
}
