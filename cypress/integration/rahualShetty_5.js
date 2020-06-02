/// <reference types="Cypress" />
 
describe('My Second Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
//Check boxes
cy.visit("http://qaclickacademy.com/practice.php")

//to perfom moveover we use the Jquery method show
cy.get("div.mouse-hover-content").invoke('show')
//The element which we are going to perform action should be the immeditae child of the Jquey element
//Other wise this won't work
cy.contains("Top").click()
//To verify we have reached top of the page
cy.url().should("include","top")
 
})
})