/// <reference types="Cypress" />
import HomePage from '../integration/pageObjectModal/HomePage'

describe('My Framework', function () {
  before("before Block", function () {
    //method to get data from fixtures
    cy.fixture('example').then(function (data) {
      //we use this keyword to decalre a global varibale and can be a
      //assigned to the whole class
      this.data = data
    })

  })

  it('My FirstTest case', function () {
    const homePage = new HomePage()
    cy.visit(Cypress.env('url'))
    homePage.getName().type(this.data.name)
    homePage.getGender().select(this.data.selectOption)
    //Using Jquery to get Value
    homePage.getTwoWayBindingName().should('have.value', this.data.name)
    //Using Jquery to Check attribute
    homePage.getName().should('have.attr', 'minlength', '2')
    //Using Jquery to Check elemet is disabled basically checking behaviour
    homePage.getDisabledRaido().should('be.disabled')

    cy.get("a[class='nav-link']").eq("1").click()



    this.data.items.forEach(function (elementName) {
      cy.addToCart(elementName)
    })

  })

})