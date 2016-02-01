Template.recipes.helpers({
    'showRecipes': function () {
        return Recipes.find();
    },
    'images': function () {
        return RecipesImages.findOne({_id: this.image});
    }
});

Template.recipes.events({
    "click [data-action='addLikes']": function (event) {
        event.preventDefault();
        var recipe = Recipes.findOne({_id: this._id});
        Meteor.call('upvote',recipe)
    }
});
