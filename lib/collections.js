Recipes = new Mongo.Collection('recipes');
Reviews = new Mongo.Collection('reviews');
RecipesImages = new FS.Collection("recipesImages", {
    stores: [new FS.Store.GridFS("recipesImages")]
});
RecipesImages.allow({
    insert: function(userId, doc) {
        return true;
    },
    update: function(userId, doc, fieldNames, modifier) {
        return true;
    },
    download: function(userId) {
        return true;
    },
    fetch: null
});

Recipes.attachSchema(new SimpleSchema({
    name: {
        type: String,
        label: "Recipe Name",
        max: 100
    },
    
        ingredients: {
            type: [Object],
            minCount: 1
        },

    "ingredients.$.name": {
    type: String
        },
    "ingredients.$.amount": {
    type: String
    },
    description: {
        type: String,
        label: "How to prepare ",
    },
    time: {
        type: Number,
        label: "Time (Minutes)",
    },
    image: {
        type: String,

        autoform: {
            afFieldInput: {
                type: "cfs-file",
                collection: 'recipesImages',
                label: 'Recipe Picture'
            }
        }
    }
}));