describe("Cohorts", function() {
  beforeEach(function() {
    cy.intercept("http://localhost:5000/api/cohorts", { fixture: 'cohorts.json' })
  })
  it("Shows that the first data displayed are on the right format", function() {
    cy.visit('/cohorts');
    cy.get('#1').should("contain", "MOCK name");
    cy.get('#1').should("contain", "MOCK date");
  })
})
