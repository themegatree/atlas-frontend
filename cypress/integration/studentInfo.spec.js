describe("Student Info", function() {
    beforeEach(function() {
        cy.intercept("http://localhost:5000/api/students/1", { fixture: 'studentInfo.json' })
        cy.intercept("https://api.github.com/users/testname", { fixture: 'studentInfoImageLink.json' })
        cy.intercept("http://localhost:5000/api/mock", {fixture: 'exampleProfile.png'})
    })
    it("Student Info data test", function() {
        cy.visit('/students/1')
        cy.get('#githubImage').should('exist')
        cy.get('#id').should('contain', '1') 
        cy.get('#firstName').should('contain', 'Mike') 
        cy.get('#lastName').should('contain', 'Testerson') 
        cy.get('#github').should('contain', 'testname') 
        cy.get('#email').should('contain', 'real@email.com') 

        cy.get('#challengeName-0').should('contain', 'Bank') 
        cy.get('#language-0').should('contain', 'NodeJS') 
        cy.get('#studentScore-0').should('contain', 'complete') 
        cy.get('#coachScore-0').should('contain', 'complete') 
        cy.get('#dueDate-0').should('contain', '2021-08-07') 
        cy.get('#submissionDate-0').should('contain', '2021-08-06') 

        cy.get('#challengeName-1').should('contain', 'Chitter') 
        cy.get('#language-1').should('contain', 'NodeJS') 
        cy.get('#studentScore-1').should('contain', 'complete') 
        cy.get('#coachScore-1').should('contain', 'incomplete') 
        cy.get('#dueDate-1').should('contain', '2021-08-18') 
        cy.get('#submissionDate-1').should('contain', '2021-08-16') 
    })
})