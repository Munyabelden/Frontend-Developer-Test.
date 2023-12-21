const {
  showInstructions,
  clearInput,
  handleTextInput,
  handleUserTextInput,
  createHeader,
  escape
} = require('./index');

document.body.innerHTML = `
  <div class="user-header"></div>
  <form action="#" class="form" id="form">
  <input type="text" name="text" id="header-text-input" class="header-text-input" placeholder="Type / for blocks, @ to link docs or people">
  <input type="text" name="header-text" id="user-header-input" class="user-header-input" placeholder="Heading 1">
  </form>
  <div class="instruction-card"></div>
  <input type="text" class="user-header-input" />
`;

describe('showInstructions function', () => {
  test('it shows instructions when inputValue is "/"', () => {
    document.addEventListener('DOMContentLoaded', () => {
      const instructions = document.querySelector('.instruction-card');

      showInstructions('/');
      expect(instructions.style.display).toBe('block');
    })
  });

  test('it hides instructions when inputValue is not "/"', () => {
    document.addEventListener('DOMContentLoaded', () => {
      const instructions = document.querySelector('.instruction-card');

      showInstructions('something else');
      expect(instructions.style.display).toBe('none');
    });
  });
});

describe('clearInput function', () => {
  test('it clears and hides input element', () => {
    document.addEventListener('DOMContentLoaded', () => {

    });
    const inputElement = document.querySelector('#header-text-input');

    inputElement.style.display = 'block';
    inputElement.value = 'test value';

    clearInput(inputElement);
    expect(inputElement.style.display).toBe('none');
    expect(inputElement.value).toBe('');
  });
});

describe('handleTextInput function', () => {
  test('it shows userTextInput and hides instructions when inputValue is "/1"', () => {
    document.addEventListener('DOMContentLoaded', () => {
      const userTextInput = document.querySelector('.user-header-input');
      const instructions = document.querySelector('.instruction-card');
      const textInput = document.querySelector('#header-text-input');
  
      handleTextInput({ target: { value: '/1' } });
  
      expect(userTextInput.style.display).toBe('block');
      expect(instructions.style.display).toBe('none');
      expect(textInput.style.display).toBe('none');
    })
  });
});

describe('handleUserTextInput function', () => {
  test('it creates a header and clears userTextInput', () => {
    document.addEventListener('DOMContentLoaded', () => {
      const userHeader = document.querySelector('.user-header');
      const userTextInput = document.querySelector('.user-header-input');
  
      userTextInput.value = 'Test Header Text';
      handleUserTextInput({ key: 'Enter', target: { value: 'Test Header Text' } });
  
      const createdHeader = userHeader.querySelector('h1');
      expect(createdHeader.textContent).toBe('Test Header Text');
      expect(userTextInput.style.display).toBe('none');
      expect(userTextInput.value).toBe('');
    });
  });

  test('it logs an error when Enter key is pressed with an empty input', () => {
    document.addEventListener('DOMContentLoaded', () => {
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
      handleUserTextInput({ key: 'Enter', target: { value: '' } });
  
      expect(consoleSpy).toHaveBeenCalledWith('error');
      consoleSpy.mockRestore();
    });
  });
});

describe('createHeader function', () => {
  test('it creates a header element with provided text', () => {
    document.addEventListener('DOMContentLoaded', () => {
      const userHeader = document.querySelector('.user-header');

      createHeader('Test Header');
      const createdHeader = userHeader.querySelector('h1');
  
      expect(createdHeader).not.toBeNull();
      expect(createdHeader.textContent).toBe('Test Header');
    });
  });
});

describe('Escape function', () => {
  test('it should return all styles back to default', () => {
    document.addEventListener('DOMContentLoaded', () => {
      const textInput = document.querySelector('#header-text-input');
      const instructions = document.querySelector('.instruction-card');
      const userTextInput = document.querySelector('.user-header-input');

      escape({ key: 'Escape' });

      expect(textInput.style.display).toBe('block');
      expect(instructions.style.display).toBe('none');
      expect(userTextInput.style.display).toBe('none');
    });
  });
});
