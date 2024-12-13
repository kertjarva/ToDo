
const express = require('express');
const bodyParser = require('body-parser');
const todoRouter = require('./routes/todo.routes');
const dotenv = require('dotenv');
const app = express();

app.use(bodyParser.json());


app.use('/', todoRouter);

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on port 3000.');
});
