addReview = function(rating,review,recipeId,author){
    if(review!=""){
        Reviews.insert({
            rating:rating,
            review:review,
            recipeId:recipeId,
            author:author
        });
        Router.go('reviews',{_id:recipeId});

        FlashMessages.sendSuccess('Review Added',{ autoHide: true, hideDelay: 2000 });
    }
    else{
        FlashMessages.sendError('Review field is empty',{ autoHide: true, hideDelay: 3000 });
    }
    return false;
};

upvote = function(currentRecipe){

    var user = Meteor.user();
    if(!user){
        FlashMessages.sendError("You need to login to like this recipe", {hideDelay: 1000});
        return false;

    }
    if (currentRecipe) {
        if (_.contains(currentRecipe.voters, Meteor.userId())) {
            FlashMessages.sendError("You already liked this recipe", {hideDelay: 1000});
            return false;
        }
        Recipes.update(currentRecipe._id, {$addToSet: {voters: Meteor.userId()}, $inc: {likes: 1}});
    }
};