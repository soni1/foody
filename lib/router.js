



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
Router.route('/show_recipe/:_id', {
    name: 'show_recipe',
    template: 'show_recipe',
    data: function() {
        return Recipes.findOne(this.params._id);
    }
});
Router.route('/Contact_us', function () {
        this.render('contact_us');
    },
    {
        name:'contact_us'

    }

);
Router.route('/add_review/:_id', {
    name: 'add_review',
    template: 'add_review',
    data: function() {
        return Recipes.findOne(this.params._id);
    }
});
Router.route('/reviews/:_id', {
    name: 'reviews',
    template: 'reviews',
    data: function() {
        return Recipes.findOne(this.params._id);
    }
});
