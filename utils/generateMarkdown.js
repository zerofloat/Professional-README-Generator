// function to generate markdown for README
function generateMarkdown(answers) {
  const licenseURLify = answers.license.replaceAll(' ', '_');
  return `# ${answers.title}

  # Description

  ${answers.description}

  ![License](https://img.shields.io/badge/license-${licenseURLify}-7cff00)

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)

  ## Installation

  ${answers.installation}

  ## Usage

  ${answers.usage}

  ## Contributing

  ${answers.contribution} 

  ## Tests

  ${answers.tests}

  ## License

  ${answers.license}

  ## Questions

  If you have any questions regarding ${answers.title}, feel free to reach out to me via [email](mailto:${answers.email}) or [GitHub](http://github.com/${answers.github}).

`;
}

module.exports = generateMarkdown;
