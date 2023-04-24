describe('when a user opens the app', () => {
  it('visits the app root url and checks nav bar is present', () => {
    cy.visit('/')
    cy.get('.nav-bar').find('img').should('have.attr', 'alt', 'SPA logo');
    cy.get('.greeting--headline').contains('John Smith');
    cy.get('.greeting--sub-headline').contains('Manage your documents.');
  })

  describe('there is a button to switch to Managed User view', () =>{
    it('clicks the button and user changes', () =>{
      cy.visit('/')
      cy.get('.switch-user--button').click();
      cy.get('.greeting--headline').contains('Jane Smith');
      cy.get('.greeting--sub-headline').contains('Manage your documents issued by SMU Academy or track your career goal.');
    })
  })

  describe('api calls are executed', () => {
    it('fetches data from the user endpoint', () => {
      cy.request('/api/v1/usermanaged').then((response) => {
        expect(response.status).to.eq(200)

        expect(response).to.have.property('body')
        expect(response).to.have.property('headers')
        expect(response).to.have.property('duration')
      })
    })

    it('fetches data from the document endpoint', () => {
      cy.request('/api/v1/document').then((response) => {
        expect(response.status).to.eq(200)

        expect(response).to.have.property('body')
        expect(response).to.have.property('headers')
        expect(response).to.have.property('duration')
      })
    })

    it('fetches data from the career goals endpoint', () => {
      cy.request('/api/v1/career').then((response) => {
        expect(response.status).to.eq(200)

        expect(response).to.have.property('body')
        expect(response).to.have.property('headers')
        expect(response).to.have.property('duration')
      })
    })
  })
  
})
