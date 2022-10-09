const express = require('express');
const router = require('../router/router');
const app = express();

//middleware
app.use(express.json());

//default service call (actuator)
app.get('/', (req,res,next) => {
    res.status(200).json({
        message: 'Using GET /',
    });
});

app.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Using POST /',
    });
});

app.patch('/', (req, res, next) => {
    res.status(200).json({
        message: 'Using PATCH /',
    });
});

app.delete('/', (req, res, next) => {
    res.status(204).json({
        message: 'Using Delete /'
    });
});


//req.body.firstName
//cors
//localhost:3000/example
app.use('/example', router);

//add middleware to handle errors and bad urls
app.use((req, res, next) => {
    const error = new Error("NOT FOUND!");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error:{
            message: error.message,
            status: error.status,
        },
    });
});

module.exports = app;