/// <reference types="cypress"/>
/// <reference types="cypress-xpath" />
import Helper from '../support/pageObjects/helpFunctions'

// 989 - it`s the maximum number that the program counts
const data = [2,5,8,11,14,17,20,23,27,31,39,40,50,200,989]

describe('Checking factorial', () => {
    before('Open url', () => {
        cy.open()
    })

    it('Check', () => {
        data.forEach((num)=>{
            Helper.insert(num)
            Helper.btn()
            Helper.check(num) 
            Helper.clear()
        })
    })
})