const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')
const { quizSchema } = require('./quiz.model.js')

const themeSchema = {
  id: Joi.string().required(),
  name: Joi.string().required(),
  image: Joi.string().required(),
}

const Theme = new BaseModel('Theme', themeSchema)

module.exports = { Theme, themeSchema }
