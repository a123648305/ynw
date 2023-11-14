window.onload = () => {
  console.log("load...");
};

// $(function() {
// 	FastClick.attach(document.body);
// });
var screenWidth

$(document).ready(function () {
  heatScrollInit();
  brandTabInit();
  screenWidth = $("body").width();
});

// tab 切换
function heatScrollInit() {
  var slider = $("#carouselTab");
  var naviDom = $("#navidot>i");
  var tabWidth = $('#carouselTab>li').width()
  var startX=0 // 开始滑动位置
  var slideTabIndex=0   // 滑动的Index
  var distanceX=0   // 计算偏移量
  var isMove=false
  slider.on("touchstart", function (e) {
    var _touch = e.originalEvent.targetTouches[0];
    startX=_touch.pageX;
  });

  slider.on("touchmove", function (e) {
    var _touch = e.originalEvent.targetTouches[0];
    var _x = _touch.pageX;
    distanceX = _x - startX;
    var offsetX=-tabWidth * slideTabIndex+distanceX
    isMove=true
    setTranslateX(offsetX)
  });

  slider.on("touchend", function (e) {
    if (isMove) {
        if (Math.abs(distanceX) >= tabWidth / 3) {
            if (distanceX > 0&&slideTabIndex>0) {
                slideTabIndex--;
            }
            if (distanceX < 0&&slideTabIndex<naviDom.length-1) {
                slideTabIndex++;
            }
        }
        setTranslateX(-slideTabIndex * tabWidth);
    }
    startX = 0;
    distanceX = 0;
    isMove = false;

    $(naviDom).each(function (i, ele) {
      if ($(ele).data("index") === slideTabIndex) {
        $(ele).addClass("activate");
      } else {
        $(ele).removeClass("activate");
      }
    });
  });

  function setTranslateX(value){
    $(slider).css("transform", 'translate3d('+value+'px, 0, 0)')
  }
}

// 品牌切换
function brandTabInit() {
  var brand = $("#heat-touch");
  var brandItem = $("#heat-touch a");
  var activeEle = $("#heat-touch .activate");
  Array.from(brandItem).forEach((element) => {
    $(element).on("click", function (e) {
      var curTabLeft = $(this).offset().left;
      var curTabVal = $(this).data("value");
      $(activeEle).removeClass("activate");
      $(this).addClass("activate");
      if (curTabLeft * 2 > screenWidth) {
        // 超过一半的位置 向前移动一点
        var offsetL = curTabLeft - screenWidth / 2;
        $(brand).css("transform", "translateX(-" + offsetL + "px)");
      } else {
        $(brand).css("transform", "translateX(0)");
      }
      activeEle = this;

      // 显示下面对应的面板
      $(".ynw-home-heat-group>div").each(function (index, item) {
        var itemVal = $(item).data("value");
        if (itemVal === curTabVal) {
          $(item).removeClass("d-none");
        } else {
          $(item).addClass("d-none");
        }
      });
    });
  });
}
