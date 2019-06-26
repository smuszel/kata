import {
    listOfProducts,
    showProductsButton,
    linkToProducts,
    productsInList,
    loader,
} from './selectors';

import { products } from '../fixtures/products';

describe('Products page', () => {
    beforeEach(() => {
        cy.visit('/#/products');
    });

    it('does not have elements from other views', () => {
        cy.get(showProductsButton).should('not.exist');
        cy.get(linkToProducts).should('not.exist');
    });

    it('shows loader', () => {
        cy.get(loader).should('exist');
    });

    it('requests of products from api and displays them all', () => {
        cy.server();
        cy.route({
            url: '/api/products',
            response: JSON.stringify(products),
            method: 'GET',
        }).as('products');
        cy.wait('@products');

        cy.get(listOfProducts)
            .children()
            .should('have.length', products.length);
    });

    // it('each product has title and price', () => {
    //     const productsUi = cy.get(productsInList);

    //     productsUi.get('.title').should('have.text', products.map(p => p.title).join(''));
    //     productsUi.get('.price').should('have.text', products.map(p => p.price).join(''));
    // });
});
