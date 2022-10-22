const inquirer = require('inquirer');
const fs = require("fs");

const generateMD = (response) =>
`# ${response.title}
## Description
${response.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
To install the necessay dependencies, run the following command:
\`\`\`
${response.dependency}
\`\`\`
## Usage
${response.usage}

## License
${response.license}

## Contributing
${response.contributions}

## Tests
\`\`\`
${response.test}
\`\`\`
## Questions
If you have any questions about the repo, open an issue or contact me directly at ${response.email}. You can find more of my work at [${response.username}](${"htpps://github.com/" + response.username})
`;

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
      name: 'dependency',
    },
    {
      type: 'input',
      message: 'What command should be run to run tests?',
      name: 'test',
    },
    {
      type: 'input',
      message: 'What does the user need to know about the repo?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'What does the user need to know about contributing to the repo?',
      name: 'contributions',
    },
  ])
  .then((response) => {
    const markdown = generateMD(response);

    fs.writeFile('README2.md', markdown, (err) =>
      err ? console.log(err) : console.log('Successfully created README2.md!')
    );
  });
