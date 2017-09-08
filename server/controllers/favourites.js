import models from '../models';
const favourite = models.Favourites;


const favouriteRecipe = {
  addFavourite(req, res) {
    return favourite
    .create({
      recipeId: req.body.recipeId,
      userId: req.body.recipeId
    })
    .then(() => {
      res.send ({
        status: 'Done',
        message: 'Favourite Added'
      });

    })
    .catch (error => res.status(400).send ({
      status: false,
      message: error
    }));
  },


  getFavourites(req, res){
    return Favourite
    .findAll()
    .then((favourite) => {
      if(favourite.length < 1){
        return res.status(200).send({
          message: 'The user has no favourite recipe'
        });
      }
        return res.status(200).send(favourite)
    })
    .catch((error) => {
      res.send(error);
    })
  }
}