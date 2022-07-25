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
  ])

}

base(); //to run the function

// An application to generate team profile

// manager

// engineer

// intern