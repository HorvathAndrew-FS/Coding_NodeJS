const express = require('express');
const router = require('../router/router');
const app = express();

//middleware
app.use(express.json());

//default service call (actuator)
app.get('/', (req,res,next) => {
    res.status(200).json({
        message: 'Using GET /',
        metadata: {
            Host: req.hostname,
            Port: process.env.port,
            Method: req.method,
        },
    });
});

app.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Using POST /',
        metadata: {
            Host: req.hostname,
            Port: process.env.port,
            Method: req.method,
        },
    });
});

app.patch('/:id', (req, res, next) => {
    res.status(200).json({
        message: 'Using PATCH /',
        metadata: {
            Host: req.hostname,
            Port: process.env.port,
            Method: req.method,
        },
    });
});

app.delete('/:id', (req, res, next) => {
    res.status(202).json({
        message: 'Using Delete /',
        metadata: {
            Host: req.hostname,
            Port: process.env.port,
            Method: req.method,
        },
    });
});


//req.body.firstName
//cors
//localhost:3000/example
app.use('/:id', router);

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