const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')
const { questionSchema } = require('./questions.model.js')


const quizSchema = {
  id: Joi.string().required(),
  name: Joi.string().required(),
  theme: Joi.string().required(),
  // questions: Joi.array().item(questionSchema).required(),
  image: Joi.string().required(),
  points: Joi.number().integer().positive().required(),
}

const Quiz = new BaseModel('Quiz', quizSchema)

module.exports = { Quiz }
