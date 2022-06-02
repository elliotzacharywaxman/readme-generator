const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const path = require("path");

const inquirer = require('inquirer');
inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "What is the description of your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "What is the usage of your project?"
    },
    {
        type: "input",
        name: "installation",
        message: "What is the installation of your project?"
    },
    {
        type: "list",
        choices: ["apache 2.0", "MIT", "GPL", "BSD 3.0"],
        name: "license",
        message: "What is the license of your project?"
    }
  ])
  .then((answers) => {
    fs.writeFileSync(path.join(__dirname,"/dist/","README.md"),generateMarkdown(answers))
    console.log(answers)
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });