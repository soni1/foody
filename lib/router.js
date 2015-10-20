
Router.configure({
	layoutTemplate: 'layout'
});


Router.route('/', function () {
    this.render('home');
},
    {
        name: 'home'
});
Router.route('/recipes', function () {
    this.render('recipes');
},
    {
        name:'recipes'
    }
);

Router.route('/add_recipes', function () {

    this.render('add_recipes');
    },
    {
        name:'add_recipes'
    }

);
Router.route('/show_recipe', function () {

        this.render('show_recipe');
    },
    {
        name:'show_recipe'
    }

);
Router.route('/Contact_us', function () {
    this.render('contact_us');
},
    {
        name:'contact_us'

    }

);
Router.route('/add_review/:_id', function () {
    this.render('add_review',
        {
            name:'add_review'

        },

        {
            data: function(){
            return Recipes.findOne(this.params._id);
        }
    });
});