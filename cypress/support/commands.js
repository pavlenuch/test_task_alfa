//open qainterview.pythonanywhere.com
Cypress.Commands.add("open", () => {
    cy.fixture('resources').then(resources => {
        cy.log('open - qainterview.pythonanywhere.com')
        cy.visit(resources.url)
        cy.wait(2000)
    })
})