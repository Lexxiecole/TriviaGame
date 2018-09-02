img.src = imageOne ("../images/plantgif1.gif");

var image = newImage("../images/plantgif1.gif");

img.onLoad = function() {
    DataView.innerHTML += '<img src=" '../images/plantgif1.gif' "/>';
};

img.src = "../images/plantgif1.gif"

//old ones above


//new ones below
var img = document.createElement("../images/plantgif1.gif");

var src = document.getElementById("../images/plantgif1.gif");

src.appendChild("../images/plantgif1.gif");



var gif1 = new Image(100, 100);
gif1.src = '../images/plantgif1.gif';
document.body.appendChild(gif1);


img = document.createElement("img");
   img.className = "image";
   img.src = "images/" + imgArray[questionCount] + ".gif";
   document.getElementById("image").appendChild(img);


   $("#q1ans2").on("click", function() {
    //console.log("q1ans2")
    $("#q1ans1").text("CORRECT!") 
    $("#q1ans2").text(" ") 
    $("#q1ans3").text(" ")
    $("crassulaArgentea").show(img)