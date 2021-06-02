const Question = require('../models/Question')

module.exports.getAllQuestions = (req,res) => {

		res.send("Annyeong V! Nado chowahae.")

}

module.exports.addQuestion = (req,res) => {

		const question = new Question ({
			chapter: req.body.chapter,
			chapterDescription: req.body.chapterDescription,
			questionId: req.body.questionId,
			question: req.body.question,
			correct_answer: req.body.correct_answer,
			incorrect_answer: req.body.incorrect_answer
		})

		question.save()
		.then(question => {
			res.send({message:`Question with question ID ${req.body.questionId} was created successfully.`})
		})
		.catch(error =>{
			res.send(error)
		})

}

