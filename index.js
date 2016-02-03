var inquirer = require("inquirer");
var newAdd = require('./Address/newAddress.js');
var searchAdd = require('./Address/searchAddress.js')

var mainMenu = {
    type: 'list',
    name: 'mainMenuKey',
    message: 'Choose an entry:',
    choices: ['New Address Book Entry', new inquirer.Separator(), 'Search Address Book', new inquirer.Separator(), 'Exit the Program'],
    default: 'New Address Book Entry'
};

inquirer.prompt([mainMenu], function( answers ) {
	switch(answers.mainMenuKey){
        case 'New Address Book Entry':
            newAdd.newAddress();
            break;
        case 'Search Address Book':
            searchAdd.searchAddress();
            break;
        case 'Exit the Program':
            console.log('Goodbye');
            process.exit();
            break;
        default:
            console.log('error');
	}
});