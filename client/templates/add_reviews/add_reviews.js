Template.add_review.events({
    'submit .add-review':function(event){
        event.preventDefault();
        var rating = event.target.rating.value;
        var review = event.target.review.value;
        var recipeId = Router.current().data()._id;
        Meteor.call('addReview',rating,review,recipeId);
    }
})