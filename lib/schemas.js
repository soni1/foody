Recipes.attachSchema(new SimpleSchema({
    ownerId: {
        type: String
    },
    ownerName: {
        type: String,
        optional: true
    },
    voters:{
        type:Array,
        optional:true
    },
    'voters.$':{
        type:String
    },
    name: {
        type: String,
        label: "Recipe Name",
        max: 100
    },

    ingredients: {
        type: [Object],
        minCount: 1
    },

    "ingredients.$.name":{
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
        min:0
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
