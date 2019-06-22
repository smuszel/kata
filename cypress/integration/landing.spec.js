import { showProductsButton, linkToProducts, listOfProducts } from './selectors';

describe('Landing page', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('does not have elements from other views', () => {
        cy.get(listOfProducts).should('not.exist');
    });

    it('has proper title', () => {
        cy.title().should('eq', 'ABC Products');
    });

    it('has show products button', () => {
        cy.get(showProductsButton).should('have.text', 'show products');
    });

    it('has link to products', () => {
        cy.get(linkToProducts).click();
        cy.url().should('include', '/products');
    });
});
