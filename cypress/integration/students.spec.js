describe("Students - display:", function() {
  beforeEach(function() {
    cy.intercept("http://localhost:5000/api/students", { fixture: 'students.json' })
  })

  it("Data Correctly Stored", function() {
    cy.visit('/students')
    cy.get('#card').should("contain", "TEST")
    cy.get('#card').should("contain", "afred")
    cy.get('#card').should("contain", "vt-al@email.com")
    cy.get('#card').should("contain", "Imaginary")
  })
})

describe("Students - Table in correct order:", function() {
beforeEach( function() {
  cy.intercept("http://localhost:5000/api/students", { fixture: 'students.json' })
})

it("Last Name Alpabetical Order", function() {
  cy.visit("/students")
  cy.get("h4:first").should("contain", "PERSON")
})
})

describe("Student - Link button works", function() {
  beforeEach( function() {
    cy.intercept("http://localhost:5000/api/students", { fixture: 'students.json' })
  })
  it("Links to Student Page", function() {
    cy.visit("/students")
    cy.get("a h4").first().click({force: true})
    cy.get("#id").should("contain", "3")
  })
})