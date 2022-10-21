const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'What is your project\'s name?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Please write a short description of your project.',
      name: 'description',
    },
    {
      type: 'list',
      message: 'What kind of license should your project have?',
      name: 'license',
      choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
      type: 'input',
      message: 'What kind of license should be run to install independencies?',
      name: 'x',
    },
    {
      type: 'input',
      message: 'What command should be run to run tests?',
      name: 'y',
    },
    {
      type: 'input',
      message: 'What does the user need to know about the repo?',
      name: 'knowledge',
    },
    {
      type: 'input',
      message: 'What does the user need to know about contributing to the repo?',
      name: 'contributions',
    },
  ])
  .then((response) => {
    console.log(response)
  }
  );
