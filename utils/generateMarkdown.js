
function generateMarkdown(data) {
  return `# ${data.title}
## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} license.

## Contributing
${data.contribution}

## Tests
${data.test}

## Questions
If you have any questions, you can reach me at [${data.github}](https://github.com/${data.github}) or [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;

