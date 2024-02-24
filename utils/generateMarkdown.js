// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

  # Description

  ${answers.description}

  ![License](https://img.shields.io/badge/license-${answers.license}-7cff00)

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

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

  If you have any questions regarding ${answers.title}, feel free to reach out to me via [email](${answers.email}) or [GitHub](${answers.github}).

`;
}

module.exports = generateMarkdown;
