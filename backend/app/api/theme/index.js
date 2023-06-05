const { Router } = require('express')
const { Theme } = require('../../models')
const QuizzRouter = require('./quizzes')

const router = new Router()

router.use('/:themeId/quizzes', QuizzRouter)
// getusers
router.get('/', (req, res) => {
  try {
    res.status(200).json(Theme.get())
  } catch (err) {
    res.status(500).json(err)
  }
})

// getuser
router.get('/:themeId', (req, res) => {
  try {
    res.status(200).json(Theme.getById(req.params.themeId))
  } catch (err) {
    res.status(500).json(err)
  }
})

// createuser
router.post('/', (req, res) => {
  try {
    const quiz = Theme.create({ ...req.body })
    res.status(201).json(quiz)
  } catch (err) {
    if (err.name === 'ValidationError') {
      res.status(400).json(err.extra)
    } else {
      res.status(500).json(err)
    }
  }
})

// deleteuser
router.delete('/:themeId', (req, res) => {
  try {
    res.status(200).json(Theme.delete(req.params.themeId))
  } catch (err) {
    res.status(500).json(err)
  }
})

// updateuser
router.put('/:themeId', (req, res) => {
  try {
    res.status(200).json(Theme.update(req.params.themeId, req.body))
  } catch (err) {
    res.status(500).json(err)
  }
})




module.exports = router
