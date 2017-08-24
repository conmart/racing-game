console.log("Sanity Check");

let check;
let gameactive = false;
let p1pick = false;
let p2pick = false;

$(document).ready(function() {

  $(window).on("keyup", function moveRight(event) {
    // console.log(event);
    if (gameactive) {
      if (event.which === 65) {
        check = document.getElementById("p1");
        // console.log(check.getBoundingClientRect().right);
        // determines if player 1 has reached the finish line
        if (check.getBoundingClientRect().right >= (document.documentElement.clientWidth - 120)) {
          $(".announce-winner").text("Player 1 is the ruler of Westeros");
          gameactive = false;
        } else {
          $("#p1").finish().animate({
                    "margin-left": "+=30px"
            });
        };
      } else if (event.which === 186) {
        check = document.getElementById("p2");
        // console.log(check.getBoundingClientRect().right);
        // determines if player 2 has reached the finish line
        if (check.getBoundingClientRect().right >= (document.documentElement.clientWidth - 120)) {
          $(".announce-winner").text("Player 2 is the ruler of Westeros!");
          gameactive = false;
        } else {
          $("#p2").finish().animate({
                    "margin-left": "+=30px"
            });
        };
      }
    }
  });

  $("#reset").on("click", function() {
      console.log($(".character")[0]);
      $(".character")[0].style["margin-left"] = "0px";
      $(".character")[1].style["margin-left"] = "0px";

    });

  $("#start-race").on("click", function() {
    gameactive = true;
    p1pick = false;
    p2pick = false;
  });

  $("#player-1-select").on("click", function() {
    p1pick = true;
    p2pick = false;
    gameactive = false;
  })

  $("#player-2-select").on("click", function() {
    p1pick = false;
    p2pick = true;
    gameactive = false;
  })

  $(".charicon").on("click", function() {
    if (p1pick) {
      $("#p1").attr('src', $(this).attr('src'));
    } else if (p2pick) {
      $("#p2").attr('src', $(this).attr('src'));
    }
  });





});
