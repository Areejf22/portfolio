// Get canvas and context
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Load background image
const background = new Image();
background.src = 'images/background.jpg';

// Load foreground images
const foreground1 = new Image();
foreground1.src = 'images/foreground1.png';

const foreground2 = new Image();
foreground2.src = 'images/foreground2.png';

// Draw images after loading
background.onload = function() {
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    foreground1.onload = function() {
        ctx.drawImage(foreground1, 100, 350, 150, 150);

        foreground2.onload = function() {
            ctx.drawImage(foreground2, 500, 300, 150, 150);

            // Add your name and scene title
            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.fillText("Areej Fatima", 20, 50);

            ctx.font = "24px Georgia";
            ctx.fillStyle = "lightblue";
            ctx.fillText("My Beautiful Scene", 20, 90);
        }
    }
}
