import moment from 'moment';
// import uuid from 'uuid/v4';

class PropertyAgent {
  // @param {object} data

  constructor() {
    this.agent = [];
  }

  // @returns {object} agent object

  createAgent(agentInfo) {
    const createAgent = {
      id: this.agent.length + 1,
      email: agentInfo.email,
      first_name: agentInfo.first_name.trim(),
      last_name: agentInfo.last_name.trim(),
      password: agentInfo.password,
      phoneNumber: agentInfo.phoneNumber,
      address: agentInfo.address,
      is_admin: false,
      is_agent: true,
      organization_name: agentInfo.organization_name,
      organization_address: agentInfo.organization_address,
    };
    this.agent.push(createAgent);
    return createAgent;
  }

  // @param {object} agent updates

  updateUser(id, update) {
    const userUpdate = this.findById(id);
    const index = this.agent.indexOf(userUpdate);
    this.agent[index].first_name = update.first_name.trim();
    this.agent[index].last_name = update.last_name.trim();
    this.agent[index].phoneNumber = update.phoneNumber;
    this.agent[index].address = update.address;
    this.agent[index].organization_name = update.organization_name;
    this.agent[index].organization_address = update.organization_address;
    this.agent[index].modifiedDate = moment.now();
    return this.agent[index];
  }
}

// eslint-disable-next-line no-unused-vars
class Admin extends PropertyAgent {
  // @returns {object} a single agent object

  findById(id) {
    // eslint-disable-next-line radix
    return this.agent.find(agent => agent.id === parseInt(id));
  }

  // @returns {object} returns all users

  findAll() {
    return this.agent;
  }

  // @param {uuid} delete agent

  delete(id) {
    const deleteUser = this.findById(id);
    const index = this.agent.indexOf(deleteUser);
    this.agent.splice(index, 1);
    return {
      status: 200,
      data: [{
        id,
        message: 'Delete User Successful',
      }],
    };
  }
}

export default new PropertyAgent();
