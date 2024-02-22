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

`;
}

module.exports = generateMarkdown;
