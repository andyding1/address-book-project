function editAddress(){
    var newIndex = require('./index.js');
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
                done("ENTER A VALUE");
                return;
            }
        }, 200);
    }
    
    //setting the default value if it has been input already
    function defaultValue(value){
        if(value){
            return value;
        }
    }
    
    //Question object for inquirer
    var editContact = [
        {
            name: 'firstName',
            message: 'First Name: ',
            validate: validateValue,
            default: defaultValue(newIndex.contactsDatabase[newIndex.currentIndex-1].firstName)
        }, 
        {
            name: 'lastName',
            message: 'Last Name:',
            validate: validateValue,
            default: defaultValue(newIndex.contactsDatabase[newIndex.currentIndex-1].lastName)
        }, 
        {
            name: 'birthday',
            message: 'Date of Birth (Optional):',
            default: defaultValue(newIndex.contactsDatabase[newIndex.currentIndex-1].birthday)
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
            validate: validateValue,
            default: defaultValue(newIndex.contactsDatabase[newIndex.currentIndex-1].homeAddressLine1)
        }, 
        {
            name: 'homeAddressLine2',
            message: 'Home address Line 2 (Optional):',
            when: exist('addresses', 'home'),
            default: defaultValue(newIndex.contactsDatabase[newIndex.currentIndex-1].homeAddressLine2)
        }, 
        {
            name: 'homeCity',
            message: 'Home City:',
            when: exist('addresses', 'home'),
            validate: validateValue,
            default: defaultValue(newIndex.contactsDatabase[newIndex.currentIndex-1].homeCity)
        }, 
        {
            name: 'homeProvince',
            message: 'Home Province:',
            when: exist('addresses', 'home'),
            validate: validateValue,
            default: defaultValue(newIndex.contactsDatabase[newIndex.currentIndex-1].homeProvince)
        }, 
        {
            name: 'homePostalCode',
            message: 'Home Postal Code:',
            when: exist('addresses', 'home'),
            validate: validateValue,
            default: defaultValue(newIndex.contactsDatabase[newIndex.currentIndex-1].homePostalCode)
        }, 
        {
            name: 'homeCountry',
            message: 'Home Country:',
            when: exist('addresses', 'home'),
            validate: validateValue,
            default: defaultValue(newIndex.contactsDatabase[newIndex.currentIndex-1].homeCountry)
        }, 
        {
            name: 'workAddressLine1',
            message: "Work address Line 1:",
            when: exist('addresses', 'work'),
            validate: validateValue,
            default: defaultValue(newIndex.contactsDatabase[newIndex.currentIndex-1].workAddressLine1)
        }, 
        {
            name: 'workAddressLine2',
            message: 'Work address Line 2 (Optional):',
            when: exist('addresses', 'work'),
            default: defaultValue(newIndex.contactsDatabase[newIndex.currentIndex-1].workAddressLine2)
        }, 
        {
            name: 'workCity',
            message: 'Work City:',
            when: exist('addresses', 'work'),
            validate: validateValue,
            default: defaultValue(newIndex.contactsDatabase[newIndex.currentIndex-1].workCity)
        }, 
        {
            name: 'workProvince',
            message: 'Work Province:',
            when: exist('addresses', 'work'),
            validate: validateValue,
            default: defaultValue(newIndex.contactsDatabase[newIndex.currentIndex-1].workProvince)
        }, 
        {
            name: 'workPostalCode',
            message: 'Work Postal Code:',
            when: exist('addresses', 'work'),
            validate: validateValue,
            default: defaultValue(newIndex.contactsDatabase[newIndex.currentIndex-1].workPostalCode)
        }, 
        {
            name: 'workCountry',
            message: 'Work Country:',
            when: exist('addresses', 'work'),
            validate: validateValue,
            default: defaultValue(newIndex.contactsDatabase[newIndex.currentIndex-1].workCountry)
        },  
        {
            name: 'otherAddressLine1',
            message: "Other address Line 1:",
            when: exist('addresses', 'other'),
            validate: validateValue,
            default: defaultValue(newIndex.contactsDatabase[newIndex.currentIndex-1].otherAddressLine1)
        }, 
        {
            name: 'otherAddressLine2',
            message: 'Other address Line 2 (Optional):',
            when: exist('addresses', 'other'),
            default: defaultValue(newIndex.contactsDatabase[newIndex.currentIndex-1].otherAddressLine2)
        }, 
        {
            name: 'otherCity',
            message: 'Other City:',
            when: exist('addresses', 'other'),
            validate: validateValue,
            default: defaultValue(newIndex.contactsDatabase[newIndex.currentIndex-1].otherCity)
        }, 
        {
            name: 'otherProvince',
            message: 'Other Province:',
            when: exist('addresses', 'other'),
            validate: validateValue,
            default: defaultValue(newIndex.contactsDatabase[newIndex.currentIndex-1].otherProvince)
        }, 
        {
            name: 'otherPostalCode',
            message: 'Other Postal Code:',
            when: exist('addresses', 'other'),
            validate: validateValue,
            default: defaultValue(newIndex.contactsDatabase[newIndex.currentIndex-1].otherPostalCode)
        }, 
        {
            name: 'otherCountry',
            message: 'Other Country:',
            when: exist('addresses', 'other'),
            validate: validateValue,
            default: defaultValue(newIndex.contactsDatabase[newIndex.currentIndex-1].otherCountry)
        },  
        {
            name: 'personalEmail',
            message: 'Personal Email Address:',
            when: exist('emailAddresses','personal'),
            validate: validateValue,
            default: defaultValue(newIndex.contactsDatabase[newIndex.currentIndex-1].personalEmail)
        }, 
        {
            name: 'workEmail',
            message: 'Work Email Address:',
            when: exist('emailAddresses', 'work'),
            validate: validateValue,
            default: defaultValue(newIndex.contactsDatabase[newIndex.currentIndex-1].workEmail)
        }, 
        {
            name: 'otherEmail',
            message: 'Other Email Address:',
            when: exist('emailAddresses', 'other'),
            validate: validateValue,
            default: defaultValue(newIndex.contactsDatabase[newIndex.currentIndex-1].otherEmail)
        }, 
        {
            name: 'personalPhone',
            message: 'Personal Phone Number:',
            when: exist('phoneNumbers', 'personal'),
            validate: validateValue,
            default: defaultValue(newIndex.contactsDatabase[newIndex.currentIndex-1].personalPhone)
        }, 
        {
            name: 'workPhone',
            message: 'Work Phone Number:',
            when: exist('phoneNumbers', 'work'),
            validate: validateValue,
            default: defaultValue(newIndex.contactsDatabase[newIndex.currentIndex-1].workPhone)
        }, 
        {
            name: 'cellPhone',
            message: 'Cell Phone Number:',
            when: exist('phoneNumbers', 'cell'),
            validate: validateValue,
            default: defaultValue(newIndex.contactsDatabase[newIndex.currentIndex-1].cellPhone)
        }, 
        {
            name: 'otherPhone',
            message: 'Other Phone Number:',
            when: exist('phoneNumbers', 'other'),
            validate: validateValue,
            default: defaultValue(newIndex.contactsDatabase[newIndex.currentIndex-1].otherPhone)
        }
        ];

        //Prompt for the contact information
        inquirer.prompt(editContact, function(answer){
            newIndex.contactsDatabase[newIndex.currentIndex-1] = answer;
            console.log(newIndex.contactsDatabase);
            newIndex.editMenu();
        });
}

module.exports = {
    editAddress: editAddress
};