Template.add_recipes.helpers({
    currentUserId: function () {
        return Meteor.userId();
    },
    currentUserName: function () {
        return Meteor.user().username;
    }
});

AutoForm.addHooks(['insertRecipes'],{
    onSuccess: function(formType, result) {
        FlashMessages.sendSuccess('Recipe added successfully',{ autoHide: true, hideDelay: 2000 });
        Router.go('/recipes');

    }
});

