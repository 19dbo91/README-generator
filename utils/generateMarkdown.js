// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(dataObj) {
  const { title, description, installation, usage, license, contribution, testing } = dataObj;
  
  let mainString = "";

  mainString = mainString
    .concat(renderTitle(title))
    //TODO: Render badges here if any selected
    .concat(renderSectionHeader("Description"))
    .concat(renderSection(description))
    //TODO: Render ToC
    ;
  
  

  return mainString;
}



function renderTitle(title){
  return `# ${title}\n\n`;
} // you can call function from with in back tick strings
function renderSectionHeader(header){
  return `## ${header}\n\n`
}
function renderSection(content){
  return `${content}\n\n`
}



function renderToC(){
  let table = renderSectionHeader("Table of Contents");
  return table.concat();
}













module.exports = generateMarkdown;
