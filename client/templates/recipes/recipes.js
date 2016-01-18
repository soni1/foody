Template.recipes.helpers({
    'showRecipes':function(){
        return Recipes.find();
    },
    'images': function () {
        return RecipesImages.findOne({_id:this.image}) ;
    }
});

Template.recipes.events({
    "click [data-action='addLikes']":function(event){
        event.preventDefault();
        currentRecipe = Recipes.findOne(this._id);
          Recipes.update(this._id,{$addToset:{voters:Meteor.userId()}}, {$inc:{likes: 1}  });
    }
})
