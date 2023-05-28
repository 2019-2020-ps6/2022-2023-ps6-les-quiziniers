
const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')
// const { answerSchema } = require('./answer.model.js')

const questionSchema = {
  id: Joi.string().required(),
  label: Joi.string().required(),
  // answers: Joi.array().item(answerSchema).required(),
  image: Joi.string().required(),
  type: Joi.number().min(0).max(1).required(),
}

const Question = new BaseModel('Question', questionSchema)

module.export = { Question, questionSchema }