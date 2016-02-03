function newAddress(){
    var newMain = require('./index.js');
    var inquirer = require("inquirer");
    
    //Used to determine which part of contact object to use
    function exist(field, type){
        return function(answers){
            if(answers[field].indexOf(type) > - 1){
                return true;
            }
        };
    }
    
    //Question object for inquirer
    var addContact = [
        {
            name: 'firstName',
            message: 'First Name:'
        }, 
        {
            name: 'lastName',
            message: 'Last Name:'
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
            when: exist('addresses', 'home') 
        }, 
        {
            name: 'homeAddressLine2',
            message: 'Home address Line 2:',
            when: exist('addresses', 'home') 
        }, 
        {
            name: 'homeCity',
            message: 'Home City:',
            when: exist('addresses', 'home') 
        }, 
        {
            name: 'homeProvince',
            message: 'Home Province:',
            when: exist('addresses', 'home') 
        }, 
        {
            name: 'homePostalCode',
            message: 'Home Postal Code:',
            when: exist('addresses', 'home') 
        }, 
        {
            name: 'homeCountry',
            message: 'Home Country:',
            when: exist('addresses', 'home') 
        }, 
        {
            name: 'workAddressLine1',
            message: "Work address Line 1:",
            when: exist('addresses', 'work') 
        }, 
        {
            name: 'workAddressLine2',
            message: 'Work address Line 2:',
            when: exist('addresses', 'work') 
        }, 
        {
            name: 'workCity',
            message: 'Work City:',
            when: exist('addresses', 'work') 
        }, 
        {
            name: 'workProvince',
            message: 'Work Province:',
            when: exist('addresses', 'work') 
        }, 
        {
            name: 'workPostalCode',
            message: 'Work Postal Code:',
            when: exist('addresses', 'work') 
        }, 
        {
            name: 'workCountry',
            message: 'Work Country:',
            when: exist('addresses', 'work') 
        },  
        {
            name: 'otherAddressLine1',
            message: "Other address Line 1:",
            when: exist('addresses', 'other') 
        }, 
        {
            name: 'otherAddressLine2',
            message: 'Other address Line 2:',
            when: exist('addresses', 'other') 
        }, 
        {
            name: 'otherCity',
            message: 'Other City:',
            when: exist('addresses', 'other') 
        }, 
        {
            name: 'otherProvince',
            message: 'Other Province:',
            when: exist('addresses', 'other') 
        }, 
        {
            name: 'otherPostalCode',
            message: 'Other Postal Code:',
            when: exist('addresses', 'other') 
        }, 
        {
            name: 'otherCountry',
            message: 'Other Country:',
            when: exist('addresses', 'other') 
        },  
        {
            name: 'personalEmail',
            message: 'Personal Email Address:',
            when: exist('emailAddresses','personal')
        }, 
        {
            name: 'workEmail',
            message: 'Work Email Address:',
            when: exist('emailAddresses', 'work')
        }, 
        {
            name: 'otherEmail',
            message: 'Other Email Address:',
            when: exist('emailAddresses', 'other')
        }, 
        {
            name: 'personalPhone',
            message: 'Personal Phone Number:',
            when: exist('phoneNumbers', 'personal')
        }, 
        {
            name: 'workPhone',
            message: 'Work Phone Number:',
            when: exist('phoneNumbers', 'work')
        }, 
        {
            name: 'cellPhone',
            message: 'Cell Phone Number:',
            when: exist('phoneNumbers', 'cell')
        }, 
        {
            name: 'otherPhone',
            message: 'Other Phone Number:',
            when: exist('phoneNumbers', 'other')
        }
        ];

        //Prompt for the contact information
        inquirer.prompt(addContact, function(answer){
            newMain.contactsDatabase.push(answer);
            console.log(newMain.contactsDatabase);
            newMain.main();
        });
}

module.exports = {
    newAddress: newAddress
};