// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `[![GitHub License](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return 'None';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`;
  }
  return 'None';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
    
  This project is liscensed under the ${license} license.`;
  }

  return 'None';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)
   ${renderLicenseLink(data.license)}


  * [Contributions](#contributions)

  * [Tests](#tests)

  * [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributions

  ${data.contributors}

  ## Tests

  ${data.test}

  ## Questions
  
  For any questions you may have, please emal me at ${data.email}.
  You can view mor eof my work at https://github.com/${data.github} .
`;
}

module.exports = generateMarkdown;