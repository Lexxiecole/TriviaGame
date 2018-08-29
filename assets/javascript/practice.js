

//my idea
var secondsleft = 60

//this is from w3schools, being changed.
//15 seconds to answer each question
var seconds = Math.floor((distance % (1000 * 15)) / 1000);
document.getElementById("demo").innerHTML = seconds + " seconds left";
if (distance < 0) {
    //then display a losing gif,
    //AND tell user to go to the next question
}