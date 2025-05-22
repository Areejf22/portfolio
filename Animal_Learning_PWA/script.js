fetch('animals.json')
  .then(response => response.json())
  .then(data => {
    const canvas = document.getElementById('animalCanvas');
    const ctx = canvas.getContext('2d');
    const menu = document.getElementById('animalMenu');

    data.animals.forEach(animal => {
      const button = document.createElement('button');
      button.textContent = animal.title;
      button.onclick = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const img = new Image();
        img.onload = () => ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        img.src = animal.image;

        const audio = new Audio(animal.audio);
        audio.play();

        alert(animal.description);
      };
      menu.appendChild(button);
    });
  });