describe("Student Info", function() {
    beforeEach(function() {
        cy.intercept("http://localhost:5000/api/cohorts/1", { fixture: 'individualCohort.json' })
    })
    it("Student Info data test", function() {
        cy.visit('/cohorts/1')
        cy.get('#name').should('contain', '1') 
        cy.get('#startDate').should('contain', '2021-02-28') 
        cy.get('#cohortSize').should('contain', '1') 
        cy.get('#leadCoach').should('contain', 'Ed') 
        cy.get('#firstName').should('contain', 'Mike') 
    })
})