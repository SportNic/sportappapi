const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

let app = express();

require('dotenv').config()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to database'))

const userRouter = require('./routes/User')
app.use('/user', userRouter)

app.listen(3000, () => {
    console.log("Listening at :3000...");
});