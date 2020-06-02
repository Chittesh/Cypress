/// <reference types="Cypress" />
 
describe('My Second Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
//Check boxes
cy.visit("http://qaclickacademy.com/practice.php")
//Alert Popup
cy.get("#alertbtn").click()

//validating text on popup
cy.on("window:alert" , (str)=>{
  expect(str).to.equal("Hello , share this practice page and share your knowledge")
})

//Confirm Popup
cy.get("[value='Confirm']").click()
//validating text on confirm popup
cy.on("window:confirm" , (str)=>{
  expect(str).to.equal("Hello , Are you sure you want to confirm?")
})

//Deleting target attribute and opeining on the same windows itself
cy.get('#opentab').invoke('removeAttr','target').click()
cy.url().should('include','qaclickacademy')
cy.go('back')
 
})
 
})