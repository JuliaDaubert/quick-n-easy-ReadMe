// function to generate markdown for README
function generateMarkdown(answers) {
  return `
<h1 align="center">${answers.title}</h1>

![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br/>
## Description
${answers.describtion}
<br>
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#test)
- [License](#license)

## Installation
${answers.installation}
## Usage
${answers.usage}
## License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
<br />
This application is covered by the ${answers.license} license. 
## Contributing
${answers.contribution}
## Tests
${answers.test}

<br />
Find me on GitHub: (https://github.com/${answers.username})<br />
<br />
Email me with any questions:  (mailto:${answers.email})<br /><br />

  `;
}

module.exports = generateMarkdown;
