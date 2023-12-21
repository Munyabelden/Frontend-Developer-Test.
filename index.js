'use-strict';

// Selecting necessary DOM elements
const userHeader = document.querySelector('.user-header');
const textInput = document.querySelector('#header-text-input');
const instructions = document.querySelector('.instruction-card');
const userTextInput = document.querySelector('.user-header-input');

// Function to show or hide instructions based on input value
const showInstructions = (inputValue) => {
  instructions.style.display = (inputValue === '/' || inputValue === '/1') ? 'block' : 'none';
}

// Function to clear input field and hide its display
const clearInput = (inputElement) => {
  inputElement.style.display = 'none';
  inputElement.value = '';
}

// Function triggered when '/' or '1' is pressed
const handleTextInput = (event) => {
  const inputValue = event.target.value.trim();

  // When input matches '/1'
  if (inputValue === '/1') {
    userTextInput.style.display = 'block';
    instructions.style.display = 'none';
    textInput.blur();
    clearInput(textInput);
  }
}

// Function triggered when 'Enter' is pressed in user input field
const handleUserTextInput = (event) => {
  const inputValue = event.target.value.trim();

  // When 'Enter' key is pressed and input is not empty
  if (event.key === 'Enter' && inputValue !== '') {
    createHeader(inputValue);
    clearInput(userTextInput);
    userTextInput.style.display = 'none';
    textInput.style.display = 'block'; 
  } else {
    console.log('error'); // Log an error if input is empty
  }
}

// Function to create a header element with provided text
const createHeader = (input) => {
  const h1Element = document.createElement('h1');
  h1Element.textContent = input;
  userHeader.appendChild(h1Element);
}

// Event listeners for input and keypress events
textInput.addEventListener('input', (event) => {
  showInstructions(event.target.value.trim()); // Show/hide instructions based on input
});

textInput.addEventListener('input', handleTextInput); // Listen for keypress in main text input

userTextInput.addEventListener('keypress', handleUserTextInput); // Listen for keypress in user input
