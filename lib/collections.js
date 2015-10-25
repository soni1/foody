Recipes = new Mongo.Collection('recipes');
Reviews = new Mongo.Collection('reviews');

RecipesImages = new FS.Collection("RecipesImages", {
    stores: [new FS.Store.GridFS("RecipesImages")]
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
    }
});

Recipes.attachSchema(new SimpleSchema({
    name: {
        type: String,
        label: "Recipe Name",
        max: 100
    },
    
        ingredients: {
            type: Object,
            label:"Ingredients",
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
                type: 'fileUpload',
                collection: 'RecipesImages',
                label: 'Recipe Picture'
            }
        }
    },
    createdAt: {
        type: Date
    }
}));