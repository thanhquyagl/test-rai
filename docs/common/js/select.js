//selectedされたページに遷移
$("#select_press_year").change(function () {
  window.location.href = '/news/press/press_' + $("#select_press_year").val() + '.html';
});

//selected付与
$(document).ready(function () {
  var $selectpress = $("#select_press_year").val(),
      pathname = location.pathname,
      $selectpress = pathname.match(/\d+/g);
  if (document.URL.match($selectpress)) {
    $('select').val($selectpress);
  }
});