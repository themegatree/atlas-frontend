
describe("Student Info", function() {
    beforeEach(function() {
        cy.intercept("http://localhost:5000/api/cohorts/1", { fixture: 'individualCohort.json' })
    })
    it("Can Get Cohort Informatation", function() {
        cy.visit('/cohorts/1')
        cy.get('#name').should('contain', '1') 
        cy.get('#startDate').should('contain', '2021-02-28') 
        cy.get('#cohortSize').should('contain', '2') 
        cy.get('#leadCoach').should('contain', 'Ed') 
    })

     it("Can Get Students in Cohort", function() {
        cy.visit('/cohorts/1')
        cy.get('#1').should('contain', 'Fred') 
        cy.get('#1').should('contain', 'Marshall') 
        cy.get('#2').should('contain', 'Betty') 
        cy.get('#2').should('contain', 'Clark') 

    })

    it("Can go to Student Info Page", function() {
        cy.visit('/cohorts/1')
        cy.get('#1').click({force:true})
        cy.url().should("contain", "students/1")

    })

    it("Can go to Cohort Report Page", function() {
        cy.visit('/cohorts/1')
        cy.get('#reportLink').click({force:true})
        cy.url().should("contain", "cohorts/1/reports")
    })
})