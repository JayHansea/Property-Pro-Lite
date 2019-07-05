/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable no-underscore-dangle */
import Agent from './agent';
import Property from './property';

class Admin extends Agent {
  static get table() {
    return 'admin';
  }

  static get schema() {
    return Object.assign({}, {
      id: Number,
      is_admin: Boolean,
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

export default Admin;
