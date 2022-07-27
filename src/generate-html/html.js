const fs = require('fs'); //default variable
const path = require('path'); //default variable

function generateCard(employee) { // function to generate the card for each employee => const cards

    // scanned the card.html template

    // replace the placeholders with the actual input data
}

function generateHtml (employees) {

    // loop through each employee

    // generate a card for each employee
    const cards = employees.map(generateCard)
    // after the loop, once done we will join the cards into one stack

    // replace the {{body}} with the card string

}

module.exports = generateHtml;
