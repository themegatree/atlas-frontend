import 'cypress-file-upload'

describe('file upload', function(){

    beforeEach(function(){
        cy.intercept('http://localhost:5000/api/fileupload', {fixture: 'errors.json'})
    })

    it('will not run if no file is selected', function(){
        cy.visit('/assessments/upload')
        cy.get('#assessmentType').select('moduleChallenge')
        cy.get('#upload').click()
        cy.get('#invalid').should('contain', 'No file selected')
        
    })

    it('can accept a csv file with data on and can display errors to the user', function(){
        cy.visit('/assessments/upload')
        cy.fixture('failingmock.csv').then(fileContent => {
            cy.get('input[type="file"]').attachFile({
                fileContent: fileContent.toString(),
                fileName: 'failingmock.csv',
                mimeType: '.csv'
            });
        });
        cy.get('#assessmentType').select('moduleChallenge')
        cy.get('#upload').click()
        cy.get('#error-1').should('contain', 'Student Score: wrong is invalid, on line 2')
        
    })

    it('will not run and display an error if an incorrect file type is uploaded', function(){
        cy.visit('/assessments/upload')
        cy.fixture('failingmock.pdf').then(fileContent => {
            cy.get('input[type="file"]').attachFile({
                fileContent: fileContent.toString(),
                fileName: 'failingmock.pdf',
                mimeType: '.pdf'
            });
        });
        cy.get('#assessmentType').select('moduleChallenge')
        cy.get('#upload').click()
        cy.get('#invalid').should('contain', 'You have not entered a .csv file')
        
    })
})