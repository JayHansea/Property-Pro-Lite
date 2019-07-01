/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import propertyModel from '../models/property';

const propertyController = {
  create(req, res) {
    if (
      !req.body.onwer
        && !req.body.status
        && !req.body.price
        && !req.body.state
        && !req.body.city
        && !req.body.address
        && !req.body.type
        && !req.body.image_url
    ) {
      return res.status(400).send({ message: 'All fields are required' });
    }
    const property = propertyModel.createProps(req.body);
    return res.status(201).send(property);
  },


  getAll(req, res) {
    const properties = propertyModel.findAll();
    return res.status(200).send(properties);
  },


  getOne(req, res) {
    const oneProp = propertyModel.findById(req.prop.id);
    if (!oneProp) {
      return res.status(404).send({ message: 'property not found' });
    }
    return res.status(200).send(oneProp);
  },


  update(req, res) {
    const upProp = propertyModel.findById(req.prop.id);
    if (!upProp) {
      return res.status(404).send({ message: 'property not found' });
    }
    const updatedProp = propertyModel.updateProps(req.prop.id, req.body);
    return res.status(200).send(updatedProp);
  },


  delete(req, res) {
    const delProp = propertyModel.findById(req.prop.id);
    if (!delProp) {
      return res.status(404).send({ message: 'property not found' });
    }
    const del = propertyModel.delete(req.prop.id);
    return res.status(204).send(del);
  },
};

export default propertyController;
