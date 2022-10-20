
  $(".rate").click(function (e) {
    e.preventDefault();
    let value = $(this).attr("value");
    $("span").text(value);
  });

$(".submit_btn").click(function (e) {
  e.preventDefault();
  $("#rating_card").addClass("hide_card");
  $("#thankyou_card").removeClass("hide_card");
   

});



