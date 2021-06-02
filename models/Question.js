const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({

	chapter: {
		type: Number,
	},
	chapter: {
		type: Number,
	},
	chapterDescription: {
		type: String,
	},
	questionId: {
		type: Number,
	},
	question: {
		type: String,
	},
	correct_answer: {
		type: String,
	},
	incorrect_answer: [
		{
		type: String,
		}
	],
	isActive: {
		type: Boolean,
		default: true
	}
})

module.exports = mongoose.model('Question',QuestionSchema)
