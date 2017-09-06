import RecipeController from '../controllers/recipe';
import UserController from '../controllers/user';
import VotesControler from '../controllers/votes';
import ReviewController from '../controllers/reviews';

module.exports = (app) => {
  app.get('/api',(req,res) => res.status(200).send ({
      message: 'Welcome to the recipes API',
  }));

  //Recipe routes
  app.post('/api/recipes', RecipeController.addRecipe);
  app.get('/api/recipes', RecipeController.getRecipe);
  app.put('/api/recipes/:recipeId', RecipeController.modifyRecipe);
  app.delete('/api/recipes/:recipeId', RecipeController.deleteARecipe);

  //User routes
  app.post('/api/users/signup', UserController.addUser);

  //votes routes
  app.post('/api/upvotes', VotesControler.addVote);

  app.post('/api/recipes/:recipeId/reviews', ReviewController.addReview)
};