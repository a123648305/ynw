window.onload = () => {
  console.log("load...");
};

// $(function() {
// 	FastClick.attach(document.body);
// });

$(document).ready(function () {
  console.log("eeeeeeeee");
  heatScroll();
});

function heatScroll() {
  const slider = $("#carouselTab");
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
    $(this).css("transform", `translate3d(${clientX}, 0, 0)`);
  });

  slider.on("touchend", function (e) {
    console.log("touch", e);
  });

  //touchmove   touchcancel

  //   slider.on("click", function (e) {
  //     console.log("eee");
  //   });

  var brand = $("#heat-touch a");
  var activeEle;
  Array.from(brand).forEach((element) => {
    $(element).on("click", function (e) {
      console.log("clicks", e);
      $(activeEle).removeClass('activate');
      $(element).addClass('activate');
      activeEle=element
    });
  });
}
