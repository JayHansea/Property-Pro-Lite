import moment from 'moment';

class PropertyUser {
  // @param {object} data

  constructor() {
    this.user = [];
  }

  // @returns {object} user object

  createUser(userInfo) {
    const createUser = {
      id: this.user.length + 1,
      email: userInfo.email,
      first_name: userInfo.first_name.trim(),
      last_name: userInfo.last_name.trim(),
      password: userInfo.password,
      phoneNumber: userInfo.phoneNumber,
      address: userInfo.address,
      is_admin: userInfo.email,
    };
    this.user.push(createUser);
    return createUser;
  }

  // @returns {object} a single user object

  findById(id) {
    // eslint-disable-next-line radix
    return this.user.find(user => user.id === parseInt(id));
  }

  // @returns {object} returns all users

  findAll() {
    return this.user;
  }

  // @param {object} user updates

  updateUser(id, update) {
    const userUpdate = this.findById(id);
    const index = this.user.indexOf(userUpdate);
    this.user[index].first_name = update.first_name.trim();
    this.user[index].last_name = update.last_name.trim();
    this.user[index].phoneNumber = update.phoneNumber;
    this.user[index].address = update.address;
    this.user[index].is_admin = update.is_admin;
    this.user[index].modifiedDate = moment.now();
    return this.user[index];
  }

  // @param {uuid} delete user

  delete(id) {
    const deleteUser = this.findById(id);
    const index = this.user.indexOf(deleteUser);
    this.user.splice(index, 1);
    return {
    status: 200,
    data: [{
        id,
        message: 'Delete User Successful',
    }],
  }
}
export default new PropertyUser();
