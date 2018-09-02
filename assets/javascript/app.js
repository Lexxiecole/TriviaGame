

$(document).ready(function() {
    
    var secondsLeft = 25
  

    $("#q1ans1").on("click", function() {  //question 1
        //console.log("q1ans1")
        $("#q1ans1").text("INCORRECT!") 
        $("#q1ans2").text(" ") 
        $("#q1ans3").text(" ")
    })
    $("#q1ans2").on("click", function() {
        //console.log("q1ans2")
        $("#q1ans1").text("CORRECT!") 
        $("#q1ans2").text(" ") 
        $("#q1ans3").text(" ")
        $("crassulaArgentea").show(img)
    }) 
    $("#q1ans3").on("click", function() {
        //console.log("q1ans3")
        $("#q1ans1").text("INCORRECT!") 
        $("#q1ans2").text(" ") 
        $("#q1ans3").text(" ")
    }) 

    $("#q2ans1").on("click", function() { //question 2
        //console.log("q2ans1")
        $("#q2ans1").text("INCORRECT!") 
        $("#q2ans2").text(" ") 
        $("#q2ans3").text(" ")
    })
    $("#q2ans2").on("click", function() {
        //console.log("q2ans2")
        $("#q2ans1").text("INCORRECT!") 
        $("#q2ans2").text(" ") 
        $("#q2ans3").text(" ")
    }) 
    $("#q2ans3").on("click", function() {
        //console.log("q2ans3")
        $("#q2ans1").text("CORRECT!") 
        $("#q2ans2").text(" ") 
        $("#q2ans3").text(" ")
    }) 

    $("#q3ans1").on("click", function() {  //question 3
        //console.log("q3ans1")
        $("#q3ans1").text("INCORRECT!") 
        $("#q3ans2").text(" ") 
        $("#q3ans3").text(" ")
    })
    $("#q3ans2").on("click", function() {
        //console.log("q3ans2")
        $("#q3ans1").text("INCORRECT!") 
        $("#q3ans2").text(" ") 
        $("#q3ans3").text(" ")
    }) 
    $("#q3ans3").on("click", function() {
        //console.log("q3ans3")
        $("#q3ans1").text("CORRECT!") 
        $("#q3ans2").text(" ") 
        $("#q3ans3").text(" ")
    }) 

    $("#q4ans1").on("click", function() { //question 4
       // console.log("q4ans1")
        $("#q4ans1").text("INCORRECT!") 
        $("#q4ans2").text(" ") 
        $("#q4ans3").text(" ")
    })
    $("#q4ans2").on("click", function() {
        //console.log("q4ans2")
        $("#q4ans1").text("CORRECT!") 
        $("#q4ans2").text(" ") 
        $("#q4ans3").text(" ")
    }) 
    $("#q4ans3").on("click", function() {
        //console.log("q4ans3")
        $("#q4ans1").text("INCORRECT!") 
        $("#q4ans2").text(" ") 
        $("#q4ans3").text(" ")
    }) 

    $("#q5ans1").on("click", function() { //question 5
       // console.log("q5ans1")
       $("#q5ans1").text("CORRECT!") 
       $("#q5ans2").text(" ") 
       $("#q5ans3").text(" ")
    })
    $("#q5ans2").on("click", function() {
        //console.log("q5ans2")
        $("#q4ans1").text("INCORRECT!") 
        $("#q4ans2").text(" ") 
        $("#q4ans3").text(" ")
    }) 
    $("#q5ans3").on("click", function() {
        //console.log("q5ans3")
        $("#q4ans1").text("INCORRECT!") 
        $("#q4ans2").text(" ") 
        $("#q4ans3").text(" ")
    }) 
    


    var time = setInterval(function() {
        secondsLeft--;
        $("#nums1").text(secondsLeft)
        if (secondsLeft < 1) {
            clearInterval (time)
            }
    },1000)
    
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

