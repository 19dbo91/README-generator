// #region METACODE
// Author: Dustin Bonilla
// Project Name: README Generator

/*      USER STORY
 *_______________________________________________________________________________
 * :: DEVELOPER
 *  I WANT a README Generator
 *  SO THAT I can quickly create a professional README for a new project
*/

/*      ACCEPTANCE CRITERIA
 *_______________________________________________________________________________
 * .: a CMD-Line app that accepts user input
 * 
 * ////@ prompted for info about my app repo
 *  ////>   a HQ, prof README.md is generated w/:
 *    ////> myProject.Title
 *    ////> sxns 
 *          ////Descriptions
 *          Table of Contents
 *          ////Installation
 *          ////Usage
 *          ////License
 *          ////Contributing
 *          ////Tests
 *          ////Questions
 * 
 * ////@ enter my project title
 *  ////> this is displayed as the title of the README
 * 
 * ////@ enter sxn info
 *  ////> INFO added to the appropriate sxns
 * 
 * @ choose lic for app fr: a LIST ( opts )
 *  ////> BADGE for that lic added to TOP of README
 *  > NOTICE is added to the sxn("LIC"), explaining which lic the app is under
 * 
 * @ enter my GH username
 *  > INFO added to sxn( "?'s" ) w/
 *      > links to GH profile
 * 
 * @ enter my email addr
 *  > ADDR added to sxn( "?'s" ) w/
 *      > instructions on how to reach me with additional questions
 * 
 * @ clicks links in sxn( ToC )
 *  > taken to corresp sxn
 * 
*/

/*      OTHER NOTES
 *_______________________________________________________________________________
 *  //TODO: NEED TO SCREENCASTIFY/YOUTUBE TUTORIAL
 * 
 *  need to ignore node module + ds store !BEFORE install dependencies
 *  // //gonna require file sys
 *  gonna require inquirer
 *  need to init npm -> package created
 *  need to install inq -> package lock
 *  
 *  use prompt to recieve input
 *  Output to a readme.md
 * 
 * Gen flow:
 *  user input "node index.js"
 *  questions get on the screen in sequence
 *  repsponses are retreived
 *  then rearranged into a README.md
*/
// #endregion
//! start

//#region Requirements/Other Var Declaration // // TODO:(0)
// // TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown');

const questions = [];
const outputFilePath="./newREADME.md"
const licenseOptions = ["GNU AGPLv3","GNU GPLv3", "GNU LGPLv3", "Mozilla Public License","Apache License 2.0", "MIT License","Boost Software License 1.0","The Unlicense"];
//#endregion

//#region Questions // TODO:(1)
class Question {
    constructor(nameString, typeString, msgString, choicesArr) {
        this.name = nameString;
        this.type = typeString;
        this.message = msgString;
        this.choices = choicesArr;
    }
}
// TODO: Create an array of questions for user input
function createQuestions(){
    questions.push(new Question("title","input","What is the name of your project?"));
    questions.push(new Question("description","input","How does your project works? Your motivation behind it? The problem its intended to solve?"));
    questions.push(new Question("installation","input","How do I install your program?"));
    questions.push(new Question("usage","input","How do I use your program?"));
    questions.push(new Question("license","list","What license will your project be under? Refer to <https://choosealicense.com/>. Choose one:", licenseOptions));
    questions.push(new Question("contribution","input","How do I contribute to your repository?"));
    questions.push(new Question("testing","input","How do I test your program?"));
    questions.push(new Question("username","input","Please provide your Github username: "));
    questions.push(new Question("email","input","Please provide your email address: "));
    //console.log(`Number of questions pushed: ${questions.length}`)
} // Wanted to keep 

//#endregion

//#region Output // // TODO:(0)
// // TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,(err) =>
        err
            ? console.error(err)
            : console.log(`Document ${fileName} saved.`)
    );
}
//#endregion


//#region Main // // TODO:(0)
// // TODO: Create a function to initialize app
function init() {
    createQuestions();
    sendPrompts(questions);
}

function sendPrompts(questionArray){
    inquirer
        .prompt(questionArray)
        .then((response) => {
            let myNewVar = markdown(response);
            console.log(myNewVar);
            writeToFile(outputFilePath,myNewVar);
            }
        );
}
//#endregion

// Function call to initialize app
init();

