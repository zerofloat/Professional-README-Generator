const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions =
        [{
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
            message: 'How can we contribute to your application?'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'How can we run the test(s) for your application?'
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license should your application have?',
            choices: ['Apache', 'GNU', 'MIT', 'BSD_2', 'BSD_3', 'Boost', 'CC_Zero', 'Eclipse', 'GNU_Affero_GPL_v3', 'GNU_GPL_v2', 'GNU_Lesser_GPL_v2.1', 'Mozilla', 'Unlicense']
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?'
        }
    ];

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        const markdownOutput = generateMarkdown(answers);
        fs.writeFile('README.md', markdownOutput,  (err) =>
        err ? console.error(err) : console.log("🪄"));
    })
}

// function call to initialize program
init();
