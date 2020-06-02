/// <reference types="Cypress" />

describe('My First Test', () => {
    it('Invoke googlPage', () => {
      //Navigate to google
      cy .visit("https://www.google.com/")
      //find Elements and type
      cy.get('input[name="q"]').wait(2000).type("Cypress Hello World")
      //Wait for 2 seconds
      cy.wait(2000)
      //Contains Text
      cy.contains("I'm Feeling Lucky").focus()
      cy.wait(2000)
      //To check the below css has 2 matching elements
      cy.get('input[aria-label="Google Search"]').should('have.length',2)
      //To get the first index
      cy.get('input[aria-label="Google Search"]').eq('0').should('have.length',1)
      //Select the default one
      cy.get('input[aria-label="Google Search"]:default').focus()
      cy.get('input[aria-label="Google Search"]:default').click()
      //To chech how many links which are not visited
     // cy.get('a:link').should('have.length',97)
      //each iterator
      
      cy.get('div h3').each(($el, index, $list) => {
        const text = $el.text()
        // $el is a wrapped jQuery element
        if (text.includes('Writing Your First Test')) {
          cy.wrap($el).click()
          cy.wait(2000)
        } else {
          // do something else
        }
      })


      cy.log(cy.get(".logoClass").text())
      
      
      
    })
  })