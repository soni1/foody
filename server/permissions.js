
    RecipesImages.allow({
        insert: function(userId, doc) {
            return true;
        },
        update: function(userId, doc, fieldNames, modifier) {
            return true;
        },
        remove: function(userId, doc) {
            return false;
        },
        download: function(userId,doc) {
            return true;
        },
        fetch: null
    });
    Recipes.allow({
        insert: function(userId, doc) {
            return true;
        },
        update: function(userId, doc, fieldNames, modifier) {
        return true;
        }
    });
    Reviews.allow({
        insert: function(userId, doc) {
            return true;
        },
        update: function(userId, doc, fieldNames, modifier) {
            return true;
        }
    });