function renderTitle(title){
  return `# ${title}\n\n`;
}
function renderSectionHeader(header){
  return `## ${header}\n\n`;
}
function renderSection(header,content){
  if(!content){return "";}
  return `${renderSectionHeader(header)}${content}\n\n`;
}

function renderLink(alt,link){
  return `[${alt}](${link})`;
}

function renderToC(){
  let table = renderSectionHeader("Table of Contents");
  table = table
    .concat(`- ${renderLink("Description","#description")}\n`)
    .concat(`- ${renderLink("Table of Contents","#table-of-contents")}\n`)
    .concat(`- ${renderLink("Installation","#installation")}\n`)
    .concat(`- ${renderLink("Usage","#usage")}\n`)
    .concat(`- ${renderLink("License","#license")}\n`)
  ;
  //TODO checknull sxns
  return `${table}\n`;
}
// At a minimum Description, Installation, Usage, License are enforced
// See https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)
// Omits nulled sections

// // TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenseChosen) {
  if (!licenseChosen){return "";}
  
  encodedlicense = encodeURI(licenseChosen);
  return `!${renderLink(licenseChosen,`https://img.shields.io/badge/license-${encodedlicense}-green`)}\n\n`;
}// Keeping conditional for error case; generally should work with list options...

// // TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenseChosen) {
  if (!licenseChosen){return "";}
  
  let URL = "https://choosealicense.com/licenses/"
  switch (licenseChosen){
    case "GNU AGPLv3": URL += "agpl-3.0/"; break;
    case "GNU GPLv3": URL += "gpl-3.0/"; break;
    case "GNU LPLv3": URL += "lpl-3.0/"; break;
    case "Mozilla Public License": URL += "mpl-2.0/"; break;
    case "Apache License 2.0": URL += "mpl-2.0/"; break;
    case "MIT License": URL += "mit/"; break;
    case "Boost Software License 1.0": URL += "bsl-1.0/"; break;
    case "The Unlicense": URL += "unlicense/"; break;
    default: URL += "no-permission/"; break;
    
  }//TODO: Could be handled a ton better maybe
  return `[${licenseChosen}](${URL})\n\n`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenseChosen) {
  return `${renderSectionHeader("License")}${renderLicenseLink(licenseChosen)}`
}


function renderQuestionSection(contactInfo, username, email){
  if (!(contactInfo && username && email)){return "";}
  
  let sectionString = `${renderSectionHeader("Questions")}${contactInfo}\n`;
  //check username link
  // add mail to
  // TODO: add email check/parse
  return sectionString;
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(dataObj) {
  const { title, description, installation, usage, license, contribution, testing, contact, username, email } = dataObj;
  
  let mainString = "";

  mainString = mainString
    .concat(renderTitle(title))
    .concat(renderLicenseBadge(license))
    .concat(renderSection("Description",description))
    .concat(renderToC())
    .concat(renderSection("Installation",installation))
    .concat(renderSection("Usage",usage))
    .concat(renderLicenseSection(license))
    .concat(renderSection("How to Contribute", contribution))
    .concat(renderSection("Tests", testing))
    .concat(renderQuestionSection(contact, username, email))
  ;
  
  return mainString;
}
// Found pasting an entire .md doc as a string with templ literals unappealing...
// so I decided chaining was a more legible format with negligible impact to performance
// Also, not expecting to have a whole novel to be entered into cmd-line..

module.exports = generateMarkdown;
