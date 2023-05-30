// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenseChosen) {
  if (licenseChosen){
  licenseChosen = encodeURI(licenseChosen)
  return `![${licenseChosen}](https://img.shields.io/badge/license-${licenseChosen}-green)\n\n`}
  else{ return '';}
}// Keeping conditional for error case; generally should work with list options...

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenseChosen) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenseChosen) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(dataObj) {
  const { title, description, installation, usage, license, contribution, testing, username, email } = dataObj;
  
  let mainString = "";

  mainString = mainString
    .concat(renderTitle(title))
    .concat(renderLicenseBadge(license))
    .concat(renderSectionHeader("Description"))
    .concat(renderSection(description))
    //TODO: Render ToC
    .concat(renderSectionHeader("Installation"))
    .concat(renderSection(installation))
    .concat(renderSectionHeader("Usage"))
    .concat(renderSection(usage))
    .concat(renderSectionHeader("License"))
    .concat(renderSection(license))
    .concat(renderSectionHeader("How to Contribute"))
    .concat(renderSection(contribution))
    .concat(renderSectionHeader("Tests"))
    .concat(renderSection(testing))
    .concat(renderSectionHeader("Questions"))
  ;
  
  return mainString;
}
// Found pasting an entire .md doc as a string with templ literals unappealing...
// so I decided chaining was a more legible format with negligible impact to performance
// Also, not expecting to have a whole novel to be entered into cmd-line..

//need a handler for empty strings
//maybe 

function renderTitle(title){
  return `# ${title}\n\n`;
} // you can call function from with in back tick strings
function renderSectionHeader(header){
  return `## ${header}\n\n`;
}
function renderSection(content){
  return `${content}\n\n`;
}

// TODO: add string check for falsy
// TODO: add username to 'Questsions' portion
// TODO: add email to 'Questsions' portion

function renderToC(){
  let table = renderSectionHeader("Table of Contents");
  return table.concat();
}













module.exports = generateMarkdown;
