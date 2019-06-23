import {
    listOfProducts,
    showProductsButton,
    linkToProducts,
    productsInList,
} from './selectors';

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

    it('each product has title and price', () => {
        const products = cy.get(productsInList);

        products.get('.title').should('have.text', 'product title'.repeat(5));
        products.get('.price').should('have.text', '100'.repeat(5));
    });
});
