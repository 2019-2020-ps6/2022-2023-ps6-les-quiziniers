const { Router } = require('express')

const { User } = require('../../models')

const router = new Router()

// getallusers
router.get('/', (req, res) => {
  try {
    res.status(200).json(User.get())
  } catch (err) {
    res.status(500).json(err)
  }
})
// getuser
router.get('/:userId', (req, res) => {
  try {
    res.status(200).json(User.getById(req.params.userId))
  } catch (err) {
    res.status(500).json(err)
  }
})

// Createuser
router.post('/', (req, res) => {
  try {
    const user = User.create({ ...req.body })
    res.status(201).json(user)
  } catch (err) {
    if (err.name === 'ValidationError') {
      res.status(400).json(err.extra)
    } else {
      console.log(err)
      res.status(500).json(err)
    }
  }
})

// deleteruser
router.delete('/:userId', (req, res) => {
  try {
    res.status(200).json(User.delete(req.params.userId))
  } catch (err) {
    res.status(500).json(err)
  }
})

// updateuser
router.put('/:userId', (req, res) => {
  try {
    res.status(200).json(User.update(req.params.userId, req.body))
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
