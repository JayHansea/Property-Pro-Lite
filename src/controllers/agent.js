/* eslint-disable no-underscore-dangle */
import agentModel from '../models/agent';

const agentController = {
  create(req, res) {
    if (
      !req.body.email
        && !req.body.first_name
        && !req.body.last_name
        && !req.body.password
        && !req.body.phoneNumber
        && !req.body.address
        && !req.body.organization_name
        && !req.body.organization_address
    ) {
      return res.status(400).send({ message: 'All fields are required' });
    }
    const agent = new agentModel(req.body);
    database.using(agent).write('insert');
    return res.status(201).send({ agent: agent.attributes });
  },


  getAll(req, res) {
    const agents = database.read(agentModel)._rows.map((row) => { return row.attributes; });
    return res.status(200).send({ agents });
  },


  getOne(req, res) {
    const oneAgent = database.read(agentModel, {id:parseInt(req.param.id)}).first();
    if (!oneAgent) {
      return res.status(404).send({ message: 'agent not found' });
    }
    return res.status(200).send({ agent: oneAgent.attributes });
  },


  update(req, res) {
    const upAgent = database.read(agentModel, {id:parseInt(req.param.id)}).first();
    if (!upAgent) {
      return res.status(404).send({ message: 'agent not found' });
    }
    const updatedAgent = database.using(upAgent.merge(req.body)).write('update', {id:parseInt(req.param.id)});
    return res.status(200).send(updatedAgent);
  },


  delete(req, res) {
    const delAgent = database.read(agentModel, {id:parseInt(req.param.id)}).first();
    if (!delAgent) {
      return res.status(404).send({ message: 'agent not found' });
    }
    const isEmpty = Boolean(database.delete(agentModel, {id:parseInt(req.param.id)}));
    return res.status(204).send({del:true, empty:isEmpty});
  },
};

export default agentController;
