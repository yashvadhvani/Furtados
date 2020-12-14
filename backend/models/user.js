const dbModel = require('../models/index')
const UserSchema = require('../models/schemas/User');

const findOne = (username) => dbModel.findOne(UserSchema, { username });
const findOneByEmail = (email) => dbModel.findOne(UserSchema, { email });


const create = (username, email, password) => dbModel.save(
  UserSchema,
  { username, email, password }
);

module.exports = {
  findOne,
  findOneByEmail,
  create
} 
