const fs = require('fs'); //default variable
const path = require('path'); //default variable

const cardTemplatePath = path.join(__dirname, 'demo-templates', 'card-container.html');

// This function generates the input visible for every role.
function generateCard(employee) { // function to generate the card for each employee => const cards

    // reads the entire contents of card.html template
    const cardTemplate = fs.readFileSync(cardTemplatePath, 'utf-8'); // syntax (data, option)
    // replace the placeholders with the actual input data
    let replacedData = cardTemplate.replace('{{name}}', employee.getName())
        .replace('{{id}}', employee.getId())
        .replace('{{email}}', employee.getEmail())
    
    // Statements to replace the placeholder specific per role
    // Manager, for Office Number
    if (employee.getRole() === 'Manager') {
        replacedData = replacedData.replace('{{attr_key}}', 'Office Number')
            replace('{{attr_value}}', employee.getOfficeNumber())
    }
    // Engineer, for Github
    if (employee.getRole() === 'Engineer') {
        replacedData = replacedData.replace('{{attr_key}}', 'Github')
            replace('{{attr_value}}', employee.getGithub())
    }
    // Engineer, for Github
    if (employee.getRole() === 'Intern') {
        replacedData = replacedData.replace('{{attr_key}}', 'School')
            replace('{{attr_value}}', employee.getSchool())
    }

    return replacedData; //return the Let replacedData => string
}

function generateHtml (employees) {

    // loop through each employee

    // generate a card for each employee
    const cards = employees.map(generateCard)
    // after the loop, once done we will join the cards into one stack

    // replace the {{body}} with the card string

}

module.exports = generateHtml;
