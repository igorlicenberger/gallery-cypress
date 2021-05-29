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

    it("Register with invalid credential ", () => {
        cy.get(Locators.Header.Register).click()
        cy.get(Locators.Register.FirstName).type("Tester")
        cy.get(Locators.Register.LastName).type("Testerovic")
        cy.get(Locators.Register.Email).type("tester@gmail.com")
        cy.get(Locators.Register.Password).type("123456")
        cy.get(Locators.Register.ConfirmedPassword).type("123456")
        cy.get(Locators.Register.Terms).click()
        cy.get(Locators.Register.Submit).click()
        cy.get(Locators.Register.Alert).should('be.visible')
        cy.get(Locators.Register.AlertTwo).should('be.visible')
    }),

    it("Register with used mail ", () => {
        cy.get(Locators.Header.Register).click()
        cy.get(Locators.Register.FirstName).type("Tester")
        cy.get(Locators.Register.LastName).type("Testerovic")
        cy.get(Locators.Register.Email).type("tester@gmail.com")
        cy.get(Locators.Register.Password).type("12345678")
        cy.get(Locators.Register.ConfirmedPassword).type("12345678")
        cy.get(Locators.Register.Terms).click()
        cy.get(Locators.Register.Submit).click()
        cy.get(Locators.Register.AlertTree).should('be.visible')
    }),

    it("Register invalid with faker ", () => {
        cy.get(Locators.Header.Register).click()
        cy.get(Locators.Register.FirstName).type(userData.randomFirstName)
        cy.get(Locators.Register.LastName).type(userData.randomLastName)
        cy.get(Locators.Register.Email).type(userData.randomEmail)
        cy.get(Locators.Register.Password).type(userData.randomPassword)
        cy.get(Locators.Register.ConfirmedPassword).type(userData.randomPassword)
        cy.get(Locators.Register.Submit).click()
        cy.get(Locators.Register.AlertFour).should('be.visible')
    }),

    it("Register valid with faker ", () => {
        cy.get(Locators.Header.Register).click()
        cy.get(Locators.Register.FirstName).type(userData.randomFirstName)
        cy.get(Locators.Register.LastName).type(userData.randomLastName)
        cy.get(Locators.Register.Email).type(userData.randomEmail)
        cy.get(Locators.Register.Password).type(userData.randomPassword)
        cy.get(Locators.Register.ConfirmedPassword).type(userData.randomPassword)
        cy.get(Locators.Register.Terms).click()
        cy.get(Locators.Register.Submit).click()
        cy.get(Locators.Register.Homepage).should('be.visible')
    })
})
