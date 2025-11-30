declare namespace Cypress {
    interface Chainable {
        checkTextMetContain(text: string): Cypress.Chainable;
    }
}