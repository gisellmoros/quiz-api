const express = require('express');
const mongoose  = require('mongoose');
const app = express();
const PORT = process.env.PORT || 4000;
const connectDB = require('./config/db');
const env = require('dotenv');
env.config();
connectDB();


app.use(express.json());

const quizRoutes = require('./routes/quiz')
app.use('/api/quiz',quizRoutes)

app.listen(PORT,() => {console.log(`Server running at Localhost:${PORT}`)});
