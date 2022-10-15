
$(".submit_btn").click(function () {

  $("section").removeClass("hide_card");

  $("#rating_card").addClass("hide_card");

  $(".rate").click(function () {
    let chosenRating = $(this).attr("value");
    
      switch (chosenRating) {
        case "1":
          $("span").text("1");
    
          break;
        case "2":
          $("span").text("2");
    
          break;
        case "3":
          $("span").text("3");
    
          break;
        case "4":
          $("span").text("4");
    
          break;
        case "5":
          $("span").text("5");
    
          break;
    
        default:
          break;
      }
    
    }
    
  );


 
  

});



