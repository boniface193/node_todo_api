const express = require('express');
const app = express();

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const router = require('./routers/index');
require('dotenv/config');

const port = process.env.PORT || 3000;

app.use(bodyParser.json())

app.use('/posts', router)

app.use((req, res, next) => {
    res.header('Access-Contron-Allow-Origin', '*');
    res.header('Access-Control-Allow-Header', 'Origin, X-Requested-with, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE');
        return res.status(200).json({});
    }
    next();
});

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