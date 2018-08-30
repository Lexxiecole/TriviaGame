

//variables


var correctAnswer
var incorrectAnswer






//document.ready

$(document).ready(function() {

    var secondsLeft = 15 //check this 

    $("#q1ans1").on("click", function() {  //question 1
        console.log("q1ans1")
    })
    $("#q1ans2").on("click", function() {
        console.log("q1ans2")
    }) 
    $("#q1ans3").on("click", function() {
        console.log("q1ans3")
    }) 
    $("#q2ans1").on("click", function() { //question 2
        console.log("q2ans1")
    })
    $("#q2ans2").on("click", function() {
        console.log("q2ans2")
    }) 
    $("#q2ans3").on("click", function() {
        console.log("q2ans3")
    }) 
    $("#q3ans1").on("click", function() {  //question 3
        console.log("q3ans1")
    })
    $("#q3ans2").on("click", function() {
        console.log("q3ans2")
    }) 
    $("#q3ans3").on("click", function() {
        console.log("q3ans3")
    }) 
    $("#q4ans1").on("click", function() { //question 4
        console.log("q4ans1")
    })
    $("#q4ans2").on("click", function() {
        console.log("q4ans2")
    }) 
    $("#q4ans3").on("click", function() {
        console.log("q4ans3")
    }) 
    $("#q5ans1").on("click", function() { //question 5
        console.log("q5ans1")
    })
    $("#q5ans2").on("click", function() {
        console.log("q5ans2")
    }) 
    $("#q5ans3").on("click", function() {
        console.log("q5ans3")
    }) 
    $("nums1").text("show", function() {  //check this
        console.log(secondsLeft -- )
    })


}) 






//question 1//

//when page loads, timer starts
//if user clicks option 2, a giph shows up of a happy plant.
//else, giph of dying plant pops up

//user must click answer before the timer is up
 //once first question is answered, timer starts for second question.
//show timer????

//question 2//

//question 3//

//question 4

