const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

const answerSchema = {
  isSelected: Joi.boolean(),
  value: Joi.string().required(),
  isCorrect: Joi.boolean().required(),
  question: Joi.string().required(),
}
const Answer = new BaseModel('Answer', answerSchema)

module.exports = { Answer, answerSchema }
