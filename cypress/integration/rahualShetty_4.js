/// <reference types="Cypress" />
 
describe('My Second Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
//Check boxes
cy.visit("http://qaclickacademy.com/practice.php")

//to get the 2 index of td we use nth-child(2) in xpath its td[2]
cy.get("#product tr td:nth-child(2)").each(($el, index, $list)=>{
  
  const value = $el.text()
  if(value.includes("Python")){
    //We have index parameter
    //using the eq method we can go to the specfied index
    //next() is used to go to its following sibling
    cy.get("#product tr td:nth-child(2)").eq(index).next().then(function(price){
     // cy.log(price.text())
      expect(price.text()).to.equal('25')
    })
  }

})
 
})
})