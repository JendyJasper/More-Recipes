import models from '../models';
const review = models.Review;

const ReviewsController = {
    addReview(req, res) {
        return review 
        .create({
            where: {
            id: req.params.recipeId},
            userId: req.body.userId,
            content: req.body.content
        })
        .then(() => {
            res.send ({
                status: 'Success',
                message: 'Review added successfully'
            });

        })
        .catch (error => res.status(400).send({
            status: false,
            message: error
        }))
    }

}

export default ReviewsController;