import 'cypress-file-upload';
describe("File upload page", function() {


  it("Displays", function() {
    cy.intercept('http://localhost:5000/api/fileupload/history', {fixture: 'upload-history-success.json'})

    cy.visit('/assessments/upload/history')

    cy.get('#Text-0').should('contain', 'Success');
  })

  it("Displays upload failure in history", function() {
    cy.intercept('http://localhost:5000/api/fileupload/history', {fixture: 'upload-history-failure.json'})

    cy.visit('/assessments/upload/history')

    cy.get('#Text-0').should('contain', 'Failure');
  })

  it("Press check to display error info", function() {
    cy.intercept('http://localhost:5000/api/fileupload/history', {fixture: 'upload-history-failure.json'})

    cy.visit('/assessments/upload/history')
    cy.get('#Button-0').click({force: true})


    cy.get('#Text-0').should('contain', 'You have entered an incorrect language on line 200');
  })
})
