import models from '../models';
const vote = models.Vote;

const VotesController = {
  addVote(req, res) {
  return vote 
  .create({
      userId: req.body.userId,
      recipeId: req.body.recipeId,
      rate: req.body.rate
  })
  .then(() => {
      res.send ({
          status: 'Success',
          message: 'Votes Successfully added'
      });
  })
  .catch (error => res.status(400).send ({
      status: false,
      message: error
  }));
  },
  
};

export default VotesController;