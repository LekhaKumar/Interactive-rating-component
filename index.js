
  $(".rate").click(function (e) {
    e.preventDefault();
    let clickingEvent = $(this).attr("id");
    switch (clickingEvent) {
      case "one":
        $("span").text("1");
        break;
      case "two":
        $("span").text("2");
        break;
      case "three":
        $("span").text("3");
        break;
      case "four":
        $("span").text("4");
        break;
      case "five":
        $("span").text("5");
        break;
      default:
       $(".selection").text("You have selected none of them.");
        break;
    }
  
  
  });

$(".submit_btn").click(function () {


  $("section").removeClass("hide_card");

  $("#rating_card").addClass("hide_card");

});



