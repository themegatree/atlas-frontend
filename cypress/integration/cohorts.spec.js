/* eslint-disable no-undef */

describe("Cohorts", function() {
  beforeEach(function() {
    cy.intercept("http://localhost:5000/api/cohorts", { fixture: 'cohorts.json' })
  })
 
    it("Shows the cohort list header", function() {
    cy.visit('/cohorts');
    cy.get('#cohorts-list').should("contain", "Cohort List");
  })

  it("Shows that the first data displayed are on the right format", function() {
    cy.visit('/cohorts');
    cy.get('#1').should("contain", "MOCK name");
    cy.get('#1').should("contain", "MOCK date");
  })
  
  it("Display the individual cohort page when link is clicked", function() {
    cy.visit('/cohorts');
    cy.get('#link').click({force: true});
    cy.url().should("contain", "cohorts/1")
  })
})
