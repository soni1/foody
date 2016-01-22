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
        if (recipe) {
            if (_.contains(recipe.voters, Meteor.userId())) {
                FlashMessages.sendError("You already liked this recipe", {hideDelay: 1000});
                return false;
            }
            Recipes.update(this._id, {$addToSet: {voters: Meteor.userId()}, $inc: {likes: 1}});
        }
    }
});
