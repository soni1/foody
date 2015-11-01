Recipes = new Mongo.Collection('recipes');
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
    likes:{
        type:Number,
        optional:true
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

Recipes.attachSchema(new SimpleSchema({
    rating: {
        type: String,
        label: "Rate it",
        allowedValues: ["1","2","3","4","5"],


    },

    review: {
        type: String,
        autoform: {
            label: "Write Your review",
            placeholder: "Please write your review about this recipe"
        }
    }
}));