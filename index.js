//Creating the contacts database that will hold all contact objects
var contactsDatabase = [];
//Will be used to edit and delete current entry and keep track of the index of the contactsDatabase array
var currentIndex = 0;

//This runs the main menu
function mainMenu(){
    var inquirer = require("inquirer");
    var newAdd = require('./newAddress.js');
    var searchAdd = require('./searchAddress.js');
    
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
}

function editMenu(){
    var inquirer = require("inquirer");
    var newAdd = require('./newAddress.js');
    var newDelete = require('./deleteAddress.js');
    
    var editMenu = {
        type: 'list',
        name: 'editMenuKey',
        message: 'Choose an entry:',
        choices: ['Edit Address Book Entry', new inquirer.Separator(), 'Delete Address Book Entry', new inquirer.Separator(), 'Add Another Address Book Entry', new inquirer.Separator(), 'Go Back to Main Menu'],
        default: 'Edit Address Book Entry'
    };
    
    inquirer.prompt([editMenu], function( answers ) {
    	switch(answers.editMenuKey){
            case 'Edit Address Book Entry':
                break;
            case 'Delete Address Book Entry':
                newDelete.deleteAddress();
                break;
            case 'Add Another Address Book Entry':
                newAdd.newAddress();
                break;
            case 'Go Back to Main Menu':
                mainMenu();
                break;
            default:
                console.log('error');
    	}
    });
}

mainMenu();

module.exports = {
    mainMenu: mainMenu,
    editMenu: editMenu,
    contactsDatabase: contactsDatabase,
    currentIndex: currentIndex
};