Template.reviews.helpers({
    'showReviews': function () {
        return Reviews.find({recipeId: Router.current().data()._id})
    },

    countReviews: function(){
        return Reviews.find({recipeId: Router.current().data()._id}).count();
    },

    averageRating: function() {
        var reviews = Reviews.find({recipeId: Router.current().data()._id}).fetch();
        if(reviews.length===0)
        return 0;
        var ratings = _.pluck(reviews, 'rating');
        var ratingsInt = ratings.map( function( num ){ return parseInt( num, 10 ) } );
        var sum = ratingsInt.reduce(function(pv, cv){return pv + cv;},0);
        var avg = sum / ratings.length;
        return Math.round(avg);
    }
});
