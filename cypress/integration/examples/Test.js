/*Instructions- start the server in local through command prompt - node server.js*/
/*In Visual studio code terminal run the specification mocha files, 
by using command npx cypress run, it will run in the headless mode with default browser electron*/
/* Open cypress App by npm cypress open then select End to End testing->Chrome to run the tests*/

/* Author : Nazima */
/* Project : QA Test Challenge */

describe('Prime Number Validation test suite', function()
{

    beforeEach(function()
    {
    cy.visit('/')
    }) 
    it('Verify median of prime numbers',function()
    {
        
        //cy.visit('/')
        cy.get('input[type="number"]').type(18)
        cy.get('body').click()
        cy.get('h2').should('contain','The median is:')
        
    })

    it('Verify median of negative numbers',function()
    {
       
        cy.get('input[type="number"]').type(-5)
        cy.get('body').click()
        cy.get('h2').should('contain','The median is:')
    })



    it('Verify automatic alert handling',function()
    {
        
        cy.get('input[type="number"]').type(257911131719)
        cy.get('body').click()
        cy.on('window:alert',(str)=>
        {
            expect(str).to.contains('Number exceeds limit')
            
        }) 
    })

    it('Verify the length of prime numbers',function()
    {
        
      
        cy.get('input[type="number"]').type(97)
        cy.get('body').click()
        cy.get('h2').should('have.contain','The median is:')
        cy.get('h2').should('have.length',1)
        
    })

    /*There is a cosmetic issue, that the text box is allowing to enter a character e manually, as it might consider that as a exponent number
    /* and it displayed a popup saying "Please enter a number"*/

    /*Cypress handle the alerts automatically*/

  /*   it.only('Verify message handling',function()
    {
       
        cy.get('input[type="number"]').type('e')
        cy.on('window:alert',(str)=>
        {
            expect(str).to.contains('Please enter a number')    
        }) 
       
    }) */



    it('Verify entering character input, should not display',function()
    {
        
       
        cy.get('input[type="number"]').type('j')
        cy.get('input[type="number"]').should('have.value','')  
        cy.get('h2').should('not.be.visible')
        
    })

    it('Validate prime number after input change',function()
    {
       
        cy.get('input[type="number"]').type('1')
        cy.get('input[type="number"]').clear()
        cy.get('input[type="number"]').type('39')
        cy.get('body').click()
        cy.get('h2').should('contain','The median is:')
       
    })


    it('Verify empty input in textbox',function()
    {
       
        cy.get('input[type="number"]').click()
        cy.get('body').click()
        cy.get('h2').should('not.be.visible')
       
    })

    it('Verify response body should return 200 message',function()
    {

        cy.request('http://localhost:3000/api/18').its('status').should('eq',200)

    })
    

    
    it('Verify median in the response body',function()
    {
      
        cy.request('http://localhost:3000/api/18').
        then(function(response)
        {
                expect(response.body).to.have.property('median')
        })
    })

    it('Verify 404 error code when route to wrong url',function()
    {

        cy.request('http://localhost:3000/api/').its('status').should('eq',404)

    })

    
})