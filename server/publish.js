Meteor.publish('recipes',function(){
    return Recipes.find();
});
Meteor.publish('reviews',function(){
    return Reviews.find();
});
Meteor.publish('recipesImages',function(){
    return RecipesImages.find();
})