const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

const userSchema = {
  id: Joi.string().required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
}

const User = new BaseModel('User', userSchema)

module.exports = { User, userSchema }
