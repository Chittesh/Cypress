/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />
import 'cypress-iframe'

describe('Frame Test', function () {
   it('My FirstTest case', function () {

      cy.visit("http://qaclickacademy.com/practice.php")
      //USe the frameLoaded method to get focus on that frame
      cy.frameLoaded("#courses-iframe")
      //use cy.iframe to switch focus on the frame
      cy.iframe().contains('Mentorship').click()

      //To find any locator
      cy.iframe().find('Css Value')


   })
})