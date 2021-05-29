/// <reference types="Cypress" />
const faker = require("faker")
const Locators = require("../fixtures/Locators.json")
    let userData = {
        randomFirstName : faker.name.firstName(),
        randomLastName : faker.name.lastName(),
        randomEmail : faker.internet.email(),
        randomPassword : faker.internet.password(),
        randomTitle : faker.random.word(),
        randomDescription : faker.random.words(),
        randomImage : faker.image.avatar()
    }

describe("Gallery-app", () => {
    beforeEach("Visit gallery homepage", () => {
        cy.visit('/')
        cy.url().should("contains", "https://gallery-app.vivifyideas.com/")
        cy.get(Locators.Header.Login).click()
        cy.get(Locators.Login.Email).type("tester@gmail.com")
        cy.get(Locators.Login.Password).type("12345678")
        cy.get(Locators.Login.Submit).click()
    })

    it("MyGallery with search filter ", () => {
        cy.get(Locators.Header.CreateGallery).should('be.visible').click()
        cy.get(Locators.CreateGallery.Title).type(userData.randomTitle)
        cy.get(Locators.CreateGallery.Description).type(userData.randomDescription)
        cy.get(Locators.CreateGallery.ImageUrl).type(userData.randomImage)
        cy.get(Locators.CreateGallery.Submit).click()
        cy.get(Locators.Header.MyGalleries).wait(2000).click().should('be.visible')
        cy.get(Locators.MyGalleries.Author).should('be.visible').click() 
        cy.get(Locators.MyGalleries.Edit).click()  
        cy.get(Locators.MyGalleries.Title).type(userData.randomTitle)
        cy.get(Locators.MyGalleries.Description).type(userData.randomDescription)
        cy.get(Locators.MyGalleries.Submit).click()
        cy.get(Locators.MyGalleries.Comment).type(userData.randomDescription)
        cy.get(Locators.MyGalleries.SubmitTwo).click()
        cy.get(Locators.MyGalleries.DeleteTwo).should('be.visible').click()
        cy.get(Locators.MyGalleries.Delete).click()
        cy.get(Locators.MyGalleries.Home).should('be.visible')
    }),

    it("MyGallery thrue All Gallerie search filter ", () => {
        cy.get(Locators.Header.CreateGallery).should('be.visible').click()
        cy.get(Locators.CreateGallery.Title).type(userData.randomTitle)
        cy.get(Locators.CreateGallery.Description).type(userData.randomDescription)
        cy.get(Locators.CreateGallery.ImageUrl).type(userData.randomImage)
        cy.get(Locators.CreateGallery.Submit).click() 
        cy.get(Locators.AllGalleries.Search).should('be.visible').type("Tester")
        cy.get(Locators.AllGalleries.Filter).click()
        cy.get(Locators.AllGalleries.Author).should('be.visible').click()    
    })
})
