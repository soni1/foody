Template.add_review.events({
    'submit .add-review':function(event){
        event.preventDefault();
        var rating = event.target.rating.value;
        var review = event.target.review.value;
        var recipeId = Router.current().data()._id;
        addReview(rating,review,recipeId);
    }
});
Template.recipes.events({
    "click [data-action='addLikes']": function (event) {
        event.preventDefault();
        var recipe = Recipes.findOne({_id: this._id});
        upvote(recipe)
    }
});