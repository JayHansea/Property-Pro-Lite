/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable no-underscore-dangle */
import User from './user';
import Property from './property';

class Agent extends User {
  static get table() {
    return 'agent';
  }

  static get schema() {
    return Object.assign({}, {
      id: Number,
      organization_name: String,
      organization_address: String,
    }, super.schema);
  }

  static get rules() {
    return super.rules;
  }

  constructor(attributes = {}) {
    super(attributes);
  }

  createsProperty(property) {
    if (!(property instanceof Property)) {
      return false;
    }

    return Boolean(property.user_id = this._attributes.id);
  }
}

export default Agent;
