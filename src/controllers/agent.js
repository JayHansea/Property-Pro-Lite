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
    const agent = agentModel.createUser(req.body);
    return res.status(201).send({ agent });
  },


  getAll(req, res) {
    const agents = agentModel.findAll();
    return res.status(200).send(agents);
  },


  getOne(req, res) {
    const oneAgent = agentModel.findById(req.param.id);
    if (!oneAgent) {
      return res.status(404).send({ message: 'agent not found' });
    }
    return res.status(200).send(oneAgent);
  },


  update(req, res) {
    const upAgent = agentModel.findById(req.agent.id);
    if (!upAgent) {
      return res.status(404).send({ message: 'agent not found' });
    }
    const updatedAgent = agentModel.updateAgent(req.agent.id, req.body);
    return res.status(200).send(updatedAgent);
  },


  delete(req, res) {
    const delAgent = agentModel.findById(req.agent.id);
    if (!delAgent) {
      return res.status(404).send({ message: 'agent not found' });
    }
    const del = agentModel.delete(req.agent.id);
    return res.status(204).send(del);
  },
};

export default agentController;
