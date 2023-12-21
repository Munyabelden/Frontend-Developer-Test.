'use-strict';

// Selecting necessary DOM elements
const userHeader = document.querySelector('.user-header');
const textInput = document.querySelector('#header-text-input');
const instructions = document.querySelector('.instruction-card');
const userTextInput = document.querySelector('.user-header-input');

document.addEventListener('DOMContentLoaded', () => {
  showInstructions;
  clearInput;
  handleTextInput;
  handleUserTextInput;
  createHeader;
  escape;

  textInput.addEventListener('input', (event) => {
    showInstructions(event.target.value.trim());
  });

  textInput.addEventListener('input', handleTextInput);

  userTextInput.addEventListener('keypress', handleUserTextInput);

  document.addEventListener('keydown', escape);
});

const showInstructions = (inputValue) => {
  instructions.style.display = (inputValue === '/' || inputValue === '/1') ? 'block' : 'none';
}

const clearInput = (inputElement) => {
  inputElement.style.display = 'none';
  inputElement.value = '';
}

const handleTextInput = (event) => {
  const inputValue = event.target.value.trim();

  if (inputValue === '/1') {
    userTextInput.style.display = 'block';
    instructions.style.display = 'none';
    textInput.blur();
    clearInput(textInput);
  }
}

const handleUserTextInput = (event) => {
  const inputValue = event.target.value.trim();
  if (event.key === 'Enter' && inputValue !== '') {
    createHeader(inputValue);
    clearInput(userTextInput);
    userTextInput.style.display = 'none';
    textInput.style.display = 'block';
  } else {
    console.log('error');
  }
}

const escape = (event) => {
  if(event.key === 'Escape'){
    clearInput(userTextInput);
    userTextInput.style.display = 'none';
    textInput.style.display = 'block';
    instructions.style.display = 'none';
    textInput.value = '';
  }
}

const createHeader = (input) => {
  const h1Element = document.createElement('h1');
  h1Element.textContent = input;
  userHeader.appendChild(h1Element);
}

module.exports = {
  showInstructions,
  clearInput,
  handleTextInput,
  handleUserTextInput,
  createHeader,
  escape
};
