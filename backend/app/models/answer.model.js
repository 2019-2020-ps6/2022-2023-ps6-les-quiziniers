const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

const answerSchema = {
  isSelected: Joi.boolean(),
  type: Joi.string().required(),
  value: Joi.string().required(),
  isCorrect: Joi.boolean().required(),
}
const Answer = new BaseModel('Answer', answerSchema)

module.export = { Answer, answerSchema }
