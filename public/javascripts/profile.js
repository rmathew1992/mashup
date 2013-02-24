$(function () {
  $('#showControls').click(function() {
    $('#controls').show();
    return false;
  });
$(function () {
  $('#neworderform').on('submit', function () {
    $.post("/result", $('#neworderform').serialize());
    $('#success').show();
    return false;
  })
})

