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
 * @ prompted for info about my app repo
 *  >   a HQ, prof README.md is generated w/:
 *    > myProject.Title
 *    > sxns {
 *          Descriptions
 *          Table of Contents
 *          Installation
 *          Usage
 *          License
 *          Contributing
 *          Tests
 *          Questions
 *      }
 * 
 * @ enter my project title
 *  > this is displayed as the title of the README
 * 
 * @ enter sxn info
 *  > INFO added to the appropriate sxns
 * 
 * @ choose lic for app fr: a LIST ( opts )
 *  > BADGE for that lic added to TOP of README
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


//#region Requirements
const fs = require('fs');
const inq = require('inquirer');
//#endregion


//#region Starter Code
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

//#endregion