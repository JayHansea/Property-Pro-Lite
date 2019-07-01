import moment from 'moment';

class Property {
  // @param {object} data

  constructor() {
    this.props = [];
  }

  // @returns {object} property object

  createProps(propsInfo) {
    const createProps = {
      id: this.props.length + 1,
      owner: propsInfo.owner,
      status: propsInfo.status,
      price: propsInfo.price,
      state: propsInfo.state,
      city: propsInfo.city,
      address: propsInfo.address,
      type: propsInfo.type,
      created_on: moment.now(),
      image_url: propsInfo.image
    };
    this.props.push(createProps);
    return createProps;
  }

  findById(id) {
    // eslint-disable-next-line radix
    return this.props.find(props => props.id === parseInt(id));
  }

  // @returns {object} all property

  findAll() {
    return this.props;
  }

  // @param {object} updates

  updateProps(id, update) {
    const propsUpdate = this.findById(id);
    const index = this.props.indexOf(propsUpdate);
    this.props[index].first_name = update.first_name.trim();
    this.props[index].last_name = update.last_name.trim();
    this.props[index].phoneNumber = update.phoneNumber;
    this.props[index].address = update.address;
    this.props[index].is_admin = update.is_admin;
    this.props[index].modifiedDate = moment.now();
    return this.props[index];
  }

  delete(id) {
    const deleteProps = this.findById(id);
    const index = this.props.indexOf(deleteProps);
    this.props.splice(index, 1);
    return {
    status: 200,
    data: [{
        id,
        message: 'Property Delete Successful',
    }],
  }
}
export default new Property();
