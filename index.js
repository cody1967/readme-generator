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
  message:"What Is Your Project Title?"
},
{  
  type:"input", 
  name:"discription",
  message:"Write A Discription Of Your Project?"
},
{
  type:"input", 
  name:"table",
  message:"Wite A Table Of Contents"
},
{
  type:"input", 
  name:"installation",
  message:"Installation Instructions If Any"
},
{
  type:"input", 
  name:"usage",
  message:"What Is This Project Used For?"
},
{
  // check git hub licenses for the info
  type:"list", 
  name:"license",
  message:"Which license would you like to use for this project?",
  choices:["Apache", "Boost", "Mit", "Mozilla"]
},
{
  type:"input", 
  name:"contributors",
  message:"Who Are The Contributors Of This Project?"
},
{
  type:"input", 
  name:"title",
  message:"Test Instructions?"
},
{
  type:"input", 
  name:"questions",
  message:"Any Questions?"
},
{
  type:"input", 
  name:"username",
  message:"Please Enter Your GitHub Username."
},
{
  type:"input", 
  name:"email",
  message:"Please Enter Your Email"
}

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
