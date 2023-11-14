$(function () {
  console.log("cccccc");
  sortDropInit();
  brandInit();
  adScrollInit();
});

function adScrollInit() {
  var adDom = $("#ad");
  var maxHeight = $(adDom).children().length * $(adDom).height();
  var timer = setInterval(function () {
    var curTop = Math.abs(parseInt($(ad).offset().top)) + $(adDom).height();
    if (curTop >= maxHeight) {
      $(ad)
        .css("transition", "all 0s ease 0s")
        .css("transform", "translateY(0)");
    } else {
      $(ad)
        .css("transition", "all 0.5s ease 0s")
        .css("transform", "translateY(-" + curTop + "px)");
    }
  }, 1000);

  $(window).on("beforeunload", function () {
    clearInterval(timer);
  });
}

// 排序选择
function sortDropInit() {
  var dorpdom = $("#ynw-dropdown");
  var dropDownItem = $("#ynw-dropdown .ynw-dropdown-item");
  var sortBtn = $(".ynw-search-form #sortBtn");
  $(sortBtn).on("click", function (e) {
    var top = $(this).offset().top + $(this).height() + "px";
    $(dorpdom).css("top", top).toggle();
    $(this).find(".iconfont").toggleClass("activeIcon");
  });

  $(dorpdom).on("click", function () {
    $(this).toggle();
  });

  $(dropDownItem).on("click", function (e) {
    var selVal = $(this).data("value");
    $(sortBtn).find("span").text($(this).text()).addClass("search-active");
    $(sortBtn).addClass("search-active");
    $(sortBtn).find(".iconfont").removeClass("activeIcon");
    $(dropDownItem).each(function (i, item) {
      if ($(item).data("value") === selVal) {
        $(item).addClass("search-active");
      } else {
        $(item).removeClass("search-active");
      }
    });
  });
}

// 品牌选择
function brandInit() {
  var brandDrownBtn = $("#brandBtn");
  var brandModal = $("#ynw-brand-modal");
  var brandModalClose = $("#brand-close-btn");

  // 关闭弹窗
  function closeBrandModal() {
    toggleScendBrand();
    $(brandModal).css("transform", "translateX(100%)");
  }

  // 点击品牌下拉 展示弹窗
  brandDrownBtn.on("click", function (e) {
    $(brandModal).css("transform", "translateX(0)");
  });
  // 关闭弹窗
  brandModalClose.on("click", closeBrandModal);

  // 选择品牌
  var brandLetters = $("#brand-letters a");
  brandLetters.on("click", function () {
    var text = $(this).text();
    $(".choosed-brand").text(text).fadeIn().fadeOut();
  });

  var brandItem = $(".me-brand-select-group");
  var hotBrandItem = $(".me-brand-select-hot");
  var scendBrandWrap = $(".scend-brand");
  var scendBrandList = $(".scend-brand .scend-brand-list");
  var scendBrandVisible = false;

  // 切换显示二级品牌选择
  function toggleScendBrand() {
    if (!scendBrandVisible) {
      // show
      $(scendBrandWrap).css("transform", "translateX(0)");
      scendBrandVisible = true;
    } else {
      // hide
      $(scendBrandWrap).css("transform", "translateX(100%)");
      scendBrandVisible = false;
    }
  }

  hotBrandItem.on("click", function (e) {
    var hotClassName = e.target.className;
    console.log(e, "点击了热门品牌", e, hotClassName);
    // if (hotClassName === "")
    toggleScendBrand();
  });
  brandItem.on("click", function (e) {
    console.log(e, "点击了品牌");
    toggleScendBrand();
  });
  scendBrandList.on("click", function (e) {
    console.log(e.target, "点击了具体品牌");
    var scendVal;
    if ($(e.target).data("value")) {
      scendVal = $(e.target).data("value");
    } else {
      scendVal = $(e.target).parent().data("value");
    }
    if (!scendVal) return;
    console.log("选择了" + scendVal);
    closeBrandModal();
  });
}

// 列表点击
function resultClcik() {
  window.location = "/detail.html?id=1";
}

// tag 操作
function tagClear(e) {
  // var tagBtn=$('#clearTagsBtn')
  // tagBtn.on('click',)
  $(".filter-tags").remove();
  console.log("eee", e);
}
