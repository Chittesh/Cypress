/// <reference types="Cypress" />
 
describe('My Second Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
cy.visit("http://qaclickacademy.com/practice.php")

//we cannot use Jquery methods directly be cy doesn't understand it
//
cy.get("#opentab").then(function(elm){
   const url =  elm.prop("href")
   cy.visit(url)
})

 
})
})