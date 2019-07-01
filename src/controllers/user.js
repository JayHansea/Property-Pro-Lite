import userModel from '../models/user';

const userController = {
  create(req, res) {
    if (
      !req.body.email
        && !req.body.first_name
        && !req.body.last_name
        && !req.body.password
        && !req.body.phoneNumber
        && !req.body.address
    ) {
      return res.status(400).send({ message: 'All fields are required' });
    }
    const user = userModel.createUser(req.body);
    return res.status(201).send(user);
  },


  getAll(req, res) {
    const users = userModel.findAll();
    return res.status(200).send(users);
  },


  getOne(req, res) {
    const oneUser = userModel.findById(req.user.id);
    if (!oneUser) {
      return res.status(404).send({ message: 'user not found' });
    }
    return res.status(200).send(oneUser);
  },


  update(req, res) {
    const upUser = userModel.findById(req.user.id);
    if (!upUser) {
      return res.status(404).send({ message: 'user not found' });
    }
    const updatedUser = userModel.updateUser(req.user.id, req.body);
    return res.status(200).send(updatedUser);
  },


  delete(req, res) {
    const delUser = userModel.findById(req.user.id);
    if (!delUser) {
      return res.status(404).send({ message: 'user not found' });
    }
    const del = userModel.delete(req.user.id);
    return res.status(204).send(del);
  },
};

export default userController;
