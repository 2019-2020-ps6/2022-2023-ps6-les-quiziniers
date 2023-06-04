const { Router } = require('express')
const { Answer } = require('../../../../../models')

const router = new Router({ mergeParams: true })

router.get('/', (req, res) => {
  try {
    res.status(200).json(Answer.get())
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

router.get('/:answerId', (req, res) => {
  try {
    res.status(200).json(Answer.getById(req.params.answerId))
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

router.get('/questions/:questionId', (req, res) => {
  try {
    res.status(200).json(Answer.get().filter((answer) => answer.question === req.params.questionId))
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

router.post('/', (req, res) => {
  try {
    res.status(201).json(Answer.create({ ...req.body}))
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

router.delete('/:answerId', (req, res) => {
  try {
    res.status(200).json(Answer.delete(req.params.answerId))
  } catch (err) {
    res.status(500).json(err)
  }
})

router.put('/:answerId', (req, res) => {
  try {
    res.status(200).json(Answer.update(req.params.answerId, req.body))
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
