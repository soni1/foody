
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
    this.render('recipes',{
            name:'recipes'
        },
        {
            data: function(){
            return Recipes.find();
        }
    });
});
Router.route('/add_recipes', function () {

    this.render('add_recipes');
    },
    {
        name:'add_recipes'
    }

);
Router.route('/Contact_us', function () {
    this.render('contact_us');
},
    {
        name:'contact_us'

    }

);


Router.route('/add_reviews/:_id', function () {
    this.render('add_review',
        {
            name:'add_reviews'

        },

        {
            data: function(){
            return Recipes.findOne(this.params._id);
        }
    });
});