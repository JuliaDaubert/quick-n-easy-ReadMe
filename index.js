//Declaration
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require('fs');
const logSymbols = require('log-symbols');


// User Questions
const questions =
    [
        {
            type: "input",
            name: "title",
            message: "What is the project title?"
        },

        {
            type: "input",
            name: "describtion",
            message: "How do you decribe your project?"
        },


        {
            type: "input",
            name: "installation",
            message: "What are the installation instructions?"
        },

        {
            type: "input",
            name: "usage",
            message: "What is this project usage for?"
        },

        {
            type: "input",
            name: "contribution",
            message: "What contribution guidelines does your project have"
        },

        {
            type: "input",
            name: "test",
            message: "What are the test instructions"
        },

        {
            type: "list",
            name: "license",
            message: "What license was used?",
            choices: [
                "Apache",
                "BSD",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },

        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username. "
        },

        {
            type: "input",
            name: "email",
            message: "Please enter your email. "
        }
    ]



// // function to initialize program
// function init() {  
// }

//User Questions

function promptUser() {
    inquirer
        .prompt(questions)
        .then(answers => {
            // Use user feedback for... whatever!!
            console.log(answers);
            //const answers = answers;
            let readMe = generateMarkdown(answers);
            console.log(readMe);
            fs.writeFile("MyReadMe.md", readMe, () => {
                console.log(logSymbols.success + " ReadMe successfully created!");
            })

        })
        .catch(error => {
            console.log(logSymbols.error + error);
        });
}



// function call to initialize program
// init();
promptUser();

