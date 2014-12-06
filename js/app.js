$(document).ready(function(){
  $("a").click(function(){
    $(this).addClass("success");
    $(".email").addClass('success');
    $(".email").prop('disabled', true);
    $(".tick").delay(310).slideDown();
  });
});