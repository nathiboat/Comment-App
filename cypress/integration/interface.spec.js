
context('Interface testing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('User have to input name first', () => {

    cy.get('#name-input')
      .type('fake name')
      .should('have.value', 'fake name')
      .should('not.have.value', '')
      .should('not.have')

    //Chat box should not be visible
    cy.get('#message-container')
      .should('not.be.visible')

  })


  it('After put name click on button chat box appear', () => {

    cy.get('#name-input')
      .type('fake name')

    cy.get('#commit-button')
      .click('center')

    //Chat box should not be visible
    cy.get('#message-container')
      .should('be.visible')
  })

  it('Input comment', () => {

    cy.get('#name-input')
      .type('fake name')

    cy.get('#commit-button')
      .click('center')

    //Chat box should not be visible
    cy.get('#message-input').type('Hello').should('have.value', 'Hello')
  })

  it('Click on sent button should clear input value', () => {

    cy.get('#name-input')
      .type('fake name')

    cy.get('#commit-button')
      .click('center')

    //Chat box should not be visible
    cy.get('#message-input').type('Very nice')
    cy.get('#send-message-button').click('center')
    cy.get('#message-input').should('not.have.value', 'Very nice')
  })

  it('When click send commend should appear as latest in the container', () => {

    cy.get('#name-input')
      .type('fake name')

    cy.get('#commit-button')
      .click('center')

    //Chat box should not be visible
    cy.get('#message-input').type('Good one')
    cy.get('#send-message-button').click('center')
    cy.get('.message-body .comment-text').last().should('have.text', 'Good one')
  })

  it('Once input name and comment, The name on comment should be the same', () => {

    cy.get('#name-input')
      .type('Its a name')

    cy.get('#commit-button')
      .click('center')

    //Chat box should not be visible
    cy.get('#message-input').type('Good one')
    cy.get('#send-message-button').click('center')
    cy.get('.message-body .comment-owner').last().should('have.text', 'Its a name')
  })

})
