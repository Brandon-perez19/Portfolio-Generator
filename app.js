// // fs = filesystem and is included in node. Use Require to access it for your projects
// const fs = require('fs');
const inquirer = require('inquirer');
// const generatePage = require('./src/page-template.js');
// const [name, github] = profileDataArgs;

const promptUser = () => {
    return inquirer.prompt([
        {
            type:'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter yout Github Username'
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:'
        },
    ]);      
};

const promptProject = portfolioData => {

    //if there's no projects array property, create one
    if (!portfolioData.projects){
        portfolioData.projects=[];
    }
    console.log(`
        ==================
        Add a New Project
        ==================
    `);
    return inquirer.prompt([
        {
            type:'input',
            name: 'name',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)'
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript','HTML','CSS','ES6','jQuery', 'Bootstrap', 'Node']
        },
        {
            type:'input',
            name: 'link',
            message: 'Enter the Github link to your project. (Required)'
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
        },
    ])
    .then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject){
            return promptProject(portfolioData);
        } else {
            return portfolioData;
        }
    });
};

promptUser()
.then(promptProject)
.then(portfolioData => console.log(portfolioData));

// fs.writeFile('./index.html', generatePage(name, github), err => {
//     if (err) throw new Error(err);

//     console.log('Portfolo complete! Check out index.html to see the output!');

// });
