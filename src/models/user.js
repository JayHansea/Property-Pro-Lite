/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import Model from './index';

class User extends Model {
  static get table() {
    return 'user';
  }

  static get schema() {
    return Object.assign({}, {
      id: Number,
      name: String,
      age: Number,
      email: String,
      password: String,
      phone_number: String,
      address: String,
    }, super.schema);
  }

  static get rules() {
    return {
      id: 'required',
      email: 'required',
      password: 'required',
    };
  }

  constructor(attributes = {}) {
    super(attributes);

    this.logged_in = false;
  }

  login() {
    this.logged_in = true;
  }

  logout() {
    this.logged_in = false;
  }
}

export default User;
