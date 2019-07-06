/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import propertyModel from '../models/property';
import agentModel from '../models/agent';

const propertyController = {
  create(req, res) { // @tochukwu: pass the 'agent_id' or 'agent_email' as a request param here
    if (
      !req.body.onwer
        && !req.body.status // 'sold' OR 'not-sold'
        && !req.body.price
        && !req.body.state
        && !req.body.city
        && !req.body.address
        && !req.body.type
        && !req.body.image_url
    ) {
      return res.status(400).send({ message: 'All fields are required' });
    }
    
    let clause = {}
    if(!!req.param.agent_id){
        clause['id'] = parseInt(req.param.agent_id)
    }else if(!!!!req.param.agent_email){
        clause['email'] = parseInt(req.param.agent_email)
    }
    
    const property = new propertyModel(req.body);
    const agent = database.read(agentModel, clause).first()
    agent.createsProperty(property); // This agent is creating the property
    database.using(property).write('insert');
    return res.status(201).send(property);
  },


  getAll(req, res) {
    const properties = database.read(propertyModel)._rows.map((row) => { return row.attributes; });
    return res.status(200).send(properties);
  },


  getOne(req, res) {
    const oneProp = database.read(propertyModel, {id:parseInt(req.param.id)}).first();
    if (!oneProp) {
      return res.status(404).send({ message: 'property not found' });
    }
    return res.status(200).send(oneProp);
  },


  update(req, res) {
    const upProp = database.read(propertyModel, {id:parseInt(req.param.id)}).first();
    if (!upProp) {
      return res.status(404).send({ message: 'property not found' });
    }
    const updatedProp = database.using(propertyModel.merge(req.body)).write('update', {id:parseInt(req.param.id)});
    return res.status(200).send(updatedProp);
  },


  delete(req, res) {
    const delProp = database.read(propertyModel, {id:req.param.id}).first();
    if (!delProp) {
      return res.status(404).send({ message: 'property not found' });
    }
    const isEmpty = Boolean(database.delete(propertyModel, {id:parseInt(req.param.id)}));
    return res.status(204).send({del:true, empty:isEmpty});
  },
};

export default propertyController;
