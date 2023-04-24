describe('when a user opens the app', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.get('.nav-bar').find('img').should('have.attr', 'alt', 'SPA logo');
  })

  describe('api calls are executed', () => {
    it('fetches data from the user endpoint', () => {
      cy.request('/api/v1/user').then((response) => {
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
