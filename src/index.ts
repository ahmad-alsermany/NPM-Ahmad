Cypress.Commands.add("checkTextMetContain", (text: string) => {
    cy.contains(text).should("exist");
});