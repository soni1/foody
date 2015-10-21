
Meteor.startup(function(){
    process.env.MAIL_URL = 'smtp://USERNAME:PASSWORD@HOST:PORT/'
});