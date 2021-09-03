import 'cypress-file-upload'

describe('file upload', function(){

    beforeEach(function(){
        cy.intercept('http://localhost:5000/api/fileupload', {fixture: 'errors.json'})
    })

    it('will not run if no file is selected', function(){
        cy.visit('/assessments/upload')
        cy.get('#upload').click({force: true})
        cy.get('#invalid').should('contain', 'No file selected')
    })

    it('can accept a csv file with data on and can display success.', function(){
        cy.intercept('http://localhost:5000/api/fileupload', {fixture: 'success.json'})
        cy.visit('/assessments/upload')
        cy.fixture('fileupload.csv').then(fileContent => {
            cy.get('input[type="file"]').attachFile({
                fileContent: fileContent.toString(),
                fileName: 'fileupload.csv',
                mimeType: '.csv'
            });
        });
        cy.get('#upload').click({force: true})
        cy.get('#status').should('contain', 'success')
    })

    it('will not run and display an error if an incorrect file type is uploaded', function(){
        cy.visit('/assessments/upload')
        cy.fixture('fileupload.pdf').then(fileContent => {
            cy.get('input[type="file"]').attachFile({
                fileContent: fileContent.toString(),
                fileName: 'fileupload.pdf',
                mimeType: '.pdf',
            });
        });
        cy.get('#upload').click({force: true})
        cy.get('#invalid').should('contain', 'You have not entered a .csv file')
    })

    it('will not run and display an error if the file entered is more than 2 MB.', function(){
        cy.visit('/assessments/upload')
        cy.fixture('fileupload.csv').then(fileContent => {
            cy.get('input[type="file"]').attachFile({
                fileContent: fileContent.toString(),
                fileName: 'fileupload.csv',
                mimeType: '.csv',
            }).then(fileData => {
                Object.defineProperty(fileData[0].files[0],"size", {
                    get: cy.stub().returns(3000000)
                })
            });
        });
        cy.get('#upload').click({force: true})
        cy.get('#invalid').should('contain', 'The file you have chosen is above 2MB')
    })
})
