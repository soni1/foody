Template.home.events({
    'click .shareRecipe':function(){
        if(Meteor.userId()){
            Router.go('/add_recipes')
        }
        else
        {
            Router.go('/sign-in')
        }

    }
});