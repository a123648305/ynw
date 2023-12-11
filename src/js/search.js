$(function () {
  console.log("cccccc");
});

// 搜索关键词
function searchKeyword() {
  var keyword = $("#search").val();
  console.log(keyword);

  $(".ynw-official-search-result").show();
  $(".ynw-official-search-detail-hot").show();
}

function quickSearch(e) {
  var quickKeyword = $(e.target).data("letter");

  if (quickKeyword) {
    $(".ynw-official-search-result").show();
    $(".ynw-official-search-detail-hot").show();
  }
  console.log(quickKeyword);
}

function resetKeyword() {
  $("#search").val("");
  $(".ynw-official-search-result").hide();
  $(".ynw-official-search-detail-hot").hide();
}

// 列表点击
function resultClcik() {
  window.location = "/detail.html?id=1";
}

// tab  切换
function tabChange(e) {
  var index = $(e.target).data("value");
  var ticks = $("#ticks");
  var information = $("#information");

  $(".nav-tab-item").each(function (i, item) {
    if ($(item).data("value") === index) {
      $(item).addClass("active");
    } else {
      $(item).removeClass("active");
    }
  });

  if (index === "ticks") {
    ticks.show();
    information.hide();
  }
  if (index === "information") {
    ticks.hide();
    information.show();
  }
  if (index === "all") {
    ticks.show();
    information.show();
  }
}
