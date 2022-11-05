/// <reference types="cypress-xpath" />

describe('Demo viwer spec', () => {
  it('This will work', () => {
    cy.visit('https://testing.spockanalytics.xyz/')
    cy.contains('Access Demo').invoke('removeAttr', 'target').click()
    cy.url().should('include', '/demo')
    cy.get('#email').type('adina@gmail.com')
    //cy.xpath('button[contains(text(),"Submit")]')
    cy.contains("Submit").click()
  })
  // it('This will work', () => {
  //   cy.wait('');
    
  // })
})