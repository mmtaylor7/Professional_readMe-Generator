// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [   
{
    type: 'input',
    message: 'What is your project title?',
    name: 'title',
  },
  {
    type: 'list',
    message: 'What is the description?',
    name: 'description',
    choices: ['yes', "no"]
  },
  {
    type: 'section',
    message: 'What are the table of contents?',
    name: 'tableOfContents',
  },
  {
    type: 'section',
    message: 'What are the installation instructions?',
    name: 'installation',
  },
  {
    type: 'section',
    message: 'What is the usage information?',
    name: 'usage',
  },
  {
    type: 'section',
    message: 'What are the contribution guidelines?',
    name: 'contribution',
  },
  {
    type: 'section',
    message: 'What are the test instructions?',
    name: 'test',
  },
  {
    type: 'list',
    message: 'What is it licensed under?',
    name: 'license',
    choices: ['Apache 2.0 License', 'Boost Software License 1.0', 'BSD 3-Clause License'],
  },
  {
    type: 'section',
    message: 'If you have any questions, please refer to',
    name: 'questions',
  },
];

// TODO: Create a function to write README file
function writeToFile(data) {
    return fs.writeFileSync("README.md", data, (err) => {
      if(err) throw err
    })
}

// TODO: Create a function to initialize app
function init() {
    console.log(questions)

    inquirer.prompt(questions).then((answers) => {
        console.table(answers)
        writeToFile(generateMarkdown(answers))
    })
}

// Function call to initialize app
init();
