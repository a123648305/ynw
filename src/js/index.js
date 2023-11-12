window.onload = () => {
  console.log("load...");
};

// $(function() {
// 	FastClick.attach(document.body);
// });

$(document).ready(function () {
  heatScroll();
});

function heatScroll() {
  var slider = $("#carouselTab");
  var screenWidth=$('body').width()
  console.log("222222", slider);
  let startX = 0;

  slider.on("touchstart", function (e) {
    const data = e.originalEvent.touches[0];
    const { clientX } = data;
    console.log("touchStart", clientX);
    startX = clientX;
  });

  slider.on("touchmove", function (e) {
    const data = e.originalEvent.touches[0];
    const { clientX } = data;
    console.log("touchmovvv", clientX);
    $(this).css("transform", `translate3d(-${clientX}px, 0, 0)`);
  });

  slider.on("touchend", function (e) {
    console.log("touch", e);
  });

  //touchmove   touchcancel

  //   slider.on("click", function (e) {
  //     console.log("eee");
  //   });

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
