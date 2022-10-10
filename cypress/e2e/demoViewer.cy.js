/// <reference types="cypress-xpath" />

describe('Demo viwer spec', () => {
  // it('Validate with multiple users emails', () => {
  //   cy.visit('https://testing.spockanalytics.xyz/')
  // })
  // // it('Should verify title', () => {
  // //   cy.title().should('eq', 'Spock - Web3\'s first wallet analytics platform')
  // // })
  // // it('Should check Access Demo btn', () => {
  // //   cy.xpath('//*[@id="root"]/div[2]/div/div[2]/div/a').should('not.be.disabled')
  // // })
  // // it('Should redirect to demo link', () => {
  // //   cy.get('a[href*="/demo/dashboard"]').click()
  // // })
  // it('Should redirect to demo link', () => {
  //   cy.contains('Access Demo').invoke('removeAttr', 'target').click()
  //   cy.url().should('include', '/demo')
  // })
  // it('Should fill emails', () => {
  //   //cy.xpath('input[@id="email"]')
  //   //cy.wait(10000)
  //   cy.get('#email').type('adina@gmail.com')
  //   cy.contains("Submit").click()
  //   //cy.get('[id=email]')
    it('This will work', () => {
      cy.visit('https://testing.spockanalytics.xyz/')
      cy.contains('Access Demo').invoke('removeAttr', 'target').click()
      cy.url().should('include', '/demo')
      
      cy.get('#email').type('adina@gmail.com')
      //cy.xpath('button[contains(text(),"Submit")]')
      cy.contains("Submit").click()

  })
})