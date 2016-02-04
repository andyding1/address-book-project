function deleteAddress(){
    var newIndex = require('./index.js');
    var inquirer = require("inquirer");
    var deleteMenu = {
        type: 'list',
        name: 'deleteMenuKey',
        message: 'Are you sure?',
        choices: ['Yes', new inquirer.Separator(), 'No'],
        default: 'Yes'
    };
    inquirer.prompt([deleteMenu], function( answers ) {
    	switch(answers.deleteMenuKey){
            case 'Yes':
                newIndex.currentIndex--;
                newIndex.contactsDatabase.splice(newIndex.currentIndex,1);
                newIndex.mainMenu();
                break;
            case 'No':
                newIndex.editMenu();
                break;
            default:
                console.log('error');
    	}
    });
}

module.exports = {
    deleteAddress: deleteAddress
};