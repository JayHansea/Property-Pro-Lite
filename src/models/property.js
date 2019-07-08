/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import Model from './index';

class Property extends Model {
  static get table() {
    return 'props';
  }

  static get schema() {
    return {
      id: Number,
      owner: Number,
      status: String, // 'sold' OR 'not-sold'
      city: String,
      state: String,
      type: String,
      address: String,
      image_url: String,
      price: Number,
      user_id: Number,
    };
  }

  static get rules() {
    return {
      id: 'required',
      price: 'required',
    };
  }

  constructor(attributes = {}) {
    super(attributes);
  }
}

export default Property;
