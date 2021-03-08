describe("test suite", function(){

    it ('visit website', function(){
    
    cy.visit('http://automationpractice.com/index.php')
    
    })
    it ('Click signin button', function(){

  
        cy.get('.login').click();
    
      
        })
  it('sign in', function(){
   
    
     cy.get('#email_create').type('55@dk.com')   
     cy.get('#SubmitCreate > span').click();
       
     cy.wait(2000)
         
 })
 it('radio button', function(){
   
    
    //cy.get('#email_create').click();  
   
    cy.get('#id_gender1').click(); 
    cy.get('#customer_firstname').type('Tanzeeb')
    cy.get('#customer_lastname').type('Tanzeeb')
    cy.get('#passwd').type('123456789')
    cy.get('#address1').type('Tanzeeb')
    cy.get('#city').type('Tanzeeb')
    cy.get('#id_state').select('Alabama')
    cy.get('.id_state')
    cy.get('#postcode').type('12304')
    cy.get('#phone_mobile').type('01734931724')
    cy.get('#alias').type('Tanzeeb')
    cy.get('#submitAccount > span').click();

    //cy.wait(2000)
        
})


})