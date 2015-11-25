Template.home.events({
    'click .shareRecipe':function(){
        if(Meteor.userId()){
            Router.go('/add_recipes')
        }
        else
        FlashMessages.sendError('Please first register to add recipe and review',{ autoHide: true, hideDelay: 3000 });

    }
});