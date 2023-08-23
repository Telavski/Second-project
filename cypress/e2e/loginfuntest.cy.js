/// <reference types="cypress" />

describe('Login Functionality Test', () => {
  const baseUrl = 'https://m.apuestas.codere.es/';
  const username = 'testproes2405';
  const password = 'Vale2015';
  const incorrectpassword = 'alibaba';

  beforeEach(() => {
    cy.visit(baseUrl);
    cy.get('.alert-button > .button-inner', { timeout: 5000 }).click();
    // cy.get('.alert-button > .button-inner').click();
    cy.get('.btAccess').click();
  });

  it('should successfully log in with valid credentials', () => {
    cy.get('.cdr-item-input-floating.ng-untouched.ng-invalid > .item-inner > .input-wrapper > .cdr-input-floating > .text-input').type(username);
    cy.get('.ng-invalid.ng-dirty > .list > .cdr-item-input-floating.ng-pristine > .item-inner > .input-wrapper > .cdr-input-floating > .text-input').type(password);
    cy.get('form.ng-dirty > .sendForm').click();
    cy.contains('Depositar').should('be.visible');
  });

  it('should display an error with incorrect credentials', () => {
    cy.get('.cdr-item-input-floating.ng-untouched.ng-invalid > .item-inner > .input-wrapper > .cdr-input-floating > .text-input').type(username);
    cy.get('.ng-invalid.ng-dirty > .list > .cdr-item-input-floating.ng-pristine > .item-inner > .input-wrapper > .cdr-input-floating > .text-input').type(incorrectpassword);
    cy.get('form.ng-dirty > .sendForm').click();
    cy.contains('Error de inicio de sesión').should('be.visible');
  });

  it('should display an error with missing credentials', () => {
    cy.get('#btnaccess > .button-inner').click();
    cy.contains('Revisa que todos los campos estén rellenos').should('be.visible');
  });

});