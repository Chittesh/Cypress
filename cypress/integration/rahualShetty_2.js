/// <reference types="Cypress" />
 
describe('My Second Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
//Check boxes
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
//Under should we validate the behavior using be.
//behavior will have only 1 parameter
//Then we are validating the property using have. 
//this will have 2 properties actual and expected
//checking the checkbox values is option1
//we and to concatenate multiple should assertions
cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')

//not Checked
 cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

//if we want to check muliple check boxes
//try to get the comman property of all the checkboxes (i.e css)
//we need to pass array of arguments
  cy.get('input[type="checkbox"]').check(['option2','option3'])
 
 //Static Dropdown
 //get the select tag
 //give the option value
  cy.get('select').select('option2').should('have.value','option2')
 
// //Dynamic dropdowns
 cy.get('#autocomplete').type('ind')
 //Checking lenght of drop downs should be greater than 2
 cy.get('#ui-id-1 li').its('length').should('be.gte', 2)
 //Selecting India
 cy.get('#ui-id-1 li div').each(($e1, index, $list) => {
     if($e1.text()==="India")
     {
         $e1.click()
     }
  })

 //To check India is selected or not
 cy.get('#autocomplete').should('have.value','India')


// //visible invisible
 cy.get('#displayed-text').should('be.visible')
 cy.get('#hide-textbox').click()
 cy.get('#displayed-text').should('not.be.visible')
 cy.get('#show-textbox').click()
cy.get('#displayed-text').should('be.visible')
 
 //radio buttons
 
 cy.get('[value="radio2"]').check().should('be.checked')
 
 
}  )
 
}  )