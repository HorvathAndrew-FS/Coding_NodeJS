const express = require('express');
const router = require('../router/router');
const app = express();

//middleware
app.use(express.json());

//default service call (actuator)
app.get('/', (req,res,next) => {
    res.status(200).json({
        message: 'Service is up and running',
    });
});
//req.body.firstName

//cors

app.use('/example', router)

module.exports = app;