describe("Dashboard", function() {
  beforeEach(function() {
      cy.intercept("http://localhost:5000/api/dashboard", { fixture: 'dashboard.json' })
      cy.visit("/dashboard")
  })

  it("Displays the cohort report for the correct cohort", function() {   
      cy.get('#title').should("contain", "MSE Dashboard")
  })

  it("Displays the total number of student", function() {
      cy.get("#studentTotal").should("contain", "100")
  })

  it("Displays the total number of cohorts", function() {
      cy.get("#cohortTotal").should("contain", "5")
  })

  it("Displays the student male gender percentage", function() {
      cy.get("#MalePercentage").should("contain", "Percentage: 60%")
  })

  it("Displays the student female gender percentage", function() { 
      cy.get("#FemalePercentage").should("contain", "Percentage: 40%")
  })

  it("Displays the student prefer not to say gender percentage", function() { 
    cy.get("#pntsPercentage").should("contain", "Percentage: 0%")
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

  it("Displays the percentage of students who are black", function() {
    cy.get("#BlackPercentage").should("contain", "50%")
  })

  it("Displays the at least completed percentage for the chitter", function() {
    cy.get("#ChitterPercentage").should("contain", "80%")
  })

})