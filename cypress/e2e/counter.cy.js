// cypress/e2e/counter.cy.js

describe('Counter Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('should display initial count as 0', () => {
    cy.get('h1').should('contain', 'Counter: 0');
  });

  it('should increment the count when Increment button is clicked', () => {
    cy.get('button').contains('Increment').click();
    cy.get('h1').should('contain', 'Counter: 1');
  });

  it('should decrement the count when Decrement button is clicked', () => {
    cy.get('button').contains('Increment').click();
    cy.get('h1').should('contain', 'Counter: 1');
    cy.get('button').contains('Decrement').click();
    cy.get('h1').should('contain', 'Counter: 0');
  });

  it('should not decrement below 0', () => {
    cy.get('button').contains('Decrement').click();
    cy.get('h1').should('contain', 'Counter: 0');
  });
});
