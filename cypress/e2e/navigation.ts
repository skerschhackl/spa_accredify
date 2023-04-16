// https://docs.cypress.io/api/introduction/api.html

describe('when a user opens the app', () => {
  it('visits the app root url and checks nav bar is present', () => {
    cy.visit('/')
    cy.contains('h1', 'Pick your User')

    // check nav bar home redirects to user selection
    cy.get('.nav-bar').find('.nav-bar--logo').parent().click()
    cy.contains('h1', 'Pick your User')
    
    // check link to personal user works
    cy.get('nav').contains('Personal User').click()
    cy.url().should('include', '/personal')
    cy.get('.nav-bar').find('.nav-bar--logo').parent().click()

    // check link to managed user works
    cy.get('nav').contains('Managed User').click()
    cy.url().should('include', '/managed')
    cy.get('.nav-bar').find('.nav-bar--logo').parent().click()
  })
})
