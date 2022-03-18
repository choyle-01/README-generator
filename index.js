const inquirer = require("inquirer");
const fs = require("fs");

const init = function () {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your GitHub username?",
        name: "userName",
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is your project's title?",
        name: "title",
      },
      {
        type: "input",
        message: "Please write a short description of your project.",
        name: "description",
      },
      {
        type: "list",
        message: "What kind of license should your project have?",
        name: "license",
        choices: [
          { name: "MIT", value: "MIT" },
          { name: "APACHE 2.0", value: "apache_2.0" },
          { name: "GPI 3.0", value: "GPI_3.0" },
          { name: "BSD 3", value: "BSD_3" },
          { name: "None", value: "none" },
        ],
      },
      {
        type: "input",
        message: "Which command should be run to install dependencies?",
        name: "install",
        default: "npm install",
      },
      {
        type: "input",
        message: "Which command should be run to run tests?",
        name: "tests",
        default: "npm test",
      },
      {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "usage",
      },
      {
        type: "input",
        message:
          "What does the user need to know about contributing to the repo?",
        name: "contributing",
      },
    ])
    .then(
      ({
        userName,
        email,
        title,
        description,
        license,
        install,
        tests,
        usage,
        contributing,
      }) => {
        const readMeTemplate = `# ${title}
![GitHub liscense](https://img.shields.io/badge/License-${license}-blue.svg)
      
## Description
      
${description}
      
## Table of Contents
  
* [Installation](#installation)
      
* [Usage](#usage)
      
* [License](#license)
      
* [Contributing](#contributing)
      
* [Tests](#tests)
      
* [Questions](#questions)
      
## Installation
      
To install necessary components, run the following command:

    ${install}  

## Usage
      
${usage}      

## License
      
This project is licensed under the ${license} license.
      
## Contributing

${contributing}
      
## Tests
      
To run tests, run the following command:

    ${tests}
    
## Questions 
If have any questions about the repo, open an issue or contact me directly at ${email}. You can find more of my work at ${userName}.`;
        fs.writeFile("./dist/README.md", readMeTemplate, (err) => {
          err ? console.log(err) : console.log("success!");
        });
      }
    );
};

init();
