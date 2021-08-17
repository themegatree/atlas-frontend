import 'cypress-file-upload';
describe("File upload page", function() {
  // beforeEach(function() {
  //   cy.intercept("http://localhost:5000/api/cohorts", { fixture: 'cohorts.json' })
  // })
  it("Shows choose file button", function() {
    cy.visit('/assessments/upload')
    cy.get('#choose-file').should('exist')
    cy.fixture('mock.csv').then(fileContent => {
        cy.get('input[type="file"]').attachFile({
            fileContent: fileContent.toString(),
            fileName: 'mock.csv',
            mimeType: '.csv'
        });
    });
    cy.get('#upload').should('exist')
    cy.get('select').select('Module Challenge')
    cy.get('#upload').click()
    cy.url().should('contain', 'api/fileupload')
  })
})