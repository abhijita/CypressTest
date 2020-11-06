import { includes } from "cypress/types/lodash"




it("Testing loan app",()=>{
    cy.visit("https://www.calculator.net/loan-calculator.html")
    // cy.get("input[name='cloanamount']").clear().type("1000")
    // cy.get("input#cloanterm").clear().type("5")
    // cy.get("#cloantermmonth" ).clear({force: true}).type("0")
    // cy.get("#cinterestrate").clear().type("6")
    // cy.get("#ccompound").select("Daily")
    // cy.get("#cpayback")
    // .select("weekly")
    // .should('have.value',"weekly")

    cy.get("a[href*=monthly]")
    .should("have.text","Amortized Loan: Fixed payments paid periodically until loan maturity")
    
    
   
})