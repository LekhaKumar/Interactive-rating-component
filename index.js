 
$(".submit_btn").click(function () { 

  let click = $(this).attr("id");
  
  clickRating(click);
  $("section").removeClass("hide_card");
  $("#rating_card").addClass("hide_card");
  
});


function clickRating(key) {

switch (key) {

  case "one":
    $(key).click(function () { 
      $(".selection").text("You selected 1 out of 5");
      
    });
   
    break;
  case "two":
    $(".selection").text("You selected 2 out of 5");
    break;
  case "three":
    $(".selection").text("You selected 3 out of 5");
    break;
  case "four":
    $(".selection").text("You selected 4 out of 5");
    break;
  case "five":
    $(".selection").text("You selected 5 out of 5");
    break;
  default:
    $(".selection").text("You selected none.");
    break;
}

  
}

