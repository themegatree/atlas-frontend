describe("Student Info", function() {
    beforeEach(function() {
        cy.intercept("http://localhost:5000/api/student:1", { fixture: 'studentInfo.json' })
        cy.intercept("https://github.com/testname.png/", { fixture: 'exampleProfile.png' })
    })
    it("Student Info data test", function() {
        cy.visit('/student/1')
        cy.get('#id').should('contain', '1') 
        cy.get('#firstName').should('contain', 'Test') 
        cy.get('#lastName').should('contain', 'Testerson') 
        cy.get('#github').should('contain', 'zcbenz') 
        cy.get('#email').should('contain', 'real@email.com') 
        cy.get('#githubImage').should('exist')
    })
})