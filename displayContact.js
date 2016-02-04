function displayCard(contact){
    var Table = require('cli-table');
    var table = new Table();
    table.push(['First Name', contact['firstName']]);
    table.push(['Last Name', contact['lastName']]);
    if(contact['birthday']){
        table.push(['Birthday', contact['birthday']]);
    }
    
    if(contact['addresses'].length>0){
        var homeAddressString = '';
        var workAddressString = '';
        var otherAddressString = '';
        contact['addresses'].forEach(function(type){
            switch(type){
                case 'home':
                    if(contact['homeAddressLine2'].length>0){
                        homeAddressString = 'home:\n'+contact['homeAddressLine1']+', '+contact['homeAddressLine2']+'\n'+contact['homeCity']+', '+contact['homeProvince']+' '+contact['homePostalCode']+'\n'+contact['homeCountry']+'\n';
                    }
                    else{
                        homeAddressString = 'home:\n'+contact['homeAddressLine1']+'\n'+contact['homeCity']+', '+contact['homeProvince']+' '+contact['homePostalCode']+'\n'+contact['homeCountry']+'\n';
                    }
                    break;
                    
                case 'work':
                    if(contact['workAddressLine2'].length>0){
                        workAddressString = 'work:\n'+contact['workAddressLine1']+', '+contact['workAddressLine2']+'\n'+contact['workCity']+', '+contact['workProvince']+' '+contact['workPostalCode']+'\n'+contact['workCountry']+'\n';
                    }
                    else{
                        workAddressString = 'work:\n'+contact['workAddressLine1']+'\n'+contact['workCity']+', '+contact['workProvince']+' '+contact['workPostalCode']+'\n'+contact['workCountry']+'\n';
                    }
                    break;
                    
                case 'other':
                    if(contact['otherAddressLine2'].length>0){
                        otherAddressString = 'other:\n'+contact['otherAddressLine1']+', '+contact['otherAddressLine2']+'\n'+contact['otherCity']+', '+contact['otherProvince']+' '+contact['otherPostalCode']+'\n'+contact['otherCountry']+'\n';
                    }
                    else{
                        otherAddressString = 'other:\n'+contact['otherAddressLine1']+'\n'+contact['otherCity']+', '+contact['otherProvince']+' '+contact['otherPostalCode']+'\n'+contact['otherCountry']+'\n';
                    }
                    break;
            }
        });
        table.push(['Address',homeAddressString+workAddressString+otherAddressString]);
    }
    if(contact['phoneNumbers'].length>0){
        var homePhone = '';
        var workPhone = '';
        var cellPhone = '';
        var otherPhone = '';
        contact['phoneNumbers'].forEach(function(type){
            switch(type){
                case 'home':
                    homePhone = 'home: '+ contact['homePhone']+'\n';
                    break;
                case 'work':
                    workPhone = 'work: '+ contact['workPhone']+'\n';
                    break;
                case 'cell':
                    cellPhone = 'cell: '+ contact['cellPhone']+'\n';
                    break;
                case 'other':
                    otherPhone = 'other: '+ contact['otherPhone']+'\n';
                    break;
            }
        });
        table.push(['Phone',homePhone+workPhone+cellPhone+otherPhone]);
    }
    if(contact['emailAddresses'].length>0){
        var personalEmail = '';
        var workEmail = '';
        var otherEmail = '';
        contact['emailAddresses'].forEach(function(type){
            switch(type){
                case 'personal':
                    personalEmail = 'personal: '+ contact['personalEmail']+'\n';
                    break;
                case 'work':
                    workEmail = 'work: '+ contact['workEmail']+'\n';
                    break;
                case 'other':
                    otherEmail = 'other: '+ contact['otherEmail']+'\n';
                    break;
            }
        });
        table.push(['Email',personalEmail+workEmail+otherEmail]);
    }
    console.log(table.toString());
}

module.exports = {
    displayCard: displayCard
};