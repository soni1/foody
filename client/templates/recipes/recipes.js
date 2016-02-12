Template.recipes.helpers({
    'showRecipes': function () {
        return Recipes.find();
    },
    'images': function () {
        return RecipesImages.findOne({_id: this.image});
    },
    totalReviews: function() {
        return Reviews.find({recipeId:this._id}).count();
    },
});

