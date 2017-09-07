import models from '../models';
const recipe = models.Recipe;

const RecipeController = {
  addRecipe(req, res) {
    return recipe
      .create({
        title: req.body.title,
        description: req.body.description,
        details: req.body.details,
        instructions: req.body.instructions,
        userId: req.body.userId
      })
      .then(() => {
        res.send({
            status: 'Success',
            message: "Recipe succesfully added"
        });
      })
      .catch(error => res.status(400).send({
        status: false,
        message: error
      }));
  },
getRecipe(req, res) {
  return recipe
  .findAll({})
  .then((recipes) => {
    if(recipes.length < 1) {
      res.status(200).send({
        message: 'There is no recipe in the database'
      });
    } else {
      res.status(200).send(recipes)
    };
  })
  .catch((error) => res.status(400).send(error))
},

deleteARecipe(req, res){
  return recipe
  .destroy({
    where: {
      id: req.params.recipeId,
      userId: req.body.userId
    },
  })
  .then((recipe) => {
    if(recipe){
      res.status(200).send({
    status: 'success',
    message: 'Recipe deleted successfully'
  });
    } else {
      res.status(401).send({
        status: false,
        message: 'You are not authorized to perform that action'
      });
    };
  })
  .catch((error) => res.status(409).send({
    status: 'success',
    message: error
  }));
},

modifyRecipe(req, res){
  return recipe
  .update(req.body, {
    where: {
      id: req.params.recipeId
    },
  })
  .then(() => res.status(200).send({
    message: 'Recipe modified successfully'
  }))
  .catch((error) => res.status(400).send({
    message: error
  }));
},



};

export default RecipeController;