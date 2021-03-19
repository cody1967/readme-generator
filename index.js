// TODO: Include packages needed for this application
// packages
 const inquirer = require("inquirer");
 const fs = require("fs");
 const path = require("path")
 const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [

{
  type:"input", 
  name:"title",
  message:"What is your project title?"
},
{
  // check git hub licenses for the info
  type:"list", 
  name:"license",
  message:"which license would you like to use for this project?",
  choices:["this", "that", "and", "the", "other"]
},

  



];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((userAnwser) => {
    writeToFile("Readme.md", generateMarkdown({
      ...userAnwser
    }))
  })
}

// Function call to initialize app
init();
