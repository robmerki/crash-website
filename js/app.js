$(document).ready(function(){
  $("a").click(function(){
    $(this).addClass("success");
    $(".tick").slideDown();
    $(".email").prop('disabled', true);
  });
});