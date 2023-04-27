import { faker } from '@faker-js/faker';

describe('Los estudiantes under monkeys random events', function() {
    it('visits los estudiantes and survives monkeys', function() {
        cy.visit('https://losestudiantes.co');
        cy.wait(1000);
        executeRandomEvents(10);
    })
})

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};


function executeRandomEvents (monkeyQuantities) {
 let monkeysLeft = monkeyQuantities;
 if(monkeyQuantities > 0) { 
    let randomEvent = getRandomInt(0, 2);
    events[randomEvent]();
    monkeysLeft=-monkeysLeft;
    executeRandomEvents(monkeysLeft);
 }
}

function randomClickOnLink() {
    cy.get('a').then($links => {
        var randomLink = $links.get(getRandomInt(0, $links.length));
        if(!Cypress.dom.isHidden(randomLink)) {
            cy.wrap(randomLink).click({force: true});
        }
        cy.wait(1000);
    });
}

function randomFillATextInput() {
    cy.get('[type="text"]').then($textInput => {
        var randomText = $textInput.get(getRandomInt(0, $textInput.length));
        if(!Cypress.dom.isHidden(randomText)) {
            const countOfLetter = getRandomInt(0, 20)
            cy.wrap(randomText).type(faker.random.words(countOfLetter));
        }
        cy.wait(1000);
    });
}

function randomDropdown() {
    cy.get('select').then($selects => {
        var randomSelect = $selects.get(getRandomInt(0, $selects.length));
        if(!Cypress.dom.isHidden(randomSelect)) {
            const countOfLetter = getRandomInt(0, 20)
            cy.wrap(randomText).type(faker.random.words(countOfLetter));
        }
        cy.wait(1000);
    });
}

const events = {
    0: () => randomClickOnLink(),
    1: () => randomFillATextInput()
}