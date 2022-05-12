class Helper {
    //function for getting factorial. Source - learn.javascript.ru
    factorial = (n) => {
        return (n != 1) ? n * this.factorial(n - 1) : 1
    }

    //insert number to input
    insert(num) {
        cy.xpath('//\*[@id="number"]').type(num)
    }

    //clear input
    clear() {
        cy.xpath('//\*[@id="number"]').type('{selectall}{backspace}')
    }

    //get result
    btn() {
        cy.xpath('//\*[@id="getFactorial"]').click()
        cy.wait(500)
    }

    //checking result
    check(num) {
        if(num >= 34 && num < 171) {
            cy.get('#resultDiv').then(($val) => {
                expect($val.text().slice(0, 39 + `${num}`.length)).to.eq(`The factorial of ${num} is: ${this.factorial(num)}`.slice(0, 39 + `${num}`.length))
            })
        } else {
            cy.get('#resultDiv').should('have.text', `The factorial of ${num} is: ${this.factorial(num)}`)
        }
    }
}

export default new Helper()