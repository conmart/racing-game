console.log("Sanity Check");

let check;
let gameactive = true;

$(document).ready(function() {

  $(window).on("keypress", function moveRight(event) {
    // console.log(event);
    if (gameactive) {
      if (event.which === 47) {
        check = document.getElementById("p1");
        console.log(check.getBoundingClientRect().right);
        // determines if player 1 has reached the finish line
        if (check.getBoundingClientRect().right >= (document.documentElement.clientWidth - 1000)) {
          alert("Player 1 wins");
        } else {
          $("#p1").animate({
                    "margin-left": "+=100px"
            });
        };
      } else if (event.which === 122) {
        check = document.getElementById("p2");
        console.log(check.getBoundingClientRect().right);
        // determines if player 2 has reached the finish line
        if (check.getBoundingClientRect().right >= (document.documentElement.clientWidth - 1000)) {
          alert("Player 2 wins");
        } else {
          $("#p2").animate({
                    "margin-left": "+=100px"
            });
        };
      }
    }
  });






});
