function parseAndDisplayName(name){
    let space = name.indexOf(' ');
    let firstName = name.substring(0, space);
    let lastName = name.substring(space + 1);
    console.log(firstName, lastName, name);
}
parseAndDisplayName('Bruce Wayne');

//console.log('the script tag works');
//let fullName = "Niya Ridout";
//console.log(`the variable fullName is: ${fullName}`);
//let space = fullName.indexOf(' ');
//console.log(space);  //4
//let firstName = fullName.substring(0, space);
//console.log(firstName);
//let lastName = fullName.substring(space + 1);
//console.log(lastName);