



// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
  // if statment thats followed by a return "string"
function returnLicenseBadge(license) {
  if (license !== "none"){
    return `![GitHub license](https://img.shields.io/badge/license-${license}-yellow.svg)`;
    
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function returnLicenseLink(license) {
  if (license !== "none") {
    return `click here to scroll to the * #license section.`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
function returnLicenseSection(license) {
  if(license !== "none") {
    return `## License
    licensed under ${license}`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ${returnLicenseBadge(data.license)}

  ## Project Title

  ${data.title}

  ## Discription 

  ${data.discription}

  ## Table of Contents

  * [Installation](#installation)
  * [use](#usage)
  * [license](#license)
  * [contributors](#contributors)
  * [test](#test)
  * [questions](#questions)
  * [username](#username)
  

  ## installation

  please install the following dependencies: 

  \`\`\`
  ${data.installation}
  \`\`\`

  ## Usage

  ${data.usage}

  ## Contributors

  ${data.contributors}

  ## Test Instructions

  ${data.test}

  ## Questions

  ${data.questions}

  ## GitHub Username

  ${data.username}

  ## email

  ${data.email}

  
`;
}

module.exports = generateMarkdown;
