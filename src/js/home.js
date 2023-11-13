window.onload = () => {
  console.log("load...");
};

// $(function() {
// 	FastClick.attach(document.body);
// });

$(document).ready(function () {
    heatScrollInit();
});


// tab 切换
function heatScrollInit() {
  var slider = $("#carouselTab");
  var naviDom =$('#navidot>i')
  var screenWidth=$('body').width()

  slider.on("touchstart", function (e) {
    var _touch = e.originalEvent.targetTouches[0];
    var _x= _touch.pageX;
    console.log("touchStart", _x);
    $(this).css('transition','none')
  });

  slider.on("touchmove", function (e) {
    var _touch = e.originalEvent.targetTouches[0];
    var _x= _touch.pageX;
    // console.log("touchmovvv", _x);
    $(this).css("transform", `translate3d(${_x}px, 0, 0)`);
  });

  slider.on("touchend", function (e) {
    var _touch = e.originalEvent.changedTouches[0];
    var _x= _touch.pageX;
    var _showIndex
    if(_x>0){
        $(this).css('transition','all 0.3s ease').css("transform", `translate3d(0, 0, 0)`)
        _showIndex=1
    }else{
        $(this).css('transition','all 0.3s ease').css("transform", `translate3d(-50%, 0, 0)`)
        _showIndex=2
    }
    // console.log("touchend", _x);


    $(naviDom).each(function(i,ele){
        if($(ele).data('index')===_showIndex){
            $(ele).addClass('activate')
        }else{
            $(ele).removeClass('activate')
        }
    })
  });

  // 品牌切换
  var brand = $("#heat-touch");
  var brandItem=$("#heat-touch a");
  var activeEle=$('#heat-touch .activate')
  Array.from(brandItem).forEach((element) => {
    $(element).on("click", function (e) {
      var curTabLeft=$(this).offset().left
      var curTabVal =$(this).data('value')
      $(activeEle).removeClass('activate');
      $(this).addClass('activate');
      if(curTabLeft*2>screenWidth){
        // 超过一半的位置 向前移动一点
        var offsetL=curTabLeft-screenWidth/2
        $(brand).css('transform','translateX(-'+offsetL+'px)')
      }else{
        $(brand).css('transform','translateX(0)')
      }
      activeEle=this

      // 显示下面对应的面板
      $('.ynw-home-heat-group>div').each(function (index,item) {
        var itemVal=$(item).data('value')
        if(itemVal===curTabVal){
          $(item).removeClass('d-none')
        }else{
          $(item).addClass('d-none')
        }
      })
    });
  });
}
