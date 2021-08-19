describe("Reports", function() {
    beforeEach(function() {
        cy.intercept("http://localhost:5000/api/cohorts/*/reports", { fixture: 'reports.json' })
    })

    it("Displays the cohort report for the correct cohort", function() {
        cy.visit('/cohorts/1/reports')
        cy.get('#report1').should("contain", "mse-2106-a Report")
    })

    it("Displays the cohort size", function() {
        cy.visit('/cohorts/1/reports')
        cy.get("#cohortSize").should("contain", "20")
    })

    it("Displays the cohort male gender percentage", function() {
        cy.visit('/cohorts/1/reports')
        cy.get("#MalePercentage").should("contain", "Percentage: 50%")
    })

    it("Displays the cohort female gender percentage", function() {
        cy.visit('/cohorts/1/reports')
        cy.get("#FemalePercentage").should("contain", "Percentage: 50%")
    })

    it("Displays data for three gender options", function() {
        cy.visit('/cohorts/1/reports')
        cy.get('#genderData').children().should('have.length', 3)
    })

    it("Displays data for six background options", function() {
        cy.visit('/cohorts/1/reports')
        cy.get('#backgroundData').children().should('have.length', 6)
    })

    it("Displays data for five challenge options", function() {
        cy.visit('/cohorts/1/reports')
        cy.get('#challengeData').children().should('have.length', 5)
    })

    it("Displays the percentage of students who are white", function() {
        cy.visit('/cohorts/1/reports')
        cy.get("#WhitePercentage").should("contain", "50%")
    })

    it("Displays the completion percentage for the chitter", function() {
        cy.visit('/cohorts/1/reports')
        cy.get("#ChitterPercentage").should("contain", "100%")
    })
})