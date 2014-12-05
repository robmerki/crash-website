$(document).ready(function(){
  $("a").click(function(){
    $(this).addClass("success");
    $(".email").prop('disabled', true);
    $(".email").css('margin-left', '22px');
    $(".tick").delay(310).slideDown();
  });
});