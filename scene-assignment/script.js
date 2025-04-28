const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const background = new Image();
background.src = 'images/background.jpg';

const foreground1 = new Image();
foreground1.src = 'images/foreground1.png';

const foreground2 = new Image();
foreground2.src = 'images/foreground2.png';

background.onload = function() {
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  
  foreground1.onload = function() {
    ctx.drawImage(foreground1, 100, 300, 200, 200);
  }
  
  foreground2.onload = function() {
    ctx.drawImage(foreground2, 500, 200, 150, 150);
  }

  ctx.font = '30px Arial';
  ctx.fillStyle = 'black';
  ctx.fillText('Areej Fatima - My Scene', 20, 50);
};
