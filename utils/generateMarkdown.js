// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![MIT](https://img.shields.io/badge/License-MIT-blue)](https://opensource.org/licenses/MIT)`
  } else if
    (license === "apache 2.0") {
    return `[![Apache](https://img.shields.io/badge/License-apache%202.0-yellowgreen)](https://opensource.org/licenses/apache%202.0)`
  } else if
    (license === "GPL") {
    return `[![GPL](https://img.shields.io/badge/License-GPL-green)](https://img.shields.io/badge/License-GPL-brightgreen)`
  } else if
    (license === "APL") {
    return `[![APL](https://img.shields.io/badge/License-APL-blue)](https://img.shields.io/badge/License-APL-blue)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  return `# ${data.title} 
  ## Licenses
  ${renderLicenseBadge(data.license)}
  ## Description 
  ${data.description}
  ## Installation 
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributing
  ${data.contributing}
  ## Tests
  ## Questions
  Feel free to reach out to ${data.email} or check out this git hub repo https://github.com/${data.github}
`;
}

module.exports = generateMarkdown;
