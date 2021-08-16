describe("Cohorts", function() {
  beforeEach(function() {
    cy.intercept("http://localhost:5000/api/cohorts", { fixture: 'cohorts.json' })
  })
  it("Shows a list of cohorts", function() {
    cy.visit('/cohorts')
    cy.get('#cohorts-list').should("contain", "MOCK cohort name")
  })
})
