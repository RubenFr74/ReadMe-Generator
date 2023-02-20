// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
{
    type: "input",
    message: "What is your GitHub username?",
    name: "github"
},
{
    type: "input",
    message: "What is your email?",
    name: "email"
},
{
    type: "input",
    message: "What is the title of your project?",
    name: "title"
},
{
    type: "input",
    message: "Describe your project.",
    name: "description"
},
{
    type: "list",
    message: "Choose a license for your project.",
    name: "license", 
    choices: ["MIT", "Apache2.0", "GNU", "Mozilla-Public", "None"]
},
{
    type: "input",
    message: "What are the steps required to install your project?",
    name: "installation"
},
{
    type: "input",
    message: "What tests are available for your application?",
    name: "test"
},
{
    type: "input",
    message: "What is the use of this application?",
    name: "usage"
},
{
    type: "input",
    message: "How can a user contribute to the repo?",
    name: "contributors"
},];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
