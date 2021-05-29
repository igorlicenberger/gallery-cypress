/// <reference types="Cypress" />
const faker = require("faker")
const Locators = require("../fixtures/Locators.json")
    let userData = {
        randomFirstName : faker.name.firstName(),
        randomLastName : faker.name.lastName(),
        randomEmail : faker.internet.email(),
        randomPassword : faker.internet.password(),
        randomTitle : faker.random.word(),
        randomDescription : faker.lorem.sentences(),
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

    it("CreateGallery with invalid credential ", () => {
        cy.get(Locators.Header.CreateGallery).should('be.visible').click()
        cy.get(Locators.CreateGallery.Title).type("Testing")
        cy.get(Locators.CreateGallery.Description).type("Does it work")
        cy.get(Locators.CreateGallery.ImageUrl).type("https://deep-image.ai/static/media/slider-3-b.8cdacaf4")
        cy.get(Locators.CreateGallery.Submit).click()
        cy.get(Locators.CreateGallery.Alert).should('be.visible')
    }),

    it("CreateGallery with invalid second image ", () => {
        cy.get(Locators.Header.CreateGallery).should('be.visible').click()
        cy.get(Locators.CreateGallery.Title).type("Testing")
        cy.get(Locators.CreateGallery.Description).type("Does it work")
        cy.get(Locators.CreateGallery.ImageUrl).type("https://deep-image.ai/static/media/slider-3-b.8cdacaf4.jpg")
        cy.get(Locators.CreateGallery.AddImage).click()
        cy.get(Locators.CreateGallery.ImageTwo).type("https://testing")
        cy.get(Locators.CreateGallery.ButtonUpTwo).should('be.visible').click()
        cy.get(Locators.CreateGallery.ButtonDown).click()
        cy.get(Locators.CreateGallery.Submit).click()
        cy.get(Locators.CreateGallery.Alert).should('be.visible')
    }),

    it("CreateGallery with cancel button ", () => {
        cy.get(Locators.Header.CreateGallery).should('be.visible').click()
        cy.get(Locators.CreateGallery.Title).type("Testing")
        cy.get(Locators.CreateGallery.Description).type("Does it work")
        cy.get(Locators.CreateGallery.ImageUrl).type("https://deep-image.ai/static/media/slider-3-b.8cdacaf4.jpg")
        cy.get(Locators.CreateGallery.AddImage).click()
        cy.get(Locators.CreateGallery.ImageTwo).type("https://testing")
        cy.get(Locators.CreateGallery.ButtonUpTwo).click()
        cy.get(Locators.CreateGallery.DeleteTwo).should('be.visible').click()
        cy.get(Locators.CreateGallery.Cancel).click()
    }),

    it("CreateGallery with faker", () => {
        cy.get(Locators.Header.CreateGallery).should('be.visible').click()
        cy.get(Locators.CreateGallery.Title).type(userData.randomTitle)
        cy.get(Locators.CreateGallery.Description).type(userData.randomDescription)
        cy.get(Locators.CreateGallery.ImageUrl).type(userData.randomImage)
        cy.get(Locators.CreateGallery.Submit).click()
        cy.get(Locators.CreateGallery.AllGalleries).should('be.visible')
    })
})
