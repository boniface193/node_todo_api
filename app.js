const express = require('express');
const app = express();

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const router = require('./routers/index');
require('dotenv/config');

const port = process.env.PORT || 3000;

app.use(bodyParser.json())

app.use('/posts', router)

app.use((req, res) => {
    res.status(404).send('not available yet')
})

mongoose.connect(process.env.DB_CONNECTION, ({
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}), () => {
    console.log('Database connection established')
})

app.listen(port, () => {
    console.log(`app is running on ${port}`)
})