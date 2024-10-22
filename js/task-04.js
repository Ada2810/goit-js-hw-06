let counterValue = 0;
const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');
const valueDisplay = document.querySelector('#value');
function updateDisplay() {
  valueDisplay.textContent = counterValue;
}
decrementButton.addEventListener('click', () => {
  counterValue -= 1; 
  updateDisplay();
});
incrementButton.addEventListener('click', () => {
  counterValue += 1; 
  updateDisplay(); 
});
updateDisplay();