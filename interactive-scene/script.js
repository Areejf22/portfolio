const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const backgrounds = ['images/background1.jpg', 'images/background2.jpg', 'images/background3.jpg'];
const character = new Image();
character.src = 'images/character.png';

const items = [
  { img: new Image(), src: 'images/item1.png', show: true, x: 100, y: 100 },
  { img: new Image(), src: 'images/item2.png', show: true, x: 600, y: 100 },
  { img: new Image(), src: 'images/item3.png', show: true, x: 350, y: 400 }
];

const sounds = [
  new Audio('sounds/sound1.mp3'),
  new Audio('sounds/sound2.mp3'),
  new Audio('sounds/sound3.mp3')
];

let background = new Image();
background.src = backgrounds[0];
let charX = 300;

function drawScene() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  items.forEach(item => {
    if (item.show) ctx.drawImage(item.img, item.x, item.y, 50, 50);
  });
  ctx.drawImage(character, charX, 250, 100, 100);
}

document.getElementsByName('background').forEach(radio => {
  radio.addEventListener('change', () => {
    background.src = 'images/' + radio.value;
    background.onload = drawScene;
  });
});

document.getElementById('moveSlider').addEventListener('input', (e) => {
  charX = e.target.value;
  drawScene();
});

['item1', 'item2', 'item3'].forEach((id, index) => {
  document.getElementById(id).addEventListener('change', (e) => {
    items[index].show = e.target.checked;
    drawScene();
  });
});

function playSound(n) {
  sounds[n-1].play();
}

// Load all item images and initial draw
items.forEach(item => {
  item.img.src = item.src;
  item.img.onload = drawScene;
});
background.onload = drawScene;
character.onload = drawScene;
