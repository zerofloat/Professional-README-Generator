const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = () =>
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your application?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a brief description of your application.'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How should your application be installed?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do we use your application?'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'how can we contribute to your application?'
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license should your application have?',
            choices: ['Apache', 'GNU', 'MIT', 'BSD 2', 'BSD 3', 'Boost', 'CC Zero', 'Eclipse', 'GNU Affero GPL v3', 'GNU GPL v2', 'GNU Lesser GPL v2.1', 'Mozilla', 'Unlicense']
        },
    ]
    );

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
