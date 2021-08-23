describe("Reports", function() {
    beforeEach(function() {
        cy.intercept("http://localhost:5000/api/cohorts/*/reports", { fixture: 'reports.json' })
        cy.visit('/cohorts/1/reports')
    })

    it("Displays the cohort report for the correct cohort", function() {
        cy.get('#report1').should("contain", "mse-2106-a Report")
    })

    it("Displays the cohort size", function() {
        cy.get("#cohortSize").should("contain", "20")
    })

    it("Displays the cohort male gender percentage", function() {
        cy.get("#MalePercentage").should("contain", "Percentage: 50%")
    })

    it("Displays the cohort female gender percentage", function() {
        cy.get("#FemalePercentage").should("contain", "Percentage: 50%")
    })

    it("Displays data for three gender options", function() {
        cy.get('#genderData').children().should('have.length', 3)
    })

    it("Displays data for six background options", function() {
        cy.get('#backgroundData').children().should('have.length', 6)
    })

    it("Displays data for five challenge options", function() {
        cy.get('#challengeData').children().should('have.length', 5)
    })

    it("Displays the percentage of students who are white", function() {
        cy.get("#WhitePercentage").should("contain", "50%")
    })

    it("Displays the completion percentage for the chitter", function() {
        cy.get("#ChitterPercentage").should("contain", "100%")
    })

    it("Displays three charts", function() {
        cy.get("canvas").should("be.visible")
    })
})