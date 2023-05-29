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
  ;
  
  return mainString;
}
// Found pasting an entire .md doc as a string with templ literals nappealing...
// so I decided chaining was a more legible format with minimal performance impact
// Also, not expecting to have a whole novel to be entered into cmd-line..



function renderTitle(title){
  return `# ${title}\n\n`;
} // you can call function from with in back tick strings
function renderSectionHeader(header){
  console.log(`writing ## ${header}\n\n`);
  return `## ${header}\n\n`;
}
function renderSection(content){
  console.log(`writing ## ${content}\n\n`);
  return `${content}\n\n`;
}



function renderToC(){
  let table = renderSectionHeader("Table of Contents");
  return table.concat();
}













module.exports = generateMarkdown;
