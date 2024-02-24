// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  # Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributing

  ${data.contribution} 

  ## Tests

  ${data.tests}

  ## License

  ${data.license}

  ## Questions

  If you have any questions regarding ${data.title}, feel free to reach out to me via [email](${data.email}) or [GitHub](${data.github}).

`;
}

module.exports = generateMarkdown;
