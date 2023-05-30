const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')
const { quizSchema } = require('./quiz.model.js')

const themeSchema = Joi.object({
  id: Joi.string().required(),
  name: Joi.string().required(),
  image: Joi.string().required(),
  answers: Joi.array().item(quizSchema).required(),
})

const Theme = new BaseModel('Theme', themeSchema)

module.export = { Theme, themeSchema }
