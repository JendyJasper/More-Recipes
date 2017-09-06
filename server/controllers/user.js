import models from '../models';
const user = models.User;

const UserController = {
  addUser(req, res) {
    return user 
        .create({
            lastName: req.body.lastName,
            firstName: req.body.firstName,
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            active: req.body.active
        })
        .then(() => {
            res.send ({
                status: 'Success',
                message: "User successfully added"
            });
        })
        .catch(error => res.status(400).send({
            status: false,
            message: error
        }));
  },
};

export default UserController;