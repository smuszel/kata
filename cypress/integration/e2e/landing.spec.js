describe('Landing page', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('has proper title', () => {
        cy.title().should('eq', 'ABC Products');
    });

    it('has show products button', () => {
        cy.get('button').should('have.text', 'show products');
    });
});
