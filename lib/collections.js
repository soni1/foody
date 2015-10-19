Recipes = new Mongo.Collection('recipes');
Reviews = new Mongo.Collection('reviews');

RecipesImages = new FS.Collection("RecipesImages", {
    stores: [new FS.Store.GridFS("RecipesImages")]
});