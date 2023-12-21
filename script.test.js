// Import functions for testing
const {
    showInstructions,
    clearInput,
    createHeader,
  } = require('./index');
  
// Mocking the textInput element in the test file
jest.mock("./index.js", () => ({
  getComment: jest.fn(),
}));
  
jest.spyOn(document, 'querySelector').mockImplementation((selector) => {
  if (selector === '#header-text-input') {
    return textInputMock; // Return the mocked textInput element
  }
});

describe('showInstructions function', () => {
  let instructions;

  beforeEach(() => {
    instructions = {
      style: { display: 'none' },
    };
  });

  test('shows instructions when inputValue is /', () => {
    showInstructions('/');
    expect(instructions.style.display).toBe('block');
  });

  test('hides instructions when inputValue is not / or /1', () => {
    showInstructions('example');
    expect(instructions.style.display).toBe('none');
  });
});

describe('clearInput function', () => {
  let inputElement;

  beforeEach(() => {
    inputElement = {
      style: { display: 'block' },
      value: 'Example',
    };
  });

  test('clears and hides inputElement', () => {
    clearInput(inputElement);
    expect(inputElement.style.display).toBe('none');
    expect(inputElement.value).toBe('');
  });
});

describe('createHeader function', () => {
  test('creates an h1 element with provided text', () => {
    const input = 'Test Header';
    document.body.innerHTML = '<div class="user-header"></div>'; // Mock userHeader in the DOM

    createHeader(input);
    const h1Element = document.querySelector('.user-header h1');

    expect(h1Element.textContent).toBe(input);
  });
});
 