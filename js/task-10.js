function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector('#controls');
const input = controls.querySelector('input[type="number"]');
const createButton = controls.querySelector('button[data-create]');
const destroyButton = controls.querySelector('button[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

function createBoxes(amount) {
  const boxes = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    div.style.margin = '5px';
    boxes.push(div);
    size += 10; 
  }

  boxesContainer.append(...boxes); 
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

createButton.addEventListener('click', () => {
  const amount = Number(input.value); 
  if (amount > 0) {
    createBoxes(amount); 
  }
});

destroyButton.addEventListener('click', () => {
  destroyBoxes(); // Ștergem toate div-urile
});