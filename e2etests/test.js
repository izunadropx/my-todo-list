/* global describe, it, browser */
const expect = require('chai').expect;

describe('TodoList App', () => {
  it('Should load with the right title', () => {
    browser.url('http://localhost:3000/');
    const actualTitle = browser.getTitle();

    expect(actualTitle).to.eql('Todo List');
  });
  it('Should allow me to create a Todo', () => {
      const todoText = 'Get better at testing';
      browser.url('http://localhost:3000/');
      browser.touchClick('.todo-input').setValue(todoText)
      browser.elementClear('.todo-text').getText();

      expect(actual).to.equal(todoText);

  });
  it('Should allow me to delete a Todo', () => {
    const todoText = 'Get better at testing';
    browser.url('http://localhost:3000/');
    browser.touchClick('.todo-input').setValue(todoText)
    browser.click('.todo-submit');
    browser.click('remove-todo')
    expect(actual).to.equal(todoText);

});

  

});