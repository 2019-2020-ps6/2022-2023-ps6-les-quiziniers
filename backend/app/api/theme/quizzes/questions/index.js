const { Router } = require('express')
const { Quiz, Question } = require('../../../../models')

const router = new Router({ mergeParams: true })

// get all questions
router.get('/', (req, res) => {
  try {
    res.status(200).json(Question.get())
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

router.get('/:questionId', (req, res) => {
  try {
    res.status(200).json(Question.getById(req.params.questionId))
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

// get all questions from a quiz by quizId
router.get('/quizzes/:quizzId', (req, res) => {
  try {
    const quizId = req.params.quizzId
    res.status(200).json(Question.get().filter((question) => question.quiz === quizId))
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

router.post('/:quizzId', (req, res) => {
  try {
    const question = Question.create({ ...req.body, quiz: req.params.quizzId})
    res.status(201).json(question)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.delete('/:questionId', (req, res) => {
  try {
    res.status(200).json(Question.delete(req.params.questionId))
  } catch (err) {
    res.status(500).json(err)
  }
})

router.put('/:questionId', (req, res) => {
  try {
    res.status(200).json(Question.update(req.params.questionId, req.body))
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
