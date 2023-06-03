const { Router } = require('express')
const { Quiz, Question} = require('../../../../models')

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

router.post('/', (req, res) => {
  try {
    res.status(201).json(Question.create({ ...req.body, quiz: req.params.quizId }))
  } catch (err) {
    if (err.name === 'ValidationError') {
      console.log(err)
      res.status(400).json(err.extra)
    } else {
      console.log(err)
      res.status(500).json(err)
    }
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
