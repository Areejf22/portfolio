let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

// Load the background image
let background = new Image();
background.src = "images/background.jpg";  // Image inside images folder
background.onload = function() {
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
};

// Load the first foreground image
let foreground1 = new Image();
foreground1.src = "images/foreground1.png";
foreground1.onload = function() {
    ctx.drawImage(foreground1, 100, 300, 150, 150);
};

// Load the second foreground image
let foreground2 = new Image();
foreground2.src = "images/foreground2.png";
foreground2.onload = function() {
    ctx.drawImage(foreground2, 500, 320, 180, 130);
};

// Draw text
ctx.font = "24px Arial";
ctx.fillStyle = "white";
ctx.fillText("Areej - My Canvas Scene", 20, 40);
