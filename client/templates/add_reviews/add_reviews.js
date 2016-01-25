Template.add_review.events({
    'submit .add-review':function(event){
        var rating = event.target.rating.value;
        var review = event.target.review.value;
        if(review!=""){
            Reviews.insert({
                rating:rating,
                review:review,
                recipeId:Router.current().data()._id
            });
            FlashMessages.sendSuccess('Review Added',{ autoHide: true, hideDelay: 2000 });
            Router.go('reviews',{_id:Router.current().data()._id});
        }
        else{
            FlashMessages.sendError('Review field is empty',{ autoHide: true, hideDelay: 3000 });
        }
        return false;
    }
})