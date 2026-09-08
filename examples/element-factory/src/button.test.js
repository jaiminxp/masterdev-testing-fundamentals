import { createButton } from './button.js';

describe('createButton', () => {
  it('should create a button element', () => {
    const button = createButton()
    expect(button).toBeInstanceOf()
  });

  it.todo('should have the text "Click Me"', () => {});

  it.todo('should change the text to "Clicked!" when clicked', async () => {});
});
