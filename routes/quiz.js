const express = require('express')
const router = express.Router()
const{getAllQuestions,addQuestion} = require('../controllers/quiz')

router.get('/questions',getAllQuestions);
router.post('/questions',addQuestion);


module.exports = router