describe("Student Info", function() {
  beforeEach(function() {
      cy.intercept({ url: "http://localhost:5000/api/students/1", method: "GET" }, { fixture: 'studentInfo.json' })
      cy.intercept("https://api.github.com/users/testname", { fixture: 'studentInfoImageLink.json' })
      cy.intercept("http://localhost:5000/api/mock", { fixture: 'exampleProfile.png' })
      cy.visit('/students/1')
  })

  it("Student Info data test", function() {
      cy.get('#id').should('contain', '1')
      cy.get('#firstName').should('contain', 'Mike')
      cy.get('#lastName').should('contain', 'Testerson')
      cy.get('#github').should('contain', 'testname')
      cy.get('#email').should('contain', 'real@email.com')
      cy.get('#githubImage').should('exist')
  })

  describe("Successful update", function() {
    beforeEach(function() {
      cy.intercept({ url: "http://localhost:5000/api/students/1", method: "PUT" }, { fixture: 'studentInfoUpdateSuccess.json' })
    })

    it("shows success message", function() {
      cy.get('#firstName').should('contain', 'Mike')
      cy.get('#firstNameUpdate').click({force: true})
      cy.get('#updateInput').type('Jack')
      cy.get('#update').click({force: true})
      cy.get('#id').should('contain', '1')
      cy.get('#firstName').should('contain', 'Jack')
      cy.get('#lastName').should('contain', 'Testerson')
      cy.get('#github').should('contain', 'testname')
      cy.get('#email').should('contain', 'real@email.com')
      cy.get('#githubImage').should('exist')
      cy.get('#response').should('contain', 'Data Updated Successfully')
    })
  })

  describe("Failed update for no input", function() {
    beforeEach(function() {
      cy.intercept({ url: "http://localhost:5000/api/students/1", method: "PUT" }, { status: 'failure', errors: "No input" })
    })

    it("Shows error message for no input", function() {
      cy.get('#firstName').should('contain', 'Mike')
      cy.get('#lastNameUpdate').click({force: true})
      cy.get('#update').click({force: true})
      cy.get('#id').should('contain', '1')
      cy.get('#firstName').should('contain', 'Mike')
      cy.get('#lastName').should('contain', 'Testerson')
      cy.get('#github').should('contain', 'testname')
      cy.get('#email').should('contain', 'real@email.com')
      cy.get('#githubImage').should('exist')
      cy.get('#response').should('contain', 'No input')
    })
  })

  describe("Failed update for name too long", function() {
    beforeEach(function() {
      cy.intercept({ url: "http://localhost:5000/api/students/1", method: "PUT" }, { status: 'failure', errors: "value too long for type character varying(255)" })
    })

    it("Shows error message for no input", function() {
      cy.get('#firstName').should('contain', 'Mike')
      cy.get('#lastNameUpdate').click({force: true})
      cy.get('#updateInput').type('J'.repeat(301))
      cy.get('#update').click({force: true})
      cy.get('#id').should('contain', '1')
      cy.get('#firstName').should('contain', 'Mike')
      cy.get('#lastName').should('contain', 'Testerson')
      cy.get('#github').should('contain', 'testname')
      cy.get('#email').should('contain', 'real@email.com')
      cy.get('#githubImage').should('exist')
      cy.get('#response').should('contain', 'value too long for type character varying(255)')
    })
  })


})
