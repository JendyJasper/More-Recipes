More-Recipes
Introduction

More-Recipes provides a platform for users to share the awesome and exciting recipe ideas they have invented or learnt.
Suppose a user comes up with a food recipe, he/she can post it on More-Recipes and get feedback in form of reviews and votes from other users who explore that recipe. Users can also keep a list of their favorite recipes on the application.

Application Features

    Users can create accounts on the application
    Users can login to use the accessible features provided
    Users can create and post recipes
    Users can edit recipes they have posted
    Users can delete recipes they have posted
    Users can add recipes posted by other users to their favorite recipe list
    Users can view recipes posted in the application
    Users can post a review on recipes posted in the application
    Users can show reaction to a posted recipe by upvoting or downvoting


Technology Used

    NodeJS
    Express
    Sequelize ORM
    Postgresql Relational Database

Getting Started

    Install NodeJs and Postgresql (PGAdmin 3 preferably) locally on your machine or signup to an online hosted database e.g ElephantSql
    Clone the repository from bash or windows command

    $ git clone https://github.com/JendyJasper/More-Recipes

    Change into the directory

    $ cd /More-Recipes

    Install all required dependencies with

    $ npm install

    After successful installation, create a .env file which will be used to load environment variables see sample below
    Create a databse to be used with application

DB_USERNAME = your database username
DB_PASSWORD = your database password
DB_DATABASE = your database name
DB_HOST = "127.0.0.1"
DB_PORT = "5432"
DB_DIALECT = "postgres"
secretKey = your secret key

    Migrate your database schema using

    $ npm run migrate

    To start the application

> $ npm start
> babel-node ./bin/www
> Server listening on port 5000

Using the Application
Routes

    POST api/users/signup for creation of new account. Required fields are:
        username which must be unique
        email A valid email address of the new user whichh must be unique
        password which must be povided
        
    POST api/users/signin for logging in to the application. Required fields are:
        username Username of registered user
        password Password of registered user

    POST api/recipes for creating new recipes posts. Required fields are:
        title Name of the recipe
        details Details of what the recipe is all about
        description How the prepared food tests like
        instructions Step by step guide on how recipe is prepared

    GET api/recipes for viewing all the posted recipes in the application

    GET api/v1/recipes?sort=upvote&order=descending for viewing recipes with higehest number of upvotes

    PUT api/recipes/<recipeId> for modifying a recipe by a user who has posted it. Fields that can be modified:
        title Name of the recipe
        details Details of what the recipe is all about
        description How the prepared food tests like
        instructions Step by step guide on how recipe is prepared

    DELETE api/recipes/<recipeId> to delete a posted recipe. Required recipeId[integer], the id of the recipe

    GET api/recipes/user to get all recipes posted by and belonging to a user

    PUT api/recipes/<recipeId>/upvote to upvote a recipe. Required recipeId[integer], id of the recipe

    PUT api/recipes/<recipeId>/downvote to downvote a recipe. Required recipeId[integer], id of the recipe

    POST api/recipes/<recipeId>/reviews for reviewing a recipe by making comments on the recipe post. Required recipeId[integer], id of the recipe

    POST api/v1/users/<recipeId>/favorites for adding a recipe to a list of user's favorite. Required recipeId[integer], id of the recipe

    PUT api/users/<recipeId>/favorites for adding a recipe on a user's favorite list to a category. Required recipeId[integer], id of the recipe

    GET api/users/recipes/favorites for viewing all the recipes in a user's favorite list.

Testing

    Create a test database and name it travis
    Run Test $ npm test

Application Limitations

    Users can login and obtain a token which is verified on every request
    Users will only be able to access the full application functionalities only if they are logged in
