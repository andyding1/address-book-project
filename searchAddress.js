function searchAddress(){
    var newMain = require('./index.js');
    var newDisplay = require('./displayContact.js');
    var inquirer = require("inquirer");
    
    var searchContact = 
        {
            name: 'searchValue',
            message: 'Search [put space between each word][can search for "First Name", "Last Name", or "Email Address"]:',
        };
    
    //Prompts the search request
    inquirer.prompt(searchContact, function(answer){
        var searchArray = answer.searchValue.split(' ');
        var indexArray = [];
        
        //Search for each contact and search word and output an array with the index
        newMain.contactsDatabase.forEach(function(contact, index){
            searchArray.forEach(function(word){
                if(contact.firstName.toLowerCase() === word.toLowerCase()){
                    indexArray.push(index);
                }
                if(contact.lastName.toLowerCase() === word.toLowerCase()){
                    indexArray.push(index);
                }
                if(contact.emailAddresses.length>0){
                    if(contact.personalEmail.toLowerCase() === word.toLowerCase()){
                        indexArray.push(index);
                    }
                    if(contact.personalEmail.toLowerCase() === word.toLowerCase()){
                        indexArray.push(index);
                    }
                    if(contact.personalEmail.toLowerCase() === word.toLowerCase()){
                        indexArray.push(index);
                    }
                }
            });
        });
        
        //get the unique values of the indexArray from above
        var uniqueArray = indexArray.filter(function(number, index, ar){
            return ar.indexOf(number) === index; 
        });
        
        //display the contact card using the unique index values to display the specific contact
        uniqueArray.forEach(function(contactNumber){
            newDisplay.displayCard(newMain.contactsDatabase[contactNumber]);
        });
        
        reSearchMenu();
        
    });
}

function reSearchMenu(){
    var inquirer = require("inquirer");
    var newIndex = require('./index.js');
    var searchMenu = {
        type: 'list',
        name: 'searchMenuKey',
        message: 'Choose an entry:',
        choices: ['Search Again', new inquirer.Separator(), 'Go Back to Main Menu'],
        default: 'Search Again'
    };
    
    inquirer.prompt([searchMenu], function( answers ) {
    	switch(answers.searchMenuKey){
            case 'Search Again':
                searchAddress();
                break;
            case 'Go Back to Main Menu':
                newIndex.mainMenu();
                break;
            default:
                console.log('error');
    	}
    });
}

module.exports = {
    searchAddress: searchAddress
};