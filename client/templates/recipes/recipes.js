Template.recipes.helpers({
    'showRecipes':function(){
        return Recipes.find();

    },
    'images': function () {
        return RecipesImages.findOne({_id:id}) ;
    }

})
