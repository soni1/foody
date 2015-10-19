
Template.add_recipes.events({

    'submit .add_recipe':function(event){
        var name = event.target.name.value ;
        var ingredient = event.target.ingredient.value ;
        var amount = event.target.amount.value ;


        var description = event.target.description.value ;
        var time= event.target.time.value ;

        var file = $('#recipeImage').get(0).files[0];
        if(file){
            fsFile = new FS.File(file);
            RecipesImages.insert(fsFile,function(err,result){
                if(!err){
                    var recipeImage = '/cfs/files/RecipesImages/'+ result._id;
                    Recipes.insert({
                        name:name,
                        description:description,
                        image:recipeImage,
                        time:time,
                        createdAt: new Date()
                    })
                }
            });

        } else{

            var recipieImage = '/img/noimage.png';

            Recipes.insert({
                name:name,
                description:description,
                image:recipesImages,
                time:time,
                createdAt: new Date()
            })
        }
        // Clear the form
        event.target.name.value  = "";
        event.target.ingredient.value = "";
        event.target.amount.value = "";

        event.target.description.value = "";
        event.target.time.value= "";
        FlashMessages.sendSuccess('Recipe Added',{ autoHide: true, hideDelay: 3000 });
        Router.go('/');
        event.preventDefault();
    }




})