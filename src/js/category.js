$(function () {
  var titile = new URLSearchParams(location.search).get("title");
  $(".ynw-category-total>h1").text(titile);
});

function toDetail(e) {
  var value = $(e.currentTarget).data("id");
  window.location.href = "detail.html?id=" + value;
}
