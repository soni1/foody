Recipes = new Mongo.Collection('recipes');
Reviews = new Mongo.Collection('reviews');
RecipesImages = new FS.Collection("recipesImages", {
    stores: [new FS.Store.GridFS("recipesImages")]
});
