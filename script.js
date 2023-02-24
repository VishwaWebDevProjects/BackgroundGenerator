var css = document.querySelector("h3");
var color0 = document.querySelector(".color0");
var h1 = document.querySelector("h1");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
}

color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient);

color0.addEventListener("input", function() {
    h1.style.color = color0.value;
})