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
let item2X = 600;
let item3X = 350;

function drawScene() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  if (items[0].show) ctx.drawImage(items[0].img, 100, 100, 50, 50); // Sun stays fixed
  if (items[1].show) ctx.drawImage(items[1].img, item2X, 100, 50, 50); // Tree
  if (items[2].show) ctx.drawImage(items[2].img, item3X, 400, 50, 50); // Flower
  ctx.drawImage(character, charX, 250, 100, 100); // Cat
}

document.getElementsByName('background').forEach(radio => {
  radio.addEventListener('change', () => {
    background.src = 'images/' + radio.value;
    background.onload = drawScene;
  });
});

document.getElementById('moveSlider').addEventListener('input', (e) => {
  charX = parseInt(e.target.value);
  drawScene();
});

['item1', 'item2', 'item3'].forEach((id, index) => {
  document.getElementById(id).addEventListener('change', (e) => {
    items[index].show = e.target.checked;
    drawScene();
  });
});

document.body.insertAdjacentHTML('beforeend', `
  <div style="margin: 20px 0">
    <label><strong>Move Tree:</strong></label>
    <input type="range" id="treeSlider" min="0" max="700" value="600">
    <br>
    <label><strong>Move Flower:</strong></label>
    <input type="range" id="flowerSlider" min="0" max="700" value="350">
  </div>
`);

document.getElementById('treeSlider').addEventListener('input', (e) => {
  item2X = parseInt(e.target.value);
  drawScene();
});

document.getElementById('flowerSlider').addEventListener('input', (e) => {
  item3X = parseInt(e.target.value);
  drawScene();
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
