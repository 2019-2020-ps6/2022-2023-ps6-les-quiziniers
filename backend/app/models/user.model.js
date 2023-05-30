const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

const userSchema = new BaseModel('User', {
  id: Joi.string().required(),
  firstName: Joi.string().required(),
  lastNale: Joi.string().required(),
})

const User = new BaseModel('Theme', userSchema)

module.export = { User, userSchema }
