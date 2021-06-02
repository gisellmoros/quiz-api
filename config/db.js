const mongoose = require('mongoose')

const connectDB = async () => {
	const CONNECTION_URL = `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.mhzvf.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`;

	await mongoose
		.connect(CONNECTION_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false,
		})
		.then(() => {
			console.log('Database connected.');
		})
		.catch(err => {
			console.log(err.message);
		});
};


module.exports = connectDB