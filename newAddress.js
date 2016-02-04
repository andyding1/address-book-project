function newAddress(){
    var newIndex = require('./index.js');
    var newDisplay = require('./displayContact.js');
    var inquirer = require("inquirer");
    
    //Used to determine which part of contact object to use
    function exist(field, type){
        return function(answers){
            if(answers[field].indexOf(type) > - 1){
                return true;
            }
        };
    }
    
    //Will return an error if value is not input (mandatory fields need this validation)
    function validateValue(value){
        // Declare function as asynchronous, and save the done callback 
        var done = this.async();
     
        // Do async stuff 
        setTimeout(function() {
            if (value) {
                done(true);
        
            }
            else{
                done("ENTER A VALUE!!!");
                return;
            }
        }, 200);
    }
    
    //Question object for inquirer
    var addContact = [
        {
            name: 'firstName',
            message: 'First Name:',
            validate: validateValue
        }, 
        {
            name: 'lastName',
            message: 'Last Name:',
            validate: validateValue
        }, 
        {
            name: 'birthday',
            message: 'Date of Birth (Optional):',
        }, 
        {
            name: 'addresses',
            message: 'Choose the type(s) of address(es) you would like to add',
            type: 'checkbox',
            choices: [
                {name: 'home'},
                {name: 'work'},
                {name: 'other'}
                ]
        }, 
        {
            name: 'phoneNumbers',
            message: 'Choose the type(s) of phone number(es) you would like to add',
            type: 'checkbox',
            choices: [
                {name: 'home'},
                {name: 'work'},
                {name: 'cell'},
                {name: 'other'}
                ]
        }, 
        {
            name: 'emailAddresses',
            message: 'Choose the type(s) of email(s) you would like to add',
            type: 'checkbox',
            choices: [
                {name: 'personal'},
                {name: 'work'},
                {name: 'other'}
                ]
        }, 
        {
            name: 'homeAddressLine1',
            message: "Home address Line 1:",
            when: exist('addresses', 'home'),
            validate: validateValue
        }, 
        {
            name: 'homeAddressLine2',
            message: 'Home address Line 2 (Optional):',
            when: exist('addresses', 'home') 
        }, 
        {
            name: 'homeCity',
            message: 'Home City:',
            when: exist('addresses', 'home'),
            validate: validateValue
        }, 
        {
            name: 'homeProvince',
            message: 'Home Province:',
            when: exist('addresses', 'home'),
            validate: validateValue
        }, 
        {
            name: 'homePostalCode',
            message: 'Home Postal Code:',
            when: exist('addresses', 'home'),
            validate: validateValue
        }, 
        {
            name: 'homeCountry',
            message: 'Home Country:',
            when: exist('addresses', 'home'),
            validate: validateValue
        }, 
        {
            name: 'workAddressLine1',
            message: "Work address Line 1:",
            when: exist('addresses', 'work'),
            validate: validateValue
        }, 
        {
            name: 'workAddressLine2',
            message: 'Work address Line 2 (Optional):',
            when: exist('addresses', 'work') 
        }, 
        {
            name: 'workCity',
            message: 'Work City:',
            when: exist('addresses', 'work'),
            validate: validateValue
        }, 
        {
            name: 'workProvince',
            message: 'Work Province:',
            when: exist('addresses', 'work'),
            validate: validateValue
        }, 
        {
            name: 'workPostalCode',
            message: 'Work Postal Code:',
            when: exist('addresses', 'work'),
            validate: validateValue
        }, 
        {
            name: 'workCountry',
            message: 'Work Country:',
            when: exist('addresses', 'work'),
            validate: validateValue
        },  
        {
            name: 'otherAddressLine1',
            message: "Other address Line 1:",
            when: exist('addresses', 'other'),
            validate: validateValue
        }, 
        {
            name: 'otherAddressLine2',
            message: 'Other address Line 2 (Optional):',
            when: exist('addresses', 'other') 
        }, 
        {
            name: 'otherCity',
            message: 'Other City:',
            when: exist('addresses', 'other'),
            validate: validateValue
        }, 
        {
            name: 'otherProvince',
            message: 'Other Province:',
            when: exist('addresses', 'other'),
            validate: validateValue
        }, 
        {
            name: 'otherPostalCode',
            message: 'Other Postal Code:',
            when: exist('addresses', 'other'),
            validate: validateValue
        }, 
        {
            name: 'otherCountry',
            message: 'Other Country:',
            when: exist('addresses', 'other'),
            validate: validateValue
        },
        {
            name: 'homePhone',
            message: 'Home Phone Number:',
            when: exist('phoneNumbers', 'home'),
            validate: validateValue
        }, 
        {
            name: 'workPhone',
            message: 'Work Phone Number:',
            when: exist('phoneNumbers', 'work'),
            validate: validateValue
        }, 
        {
            name: 'cellPhone',
            message: 'Cell Phone Number:',
            when: exist('phoneNumbers', 'cell'),
            validate: validateValue
        }, 
        {
            name: 'otherPhone',
            message: 'Other Phone Number:',
            when: exist('phoneNumbers', 'other'),
            validate: validateValue
        },
        {
            name: 'personalEmail',
            message: 'Personal Email Address:',
            when: exist('emailAddresses','personal'),
            validate: validateValue
        }, 
        {
            name: 'workEmail',
            message: 'Work Email Address:',
            when: exist('emailAddresses', 'work'),
            validate: validateValue
        }, 
        {
            name: 'otherEmail',
            message: 'Other Email Address:',
            when: exist('emailAddresses', 'other'),
            validate: validateValue
        } 
        ];

        //Prompt for the contact information
        inquirer.prompt(addContact, function(answer){
            newIndex.currentIndex++;
            newIndex.contactsDatabase.push(answer);
            // console.log(newIndex.currentIndex);
            // console.log(newIndex.contactsDatabase);
            newDisplay.displayCard(answer);
            newIndex.editMenu();
        });
}

module.exports = {
    newAddress: newAddress
};