
const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is the description of your project?'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the installation instructions for your project?'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What is the usage information for your project?'
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'What are the contribution guidelines for your project?'
    },
    {
      type: 'input',
      name: 'test',
      message: 'What are the test instructions for your project?'
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license would you like to use for your project?',
      choices: ['MIT', 'Apache', 'GPL']
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?'
    }
  ]).then(answers => {
    const markdown = generateMarkdown(answers);
    fs.writeFileSync('README.md', markdown);
  });

function generateReadme(answers) {
  const readme = `# ${answers.title}
## Description
${answers.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project is licensed under the ${answers.license} license.

## Contributing
${answers.contribution}

## Tests
${answers.test}

## Questions
If you have any questions, you can reach me at [${answers.github}](https://github.com/${answers.github}) or [${answers.email}](mailto:${answers.email})
`;
  return readme;
}
init();
