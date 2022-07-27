const inquirer = require('inquirer');

async function base () { //function for question set to be asked inside node.js

  const answers = await inquirer.prompt ([
		{
			type: 'list',
      message: 'Please enter the role/position?',
      name: 'role',
			choices: [
				'manager',
				'engineer',
				'intern',
			]
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
			when: function (answers) { //return function that returns true statement
				return answers.role === 'manager';
			},
		},
		{
			type: 'input',
			message: 'What is the github username/link?',
			name: 'github',
			when: function (answers) { //return function that returns true statement
				return answers.role === 'engineer';
			}
		},
		{
			type: 'input',
			message: 'What is the school/institution name?',
			name: 'school',
			when: function (answers) { //return function that returns true statement
				return answers.role === 'intern';
			},
		},
		{
			type: 'confirm',
			message: 'Do you want to register another employee?',
			name: 'register',
		},
  ])

	// This is the condition, once we have all the input questions has been answered.
	// We will have another prompt asking if the user want to register another employee. 
  	if (!answers.register) { //TRUE, statement
		//FALSE, statement once the user answered NO
	} 	else {
		base(); //This a recursive approach, that let user to repeats the same question in a loop cycle.
	}
}

base(); //to run the function

// An application to generate team profile

// manager

// engineer

// intern