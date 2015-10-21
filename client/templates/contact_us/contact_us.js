Template.contact_us.events({
'submit .contact':function(event){
    fname = event.target.fname.value;
    lname = event.target.lname.value;
    email = event.target.email.value;
    phone = event.target.phone.value;
    message = event.target.message.value;
    if( isNotEmpty(fname)&&
        isNotEmpty(lname)&&
        isNotEmpty(phone)&&
        isNotEmpty(message)&&
        isNotEmpty(email)&&
        isEmail(email)){
        var dataText = "Message from: " + fname + " " + lname + "\rEmail: " + email + "\rPhone: " + phone + "\rContent:" + message;
        Meteor.call('sendEmail',dataText);
        FlashMessages.sendSuccess('Please fill all fields',{ autoHide: true, hideDelay: 3000 });

    } else{
        FlashMessages.sendError('An error occurred',{ autoHide: true, hideDelay: 3000 });

    }
    event.preventDefault();

}
});