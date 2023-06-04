
const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')
const { answerSchema } = require('./answer.model.js')

const questionSchema = {
  id: Joi.string().required(),
  label: Joi.string().required(),
  image: Joi.string().required(),
  trackSources: Joi.string().optional(),
  quiz: Joi.string().required(),
}

const Question = new BaseModel('Question', questionSchema)

module.exports = { Question, questionSchema }
