const input = document.querySelector('#validation-input');
input.addEventListener('blur', () => {
  const requiredLength = Number(input.getAttribute('data-length')); 
  const inputLength = input.value.length; 
  if (inputLength === requiredLength) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
});