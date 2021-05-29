/// <reference types="Cypress" />
const faker = require("faker")
const Locators = require("../fixtures/Locators.json")
    let userData = {
        randomFirstName : faker.name.firstName(),
        randomLastName : faker.name.lastName(),
        randomEmail : faker.internet.email(),
        randomPassword : faker.internet.password()
    }

describe("Gallery-app", () => {
    beforeEach("Visit gallery homepage", () => {
        cy.visit('/')
        cy.url().should("contains", "https://gallery-app.vivifyideas.com/")
    })

    it("Logout from user", () => {
        cy.get(Locators.Header.Login).click()
        cy.get(Locators.Login.Email).type("tester@gmail.com")
        cy.get(Locators.Login.Password).type("12345678")
        cy.get(Locators.Login.Submit).click()
        cy.get(Locators.Login.Homepage).should('be.visible')
        cy.get(Locators.Header.Logout).click()
    })
})
