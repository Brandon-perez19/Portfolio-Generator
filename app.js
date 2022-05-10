// // process is the 'window' object in Node. Argv is a property of process
// //it's an array that contains what was typed into the command line
// var commandLineArgs = process.argv;
// console.log(commandLineArgs);

//2 ios the index where the contents we type start. That's where we slice to start a new array
const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

//arrow function, eliminate parathesis for one `parameter
const printProfileData = profileDataArr => {

    // //this...
    // for (let i = 0; i < profileDataArr.length; i++){
    //     console.log(profileDataArr[i]);
    // }
    
    console.log('=====================');

    //Is the same as this...
    profileDataArr.forEach(profileItem => {console.log(profileItem)});
    
};

printProfileData(profileDataArgs);