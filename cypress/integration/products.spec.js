import { listOfProducts, showProductsButton, linkToProducts } from './selectors';

describe('Products page', () => {
    beforeEach(() => {
        cy.visit('/#/products');
    });

    it('does not have elements from other views', () => {
        cy.get(showProductsButton).should('not.exist');
        cy.get(linkToProducts).should('not.exist');
    });

    it('has list of 5 products', () => {
        cy.get(listOfProducts)
            .children()
            .should('have.length', 5);
    });
});
