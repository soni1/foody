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
        if (_.contains(Recipes.voters,Meteor.userId() ))
            FlashMessages.sendError("You already liked this recipe", { hideDelay: 1000 });
              Recipes.update(this._id,
                  {$addToSet:{voters:Meteor.userId()}, $inc:{likes: 1}  });
    }
});
