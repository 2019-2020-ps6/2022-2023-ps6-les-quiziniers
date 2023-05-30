const { Router } = require('express')
const QuizzesRouter = require('./theme/quizzes')
const UserRouter = require('./users')
const QuestionRouter = require('./theme/quizzes/questions/')

const router = new Router()
router.get('/status', (req, res) => res.status(200).json('ok'))
router.use('/quizzes', QuizzesRouter)
router.use('/users', UserRouter)
router.use('/questions', QuestionRouter)
module.exports = router
