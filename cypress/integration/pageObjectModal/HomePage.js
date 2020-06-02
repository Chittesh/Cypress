class HomePage {
    getName() {
        return cy.get("input[name='name']:nth-child(2)")
    }

    getGender() {
        return cy.get("#exampleFormControlSelect1")
    }

    getTwoWayBindingName() {
        return cy.get("input[name='name']:nth-child(1)")
    }

    getDisabledRaido() {
        return cy.get("#inlineRadio3")
    }
}

export default HomePage;