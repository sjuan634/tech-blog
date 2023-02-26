const { User } = require('../models');

const userData = [
  {
    name: 'jonDoe',
    password: 'mypassword123'
  },
  {
    name: 'janeSmith',
    'password': 'anotherpassword456'
  },
  {
    name: 'bodJohnson',
    password: 'yetanotherpassword789'
  },
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;