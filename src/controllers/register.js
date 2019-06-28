/* eslint-disable camelcase */

const database = {
  users: [
    {
      id: 1,
      email: 'ezeokafortochukwu@gmail.com',
      first_name: 'Tochukwu',
      last_name: 'Ezeokafor',
      password: '123',
      phoneNumber: '+2348066926408',
      address: 'Flat 2 Block 5 Yenagoa Street',
      is_admin: true,
    },
    {
      id: 2,
      email: 'jayhansea@gmail.com',
      first_name: 'Tochi',
      last_name: 'Eze',
      password: '456',
      phoneNumber: '+2347010896565',
      address: 'Flat 2 Block 5 Yen Street',
      is_admin: false,
    },
  ],
};

const Controllers = {
  home: {
    path: '/',
    handler(req, res) { // http://localhost:3000/ [ GET ]
      res.send(database.users);
    },
  },
  register: {
    path: '/register',
    handler(req, res) { // http://localhost:3000/register [ POST ]
      const {
        // eslint-disable-next-line camelcase
        email, first_name, last_name, password, phoneNumber, address,
      } = req.body;

      database.users.push({
        id: 3,
        email,
        first_name,
        last_name,
        password,
        phoneNumber,
        address,
        is_admin: false,
      });
      res.json(database.users[database.users.length - 1]);
    },
  },
};

export default Controllers;
