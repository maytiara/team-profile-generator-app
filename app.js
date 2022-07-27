const inquirer = require('inquirer'); //npm package
const Engineer = require('./src/employees/Engineer');
const Intern = require('./src/employees/Intern');
const Manager = require('./src/employees/Manager');
const fs = require('fs'); // import the filesystem module
const path = require('path');
const generateHtml = require('./src/generate-html/html');

const employees = []; //global variable with an empty array
const renderedOutput = path.join(__dirname, 'dist', 'team-profile.html'); // assigned variable for the rendered output html file

async function main() { //function for question set to be asked inside node.js

	//assigned variable inside the DOM function
	const managerRole = 'manager';
	const engineerRole = 'engineer';
	const internRole = 'intern';

	const answers = await inquirer.prompt([

		{
			type: 'list',
			message: 'Please enter the position?',
			name: 'role',
			choices: [managerRole, engineerRole, internRole,]
		},
		{
			type: 'input',
			message: 'Please enter the employee ID?',
			name: 'id',
		},
		{
			type: 'input',
			message: 'Please enter the email-add of the employee?',
			name: 'email',
		},
		{
			type: 'input',
			message: 'Please enter the first name of the employee?',
			name: 'name',
		},

		//specific questions per role [manager, engineer, intern]
		{
			type: 'input',
			message: 'What is the office number?',
			name: 'office_number',
			when: (answers) => answers.role === managerRole, //return function that returns true statement
		},
		{
			type: 'input',
			message: 'What is the github username/link?',
			name: 'github',
			when: (answers) => answers.role === engineerRole,
		},
		{
			type: 'input',
			message: 'What is the school name?',
			name: 'school',
			when: (answers) => answers.role === internRole,
		},
		{
			type: 'confirm',
			message: 'Do you want to register another employee?',
			name: 'register',
		}
  	]);

  	// Once we received the emloyee details, we will store those input answers.
	// statements per role & added new details to the employees array []
  	if(answers.role === managerRole) {
		employees.push(new Manager(answers.id, answers.email, answers.name, answers.office_number));
	}
	if(answers.role === engineerRole) {
		employees.push(new Engineer(answers.id, answers.email, answers.name, answers.github));
	}
	if(answers.role === internRole) {
		employees.push(new Intern(answers.id, answers.email, answers.name, answers.school));
	}

	console.log(employees);
	// This is the condition, once we have all the input questions has been answered.
	// We will have another prompt asking if the user want to register another employee. 
  	if (!answers.register) { //TRUE, statement

		// generate the html
		const html = generateHtml(employees);

		// creates a new html file, using synchronous method //fs.writeFileSync(outputHtmlFile, html, 'utf-8');
		// using additional feature, try-catch block that may throw errors
		try {
			fs.writeFileSync(renderedOutput, html, 'utf-8'); // calling the fs module ; syntax (data, file, options)
			console.log("File written succesfully");
		} catch (err) {
			console.error(err);
		}	console.log("You're awesome");


		//FALSE, statement once the user answered NO
	} 	else {
		await main(); //This a recursive approach, that let user to repeats the same question in a loop cycle.
	}
}

main(); //to run the function

// An application to generate team profile

// manager

// engineer

// intern