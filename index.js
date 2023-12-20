'use-strict';
const userHeader = document.querySelector('.user-header');
const textInput = document.querySelector('#header-text-input');
const instructions = document.querySelector('.instruction-card');
const userTextInput = document.querySelector('.user-header-input');

textInput.addEventListener('input', (event) => {
  const inputValue = event.target.value.trim();

  if (inputValue === '/' || inputValue === '/1') {
    instructions.style.display = 'block';
  } else {
    instructions.style.display = 'none';
  }
});

textInput.addEventListener('keypress', (event) => {
  const inputValue = event.target.value.trim();

  if (event.key === 'Enter' && inputValue === '/1') {
    userTextInput.style.display = 'block';
    instructions.style.display = 'none';
    textInput.blur();
    textInput.style.display = 'none';

    // Clear the text input value
    textInput.value = '';
  }
});

const createHeader = (input) => {
  const h1Element = document.createElement('h1');
  h1Element.textContent = input;
  userHeader.appendChild(h1Element);
};

userTextInput.addEventListener('keypress', (event) => {
  const inputValue = event.target.value.trim();

  if (event.key === 'Enter' && inputValue !== '') {
    createHeader(inputValue);
    userTextInput.style.display = 'none';
    textInput.style.display = 'block';

    // Clear the userTextInput value
    userTextInput.value = '';
  }
});
