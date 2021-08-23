describe("Student Info", function() {
    beforeEach(function() {
        cy.intercept("http://localhost:5000/api/students:1", { fixture: 'studentInfo.json' })
        cy.intercept("https://api.github.com/users/testname", { fixture: 'studentInfoImageLink.json' })
        cy.intercept("http://localhost:5000/api/mock", {fixture: 'exampleProfile.png'})
    })
    it("Student Info data test", function() {
        cy.visit('/students/1')
        cy.get('#id').should('contain', '1') 
        cy.get('#firstName').should('contain', 'Mike') 
        cy.get('#lastName').should('contain', 'Testerson') 
        cy.get('#github').should('contain', 'testname') 
        cy.get('#email').should('contain', 'real@email.com') 
        cy.get('#githubImage').should('exist')
    })
})