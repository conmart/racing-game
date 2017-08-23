console.log("Sanity Check");

let check;
let gameactive = true;

$(document).ready(function() {

  $(window).on("keyup", function moveRight(event) {
    // console.log(event);
    if (gameactive) {
      if (event.which === 65) {
        check = document.getElementById("p1");
        console.log(check.getBoundingClientRect().right);
        // determines if player 1 has reached the finish line
        if (check.getBoundingClientRect().right >= (document.documentElement.clientWidth - 300)) {
          $(".announce-winner").append("Player 1 is the ruler of Westeros!");
          gameactive = false;
        } else {
          $("#p1").finish().animate({
                    "margin-left": "+=30px"
            });
        };
      } else if (event.which === 222) {
        check = document.getElementById("p2");
        console.log(check.getBoundingClientRect().right);
        // determines if player 2 has reached the finish line
        if (check.getBoundingClientRect().right >= (document.documentElement.clientWidth - 300)) {
          $(".announce-winner").append("Player 2 is the ruler of Westeros!");
          gameactive = false;
        } else {
          $("#p2").finish().animate({
                    "margin-left": "+=30px"
            });
        };
      }
    }
  });






});
